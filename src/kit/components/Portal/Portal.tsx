import { PropsWithChildren, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: PropsWithChildren) => {

  const createRef = useCallback(() => {
    if (!document) {
      return {} as HTMLDivElement;
    }

    const existed = document.querySelector('#q-portal');

    if (existed) {
      return existed;
    }

    const div = document.createElement('div');
    div.classList.add('q-portal');
    div.setAttribute('id', 'q-portal');
    document.body.appendChild(div);
    return div;
  }, []);


  return createPortal(children, createRef());
};

export {
  Portal
};