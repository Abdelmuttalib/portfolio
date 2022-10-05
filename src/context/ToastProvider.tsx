import React, { ReactNode, useCallback, useState } from "react";

import { ToastContext } from "@/lib/hooks/use-toast";

import ToastsContainer from "@/components/toast/ToastsContainer";

let id = 0;

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastT[]>([]);

  const addToast = useCallback(
    (type: ToastT["type"], title: ToastT["title"]) => {
      setToasts((toasts) => [...toasts, { id: id++, type, title }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: ToastT["id"]) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastsContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
