<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@elux/react-taro](./react-taro.md) &gt; [Action](./react-taro.action.md)

## Action interface

定义Action

<b>Signature:</b>

```typescript
export interface Action 
```

## Remarks

类似于 `Redux` 或 `Vuex` 的 Action，增加了 `priority` 设置，用来指明同时有多个 handelr 时的处理顺序

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [payload?](./react-taro.action.payload.md) | any\[\] | <i>(Optional)</i> action数据 |
|  [priority?](./react-taro.action.priority.md) | string\[\] | <i>(Optional)</i> 通常无需设置，同时有多个 handelr 时，可以特别指明处理顺序，其值为 moduleName 数组 |
|  [type](./react-taro.action.type.md) | string | action名称不能重复，通常由：ModuleName.ActionName 组成 |
