import { createContext, useContext } from "react";

type ToastContextProps = {
  addToast: (type: "success" | "info" | "error", title: string) => void;
  removeToast: (id: number) => void;
};
export const ToastContext = createContext<ToastContextProps | null>(null);

const useToast = (): ToastContextProps => {
  const result = useContext(ToastContext);

  if (!result) {
    throw new Error();
    // return null;
  }

  return result;
};

export default useToast;
