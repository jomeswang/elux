<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@elux/vue-taro](./vue-taro.md) &gt; [AsyncEluxComponent](./vue-taro.asynceluxcomponent.md)

## AsyncEluxComponent type

表示该UI组件是一个异步EluxUI

<b>Signature:</b>

```typescript
export declare type AsyncEluxComponent = () => Promise<{
    default: EluxComponent;
}>;
```
<b>References:</b> [EluxComponent](./vue-taro.eluxcomponent.md)

## Remarks

EluxUI组件通常通过 [exportComponent()](./vue-taro.exportcomponent.md) 导出，可使用 [ILoadComponent](./vue-taro.iloadcomponent.md) 加载
