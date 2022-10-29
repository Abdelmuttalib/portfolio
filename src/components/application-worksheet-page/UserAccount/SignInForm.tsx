import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";

import useToast from "@/lib/hooks/use-toast";

import { Button } from "@/components/buttons";

import { firebaseAuth } from "../../../../firebase/firebase-config";

export type SignInFormFieldsT = {
  email: string;
  password: string;
};

const SignInForm = ({
  toggleCreateAccountForm,
}: {
  toggleCreateAccountForm: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormFieldsT>();

  const { addToast } = useToast();

  const onSignInSubmit = (data: SignInFormFieldsT) => {
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(() => addToast("success", "Signed in successfully"))
      .catch(() => addToast("error", "Something isn't right. Try again."));
  };
  return (
    <div className="flex h-auto justify-center text-left">
      <form
        onSubmit={handleSubmit(onSignInSubmit)}
        className="flex w-96 flex-col gap-4 rounded px-4 py-6 text-left"
      >
        <h3 className="pb-4 text-center">Sign In</h3>
        <div>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            inputMode="email"
            className="p border-primary-100 block w-full rounded-md border-2 px-4 py-2 outline-none"
          />
          {errors.email && (
            <p className="mt-0.5 text-sm text-red-600">
              {errors.email.message || "* kindly add an email"}{" "}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            inputMode="text"
            {...register("password", { required: true })}
            placeholder="password"
            className="p border-primary-100 w-full rounded-md border-2 px-4 py-2 outline-none"
          />
          {errors.password && (
            <p className="mt-0.5 text-sm text-red-600">
              {errors.password.message || "* kindly add a password"}{" "}
            </p>
          )}
        </div>

        <Button type="submit" className="w-fit">
          Sign In
        </Button>

        {/* create account */}
        <span>
          Don&apos;t have an account?{" "}
          <Button
            type="button"
            onClick={() => toggleCreateAccountForm()}
            className="text-primary-600 hover:text-primary-500 active:border-primary-600 mx-0.5 rounded-none border-none bg-transparent px-0 py-0 shadow-none hover:bg-transparent active:border-b-2 active:bg-transparent"
          >
            Create account
          </Button>
        </span>
      </form>
    </div>
  );
};

export default SignInForm;
