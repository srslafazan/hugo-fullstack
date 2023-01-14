import { Context, createContext } from "react";

export const ModalContext: Context<any> = createContext({
  type: null,
  update: () => {},
});
