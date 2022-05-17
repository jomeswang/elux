import React from 'react';
import { RouteAction, RouteTarget } from '@elux/core';
/**
 * 内置UI组件
 *
 * @remarks
 * 类似于Html标签`<a>`，用组件的方式执行路由跳转，参见 {@link IRouter}
 *
 * @example
 * ```html
 *<Link disabled={pagename==='/home'} to='/home' action='push' target='window'>home</Link>
 * ```
 *
 * @public
 */
export interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 如果disabled将不执行路由及onClick事件
     */
    disabled?: boolean;
    /**
     * 指定跳转的url或后退步数
     */
    to?: string;
    /**
     * 点击事件
     */
    onClick?(event: React.MouseEvent): void;
    /**
     * 路由跳转动作
     */
    action?: Exclude<RouteAction, 'init'>;
    /**
     * 指定要操作的历史栈
     */
    target?: RouteTarget;
}
/**
 * 内置UI组件
 *
 * @remarks
 * 参见：{@link LinkProps}
 *
 * @public
 */
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Link.d.ts.map