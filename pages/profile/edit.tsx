/* eslint-disable no-console */
import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import useUser from "@libs/client/useUser";
import { useEffect } from "react";

interface IEditProfileForm {
  email?: string;
  phone?: string;
  formErrors?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IEditProfileForm>();
  const onValid = ({ email, phone }: IEditProfileForm) => {
    console.log(email, phone);
    if (email === "" && phone === "") {
      setError("formErrors", {
        message: "Email OR Phone number are required. You need to choose one.",
      });
    }
  };
  useEffect(() => {
    if (user?.email) setValue("email", user.email);
    if (user?.phone) setValue("phone", user.phone);
  }, [user, setValue]);
  return (
    <Layout canGoBack title="내정보">
      <div className="py-10 px-4 space-y-4">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-full bg-slate-500" />
            <label
              htmlFor="picture"
              className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
            >
              Change
              <input
                id="picture"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
          <Input
            name="email"
            label="Email address"
            type="text"
            register={register("email")}
          />
          <Input
            name="phone"
            label="Phone number"
            kind="phone"
            type="tel"
            register={register("phone")}
          />

          {errors.formErrors ? (
            <span className="my-2 text-red-600 font-medium text-center block">
              {errors.formErrors.message}
            </span>
          ) : null}
          <span className="pt-6 block">
            <Button text="Update profile" />
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;
