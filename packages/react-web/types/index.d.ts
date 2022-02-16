import { ComponentType } from 'react';
import { Facade, ModuleGetter, StoreMiddleware, StoreLogger } from '@elux/core';
import { LoadComponentOptions } from '@elux/react-components';
import { UserConfig, GetBaseFacade, RenderOptions } from '@elux/app';
export { DocumentHead, Switch, Else, Link } from '@elux/react-components';
export type { DocumentHeadProps, SwitchProps, ElseProps, LinkProps, LoadComponentOptions } from '@elux/react-components';
export { errorAction, LoadingState, env, effect, reducer, setLoading, effectLogger, isServer, deepMerge, exportModule, exportView, exportComponent, modelHotReplacement, EmptyModel, BaseModel, loadModel, getModule, getComponent, } from '@elux/core';
export type { Facade, Dispatch, UStore, DeepPartial, StoreMiddleware, StoreLogger, CommonModule, Action, HistoryAction } from '@elux/core';
export type { GetState, EluxComponent, AsyncEluxComponent, CommonModelClass, ModuleAPI, ReturnComponents, GetPromiseModule, GetPromiseComponent, ModuleState, RootState, CommonModel, RouteState, ActionsThis, PickHandler, ModuleGetter, LoadComponent, HandlerThis, FacadeStates, FacadeModules, FacadeActions, FacadeRoutes, PickActions, UNListener, ActionCreator, } from '@elux/core';
export { location, createRouteModule, safeJsonParse } from '@elux/route';
export type { NativeLocationMap, EluxLocation, NativeLocation, StateLocation, URouter, UHistoryRecord, ULocationTransform, PagenameMap, } from '@elux/route';
export { getApi, patchActions } from '@elux/app';
export type { ComputedStore, GetBaseFacade, UserConfig, RenderOptions } from '@elux/app';
export { connectRedux, shallowEqual, useSelector, createSelectorHook } from '@elux/react-redux';
export type { InferableComponentEnhancerWithProps, GetProps } from '@elux/react-redux';
/**
 * 获取应用顶级API类型
 *
 * @remarks
 * - `TFacade`: 各模块接口，可通过`Facade<ModuleGetter>`获取
 *
 * - `TRouteModuleName`: 路由模块名称，默认为`route`
 *
 * @typeParam TFacade - 各模块接口，可通过`Facade<ModuleGetter>`获取
 * @typeParam TRouteModuleName - 路由模块名称，默认为`route`
 *
 * @public
 */
export declare type GetFacade<TFacade extends Facade, TRouteModuleName extends string = 'route'> = GetBaseFacade<TFacade, LoadComponentOptions, TRouteModuleName>;
/**
 * 全局参数设置
 *
 * @remarks
 * 必须放在初始化最前面，通常没必要也不支持二次修改
 *
 * - UserConfig：{@link UserConfig | UserConfig}
 *
 * - LoadComponentOnError：用于LoadComponent(...)，组件加载失败时的显示组件，此设置为全局默认，LoadComponent方法中可以单独设置
 *
 * - LoadComponentOnLoading：用于LoadComponent(...)，组件加载中的Loading组件，此设置为全局默认，LoadComponent方法中可以单独设置
 *
 * @param conf - 全局参数
 *
 * @public
 */
export declare function setConfig(conf: UserConfig & {
    LoadComponentOnError?: ComponentType<{
        message: string;
    }>;
    LoadComponentOnLoading?: ComponentType<{}>;
}): void;
/**
 * 创建应用(CSR)
 *
 * @remarks
 * 应用唯一的创建入口，用于客户端渲染(CSR)，服务端渲染(SSR)请使用{@link createSSR | createSSR(...)}
 *
 * @param moduleGetter - 模块工厂
 * @param storeMiddlewares - store中间件
 * @param storeLogger - store日志记录器
 *
 * @returns 返回包含`render(...)`方法的下一步实例
 *
 * @public
 */
export declare function createApp(moduleGetter: ModuleGetter, storeMiddlewares?: StoreMiddleware[], storeLogger?: StoreLogger): {
    render({ id, ssrKey, viewName }?: RenderOptions): Promise<void>;
};
/**
 * 创建应用(SSR)
 *
 * @remarks
 * 应用唯一的创建入口，用于服务端渲染(SSR)，客户端渲染(CSR)请使用{@link createApp | createApp(...)}
 *
 * @param moduleGetter - 模块工厂
 * @param url - 服务器收到的原始url
 * @param nativeData - 可存放任何原始请求数据
 * @param storeMiddlewares - store中间件
 * @param storeLogger - store日志记录器
 *
 * @returns 返回包含`render(...)`方法的下一步实例
 *
 * @public
 */
export declare function createSSR(moduleGetter: ModuleGetter, url: string, nativeData: any, storeMiddlewares?: StoreMiddleware[], storeLogger?: StoreLogger): {
    render({ id, ssrKey, viewName }?: RenderOptions): Promise<string>;
};
//# sourceMappingURL=index.d.ts.map