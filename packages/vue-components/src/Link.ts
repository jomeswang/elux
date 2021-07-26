import {h, AnchorHTMLAttributes, inject} from 'vue';
import {EluxContext, EluxContextKey} from './base';

type MouseEvent = any;

export interface Props extends AnchorHTMLAttributes {
  replace?: boolean;
}

function isModifiedEvent(event: MouseEvent) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function (props: Props, context: {slots: any}) {
  const {router} = inject<EluxContext>(EluxContextKey, {documentHead: ''});
  const {onClick, replace, ...rest} = props;
  const {target} = rest;
  const newProps = {
    ...rest,
    onClick: (event: MouseEvent) => {
      try {
        onClick && onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }
      if (
        !event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore everything but left clicks
        (!target || target === '_self') && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
        event.preventDefault();
        replace ? router!.replace(rest.href!) : router!.push(rest.href!);
      }
    },
  };
  return h('a', newProps, context.slots);
}