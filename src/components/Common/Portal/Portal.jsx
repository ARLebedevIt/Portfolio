import { createPortal } from "react-dom";

export const Portal = ({ children, element }) => {
  return createPortal(children, element = document.body);
};