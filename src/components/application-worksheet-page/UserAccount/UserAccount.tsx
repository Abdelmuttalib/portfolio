import { useCallback, useState } from "react";

import { useUser } from "@/lib/hooks/use-user";

import CreateAccountForm from "./CreateAccountForm";
import SignInForm from "./SignInForm";
import SignOut from "./SignOut";

const UserAccount = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const user = useUser();

  const toggleShowSignIn = useCallback(() => {
    setShowSignIn((prev) => !prev);
  }, []);

  return (
    <div>
      {!user &&
        (showSignIn ? (
          <SignInForm toggleCreateAccountForm={toggleShowSignIn} />
        ) : (
          <CreateAccountForm toggleSignInForm={toggleShowSignIn} />
        ))}
      {user && user.email}
      {user && <SignOut />}
    </div>
  );
};

export default UserAccount;
