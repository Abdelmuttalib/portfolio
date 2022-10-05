import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";

import confirmPasswordFormOptions from "@/lib/helpers/confirm-password-form-schema";
import useToast from "@/lib/hooks/use-toast";

import { Button } from "@/components/buttons";

import { firebaseAuth } from "../../../../firebase/firebase-config";

export type CreateAccountFormFieldsT = {
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccountForm = ({
  toggleSignInForm,
}: {
  toggleSignInForm: () => void;
}) => {
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormFieldsT>(confirmPasswordFormOptions);

  const onCreateAccountSubmit = (data: CreateAccountFormFieldsT) => {
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(() => addToast("success", "Account created successfully"))
      .catch(() => addToast("error", "Something went wrong. Try again."));
  };
  return (
    <div className="flex h-auto justify-center text-left">
      <form
        onSubmit={handleSubmit(onCreateAccountSubmit)}
        className="flex w-96 flex-col gap-4 rounded px-4 py-6 text-left"
      >
        <h3 className="pb-4 text-center">Create a new account</h3>
        <div>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            inputMode="email"
            className="p w-full rounded-md border-2 border-primary-100 px-4 py-2 outline-none"
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
            className="p w-full rounded-md border-2 border-primary-100 px-4 py-2 outline-none"
          />
          {errors.password && (
            <p className="mt-0.5 text-sm text-red-600">
              {errors.password.message || "* kindly add a password"}{" "}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            inputMode="text"
            {...register("confirmPassword", { required: true })}
            placeholder="confirm password"
            className="p w-full rounded-md border-2 border-primary-100 px-4 py-2 outline-none"
          />

          {errors.confirmPassword && (
            <p className="mt-0.5 text-sm text-red-600">
              {errors.confirmPassword.message || "* kindly confirm password"}
            </p>
          )}
        </div>

        <Button type="submit" className="w-fit">
          Create Account
        </Button>

        {/* sign in */}
        <span>
          Already have an account?{" "}
          <Button
            type="button"
            onClick={() => toggleSignInForm()}
            className="mx-0.5 rounded-none border-none bg-transparent px-0 py-0 text-primary-600 shadow-none hover:bg-transparent hover:text-primary-500 active:border-b-2 active:border-primary-600 active:bg-transparent"
          >
            Sign in
          </Button>
        </span>
      </form>
    </div>
  );
};

export default CreateAccountForm;
