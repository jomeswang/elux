import {ComponentType} from 'react';
import {RootModuleFacade, defineModuleGetter} from '@elux/core';
import {setReactComponentsConfig, loadComponent, LoadComponentOptions, useRouter} from '@elux/react-components';
import {renderToString, renderToDocument} from '@elux/react-components/stage';
import {createBaseApp, createBaseSSR, setAppConfig, setUserConfig, CreateApp, CreateSSR, UserConfig, GetBaseAPP} from '@elux/app';
import {createRouter, LocationData} from '@elux/route-browser';

export {DocumentHead, Switch, Else, Link, loadComponent} from '@elux/react-components';
export * from '@elux/app';

setAppConfig({loadComponent, useRouter});

declare const location: LocationData;
export type GetApp<A extends RootModuleFacade, R extends string = 'route', NT = unknown> = GetBaseAPP<A, LoadComponentOptions, R, NT>;

export function setConfig(
  conf: UserConfig & {LoadComponentOnError?: ComponentType<{message: string}>; LoadComponentOnLoading?: ComponentType<{}>}
): void {
  setReactComponentsConfig(conf);
  setUserConfig(conf);
}

export const createApp: CreateApp = (moduleGetter, middlewares) => {
  defineModuleGetter(moduleGetter);
  const url = ['n:/', location.pathname, location.search].join('');
  const router = createRouter(url, {});
  return createBaseApp({}, router, renderToDocument, middlewares);
};
export const createSSR: CreateSSR = (moduleGetter, url, nativeData, middlewares) => {
  defineModuleGetter(moduleGetter);
  const router = createRouter('n:/' + url, nativeData);
  return createBaseSSR({}, router, renderToString, middlewares);
};
