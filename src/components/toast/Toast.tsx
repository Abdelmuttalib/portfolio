import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useEffect } from "react";

import useToast from "@/lib/hooks/use-toast";

const Toast = ({ toast }: { toast: ToastT }) => {
  const { id, type, title } = toast;
  const { removeToast } = useToast();

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(toastTimer);
    };
  }, [id, removeToast]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: +40,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
      }}
      exit={{
        opacity: 0,
        x: +40,
        transition: { duration: 0.4 },
      }}
      className={`inline-flex h-16 w-full items-center justify-center rounded-md px-6 py-2 sm:w-96 ${
        (type === "success" && "bg-green-50 text-green-600") ||
        (type === "info" && "bg-blue-100 text-blue-600") ||
        (type === "error" && "bg-red-50 text-red-600")
      }`}
    >
      <p className="flex-1 truncate pr-6 text-lg font-medium tracking-wide">
        {title}
      </p>
      <XMarkIcon
        onClick={() => removeToast(id)}
        className="w-7 cursor-pointer rounded-full p-0.5 text-current duration-100 ease-linear hover:bg-gray-50 hover:text-gray-900"
      />
    </motion.div>
  );
};

export default Toast;
