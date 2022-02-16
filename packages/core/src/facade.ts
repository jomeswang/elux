import {
  CommonModel,
  CommonModule,
  CommonModelClass,
  EluxComponent,
  AsyncEluxComponent,
  UStore,
  MetaData,
  EStore,
  Action,
  mergeState,
  ModuleState,
  RootState,
  RouteState,
} from './basic';
import {reducer, ActionTypes} from './actions';
import {exportModule as _exportModule} from './modules';
import {loadModel} from './inject';

/*** @public */
export type PickHandler<F> = F extends (...args: infer P) => any
  ? (...args: P) => {
      type: string;
    }
  : never;

/*** @public */
export type PickActions<T> = Pick<
  {[K in keyof T]: PickHandler<T[K]>},
  {
    [K in keyof T]: T[K] extends Function ? Exclude<K, 'destroy' | 'init'> : never;
  }[keyof T]
>;

/*** @public */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function exportModule<N extends string, H extends CommonModel, C extends {[componentName: string]: EluxComponent | AsyncEluxComponent}, D>(
  moduleName: N,
  ModelClass: CommonModelClass<H>,
  components: C,
  data?: D
) {
  return _exportModule(moduleName, ModelClass, components, data) as {
    moduleName: N;
    initModel: (store: UStore) => void | Promise<void>;
    state: ReturnType<H['init']>;
    routeParams: H['defaultRouteParams'];
    actions: PickActions<H>;
    components: C;
    data: D;
  };
}

/*** @public */
export type GetPromiseComponent<T> = T extends () => Promise<{default: infer R}> ? R : T;

/*** @public */
export type ReturnComponents<CS extends Record<string, EluxComponent | (() => Promise<{default: EluxComponent}>)>> = {
  [K in keyof CS]: GetPromiseComponent<CS[K]>;
};

/*** @public */
export type ModuleAPI<M extends CommonModule> = {
  name: string;
  components: ReturnComponents<M['components']>;
  state: M['state'];
  actions: M['actions'];
  actionNames: {[K in keyof M['actions']]: string};
  routeParams: M['routeParams'];
  data: M['data'];
};

/*** @public */
export type GetPromiseModule<T> = T extends Promise<{default: infer R}> ? R : T;

/*** @public */
export type Facade<
  G extends {
    [N in Extract<keyof G, string>]: () => CommonModule<N> | Promise<{default: CommonModule<N>}>;
  } = any
> = {[K in Extract<keyof G, string>]: ModuleAPI<GetPromiseModule<ReturnType<G[K]>>>};

/*** @public */
export type LoadComponent<F extends Facade = {}, O = any> = <M extends keyof F, V extends keyof F[M]['components']>(
  moduleName: M,
  componentName: V,
  options?: O
) => F[M]['components'][V];

/*** @public */
export type FacadeActions<F extends Facade, R extends string> = {[K in Exclude<keyof F, R>]: keyof F[K]['actions']};

/*** @public */
export type FacadeRoutes<F extends Facade, R extends string> = {[K in Exclude<keyof F, R>]?: F[K]['routeParams']};

/*** @public */
export type FacadeModules<F extends Facade, R extends string> = {[K in Exclude<keyof F, R>]: Pick<F[K], 'name' | 'actions' | 'actionNames'>};

/*** @public */
export type FacadeStates<F extends Facade, R extends string> = {
  [K in keyof F]: K extends R ? RouteState<FacadeRoutes<F, R>, F[R]['data']> : F[K]['state'];
};

/*** @public */
export type HandlerThis<T> = T extends (...args: infer P) => any
  ? (...args: P) => {
      type: string;
    }
  : undefined;

/*** @public */
export type ActionsThis<T> = {[K in keyof T]: HandlerThis<T[K]>};

/**
 * Model基类
 *
 * @remarks
 * - `TModuleState`: 本模块的状态结构
 *
 * - `TRouteParams`: 本模块的路由参数结构
 *
 * - `TRootState`: 全局状态结构
 *
 * @typeParam TModuleState - 本模块的状态结构
 * @typeParam TRouteParams - 本模块的路由参数结构
 * @typeParam TRootState - 全局状态结构
 *
 * @public
 */
