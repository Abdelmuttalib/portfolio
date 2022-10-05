import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export const UserContext = createContext<User | null>(null);

export const useUser = (): User | null => {
  const user = useContext(UserContext);

  if (!user) {
    return null;
  }

  return user;
};
