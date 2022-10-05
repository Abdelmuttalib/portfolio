import { signOut } from "firebase/auth";
import React from "react";

import useToast from "@/lib/hooks/use-toast";

import { Button } from "@/components/buttons";

import { firebaseAuth } from "../../../../firebase/firebase-config";

const SignOut = () => {
  const { addToast } = useToast();
  const onSignOut = () => {
    signOut(firebaseAuth)
      .then(() => addToast("success", "Signed out successfully"))
      .catch(() => addToast("error", "Something went wrong. Try again."));
  };
  return (
    <div>
      <Button type="button" onClick={onSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
