<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@elux/vue-web](./vue-web.md) &gt; [API](./vue-web.api.md)

## API type

\*

<b>Signature:</b>

```typescript
export declare type API<TFacade extends Facade> = {
    State: {
        [N in keyof TFacade]?: TFacade[N]['state'];
    };
    GetActions<N extends keyof TFacade>(...args: N[]): {
        [K in N]: TFacade[K]['actions'];
    };
    LoadComponent: ILoadComponent<TFacade>;
    Modules: {
        [N in keyof TFacade]: Pick<TFacade[N], 'name' | 'actions' | 'actionNames' | 'data'>;
    };
    Actions: {
        [N in keyof TFacade]: keyof TFacade[N]['actions'];
    };
};
```
<b>References:</b> [Facade](./vue-web.facade.md)<!-- -->, [ILoadComponent](./vue-web.iloadcomponent.md)
