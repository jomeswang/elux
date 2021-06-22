import './env';
import type { ComponentType } from 'react';
import type { ModuleGetter, IStoreMiddleware, StoreBuilder, BStoreOptions, BStore, RootModuleFacade, RootModuleAPI, RootModuleActions } from '@elux/core';
import type { IRouter } from '@elux/route-browser';
import type { LoadView } from './loadView';
export type { RootModuleFacade as Facade, Dispatch, CoreModuleState as BaseModuleState } from '@elux/core';
export type { RouteState, PayloadLocation, LocationTransform, NativeLocation, PagenameMap, HistoryAction, Location, DeepPartial } from '@elux/route';
export type { LoadView } from './loadView';
export type { ConnectRedux } from '@elux/react-web-redux';
export type { ReduxStore, ReduxOptions } from '@elux/core-redux';
export { ActionTypes, LoadingState, env, effect, errorAction, reducer, setLoading, logger, isServer, serverSide, clientSide, deepMerge, deepMergeState, exportModule, isProcessedError, setProcessedError, delayPromise, defineView, } from '@elux/core';
export { ModuleWithRouteHandlers as BaseModuleHandlers, RouteActionTypes, createRouteModule } from '@elux/route';
export { connectRedux, createRedux, Provider } from '@elux/react-web-redux';
export { DocumentHead } from './components/DocumentHead';
export { Else } from './components/Else';
export { Switch } from './components/Switch';
export { Link } from './components/Link';
export declare function setSsrHtmlTpl(tpl: string): void;
export declare function setConfig(conf: {
    actionMaxHistory?: number;
    pagesMaxHistory?: number;
    pagenames?: Record<string, string>;
    NSP?: string;
    MSP?: string;
    MutableData?: boolean;
    DepthTimeOnLoading?: number;
    LoadViewOnError?: ComponentType<{
        message: string;
    }>;
    LoadViewOnLoading?: ComponentType<{}>;
    disableNativeRoute?: boolean;
}): void;
export interface RenderOptions {
    viewName?: string;
    id?: string;
    ssrKey?: string;
}
export interface SSROptions {
    viewName?: string;
    id?: string;
    ssrKey?: string;
    url: string;
}
export declare function createApp(moduleGetter: ModuleGetter, middlewares?: IStoreMiddleware[], appModuleName?: string): {
    useStore<O extends BStoreOptions = BStoreOptions, B extends BStore<{}> = BStore<{}>>({ storeOptions, storeCreator }: StoreBuilder<O, B>): {
        render({ id, ssrKey, viewName }?: RenderOptions): Promise<import("@elux/core").IStore<any> & B>;
        ssr({ id, ssrKey, url, viewName }: SSROptions): Promise<string>;
    };
};
export declare function patchActions(typeName: string, json?: string): void;
export declare type GetAPP<A extends RootModuleFacade> = {
    State: {
        [M in keyof A]: A[M]['state'];
    };
    RouteParams: {
        [M in keyof A]?: A[M]['params'];
    };
    GetRouter: () => IRouter<{
        [M in keyof A]: A[M]['params'];
    }, Extract<keyof A['route']['components'], string>>;
    GetActions<N extends keyof A>(...args: N[]): {
        [K in N]: A[K]['actions'];
    };
    LoadView: LoadView<A>;
    Modules: RootModuleAPI<A>;
    Actions: RootModuleActions<A>;
    Pagenames: {
        [K in keyof A['route']['components']]: K;
    };
};
export declare function getApp<T extends {
    GetActions: any;
    GetRouter: any;
    LoadView: any;
    Modules: any;
    Pagenames: any;
}>(): Pick<T, 'GetActions' | 'GetRouter' | 'LoadView' | 'Modules' | 'Pagenames'>;
