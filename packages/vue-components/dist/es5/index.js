import { reactive } from 'vue';
import { setCoreConfig } from '@elux/core';
import AppRender from './App';
import { UseRouter, UseStore } from './base';
import { LoadComponent, LoadComponentOnError, LoadComponentOnLoading } from './LoadComponent';
setCoreConfig({
  MutableData: true,
  StoreInitState: function StoreInitState() {
    return reactive({});
  },
  UseStore: UseStore,
  UseRouter: UseRouter,
  AppRender: AppRender,
  LoadComponent: LoadComponent,
  LoadComponentOnError: LoadComponentOnError,
  LoadComponentOnLoading: LoadComponentOnLoading
});
export { RouterComponent } from './Router';
export { DocumentHead } from './DocumentHead';
export { Switch } from './Switch';
export { Else } from './Else';
export { Link } from './Link';