export abstract class BaseModel<TModuleState extends ModuleState = {}, TRouteParams extends ModuleState = {}, TRootState extends RootState = {}>
  implements CommonModel
{
  /**
   * 本模块的路由参数默认值
   *
   * @remarks
   * 实际路由参数由`URL传值`+`默认值`deepMerge所得
   *
   */
  abstract defaultRouteParams: TRouteParams;
  /**
   * 获取本模块的状态初始值
   *
   * @remarks
   * 模块初始化时将调用此方法获取状态初始值
   *
   * @param latestState - 当前最新的全局状态（多个PageStore合并后的状态）
   * @param preState - 提前预置的全局状态（通常用于SSR时传递脱水状态）
   *
   * @returns 返回本模块的状态初始值
   *
   */
  abstract init(latestState: RootState, preState: RootState): TModuleState;

  constructor(public readonly moduleName: string, public store: UStore) {}

  /**
   * 获取本模块的公开actions构造器
   */
  protected get actions(): ActionsThis<this> {
    return MetaData.moduleMap[this.moduleName].actions as any;
  }

  /**
   * 获取当前Router
   */
  protected get router(): unknown {
    return (this.store as EStore).router;
  }

  /**
   * 获取本模块当前路由参数
   */
  protected getRouteParams(): TRouteParams {
    return this.store.getRouteParams(this.moduleName) as TRouteParams;
  }

  /**
   * 获取全局的当前状态
   *
   * @remarks
   * 使用虚拟多页模式时，应用可能同时存在多个Page（但有且只有一个最顶层的Page处于激活状态，其它Page处于历史堆栈中），每个Page将对应一个独立的Store，每个Store都由自己的RootState。
   * 注意以下三者的区别：
   *
   * - {@link BaseModel.getRootState | getRootState(): TRootState}
   *
   * - {@link BaseModel.getCurrentRootState | getCurrentRootState(): TRootState}
   *
   * - {@link BaseModel.getLatestState | getLatestState(): TRootState}
   */
  protected getLatestState(): TRootState {
    return (this.store as EStore).router.latestState as TRootState;
  }

  /**
   * 获取本模块的私有actions构造器
   */
  protected getPrivateActions<T extends Record<string, Function>>(actionsMap: T): {[K in keyof T]: PickHandler<T[K]>} {
    return MetaData.moduleMap[this.moduleName].actions as any;
  }

  /**
   * 获取本模块的当前状态
   */
  protected getState(): TModuleState {
    return this.store.getState(this.moduleName) as TModuleState;
  }

  /** {@inheritDoc BaseModel.getLatestState} */
  protected getRootState(): TRootState {
    return this.store.getState() as TRootState;
  }

  /**
   * 获取当前执行的action.type
   */
  protected getCurrentActionName(): string {
    return (this.store as EStore).getCurrentActionName();
  }

  /**
   * 获取本模块的实时状态
   */
  protected getCurrentState(): TModuleState {
    return (this.store as EStore).getCurrentState(this.moduleName) as TModuleState;
  }

  /** {@inheritDoc BaseModel.getLatestState} */
  protected getCurrentRootState(): TRootState {
    return (this.store as EStore).getCurrentState();
  }

  protected dispatch(action: Action): void | Promise<void> {
    return this.store.dispatch(action);
  }

  // protected dispatch(action: Action): void | Promise<void> {
  //   return this.router.getCurrentStore().dispatch(action);
  // }

  protected loadModel(moduleName: string): void | Promise<void> {
    return loadModel(moduleName, this.store);
  }

  // protected getRouteParams(): ModuleState | undefined {
  //   return this.store.getRouteParams(this.moduleName);
  //   // const route = this.store.getRouteParams(this.moduleName);
  //   // return route.params[this.moduleName];
  // }

  @reducer
  public [ActionTypes.MInit](initState: TModuleState): TModuleState {
    return initState;
  }

  @reducer
  public [ActionTypes.MLoading](payload: {[groupKey: string]: string}): TModuleState {
    const state = this.getState();
    const loading = mergeState(state.loading, payload);
    return mergeState(state, {loading});
  }

  public destroy(): void {
    return;
  }
}
