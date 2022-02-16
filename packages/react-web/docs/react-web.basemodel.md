<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@elux/react-web](./react-web.md) &gt; [BaseModel](./react-web.basemodel.md)

## BaseModel class

\*

<b>Signature:</b>

```typescript
export declare abstract class BaseModel<MS extends ModuleState = {}, MP extends ModuleState = {}, RS extends RootState = {}> implements CommonModel 
```
<b>Implements:</b> [CommonModel](./react-web.commonmodel.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(moduleName, store)](./react-web.basemodel._constructor_.md) |  | Constructs a new instance of the <code>BaseModel</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [actions](./react-web.basemodel.actions.md) |  | [ActionsThis](./react-web.actionsthis.md)<!-- -->&lt;this&gt; |  |
|  [defaultRouteParams](./react-web.basemodel.defaultrouteparams.md) |  | MP |  |
|  [moduleName](./react-web.basemodel.modulename.md) |  | string |  |
|  [router](./react-web.basemodel.router.md) |  | { routeState: [RouteState](./react-web.routestate.md)<!-- -->; } |  |
|  [store](./react-web.basemodel.store.md) |  | [UStore](./react-web.ustore.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [destroy()](./react-web.basemodel.destroy.md) |  |  |
|  [dispatch(action)](./react-web.basemodel.dispatch.md) |  |  |
|  [getCurrentActionName()](./react-web.basemodel.getcurrentactionname.md) |  |  |
|  [getCurrentRootState()](./react-web.basemodel.getcurrentrootstate.md) |  |  |
|  [getCurrentState()](./react-web.basemodel.getcurrentstate.md) |  |  |
|  [getLatestState()](./react-web.basemodel.getlateststate.md) |  |  |
|  [getPrivateActions(actionsMap)](./react-web.basemodel.getprivateactions.md) |  |  |
|  [getRootState()](./react-web.basemodel.getrootstate.md) |  |  |
|  [getRouteParams()](./react-web.basemodel.getrouteparams.md) |  |  |
|  [getState()](./react-web.basemodel.getstate.md) |  |  |
|  [init(latestState, preState)](./react-web.basemodel.init.md) |  |  |
|  [loadModel(moduleName)](./react-web.basemodel.loadmodel.md) |  |  |
