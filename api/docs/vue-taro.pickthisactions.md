<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@elux/vue-taro](./vue-taro.md) &gt; [PickThisActions](./vue-taro.pickthisactions.md)

## PickThisActions type

\*

<b>Signature:</b>

```typescript
export declare type PickThisActions<T> = {
    [K in Exclude<keyof T, 'moduleName' | 'state' | 'onActive' | 'onInactive' | 'onMount'>]: HandlerToAction<T[K]>;
};
```
<b>References:</b> [HandlerToAction](./vue-taro.handlertoaction.md)
