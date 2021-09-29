import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useContext, useCallback } from 'react';
import { EluxContextComponent } from './base';
export default React.forwardRef(function (_ref, ref) {
  var _onClick = _ref.onClick,
      href = _ref.href,
      route = _ref.route,
      root = _ref.root,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? 'push' : _ref$action,
      props = _objectWithoutPropertiesLoose(_ref, ["onClick", "href", "route", "root", "action"]);

  var eluxContext = useContext(EluxContextComponent);
  var router = eluxContext.router;
  var onClick = useCallback(function (event) {
    event.preventDefault();
    _onClick && _onClick(event);
    route && router[action](route, root);
  }, [_onClick, action, root, route, router]);
  props['onClick'] = onClick;

  if (href) {
    return React.createElement("a", _extends({}, props, {
      href: href,
      ref: ref
    }));
  } else {
    return React.createElement("div", _extends({}, props, {
      ref: ref
    }));
  }
});