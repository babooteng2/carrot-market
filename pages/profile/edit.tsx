/* eslint-disable no-console */
import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import useUser from "@libs/client/useUser";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";

interface IEditProfileResponse {
  ok: boolean;
  error?: string;
}
interface IEditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  formErrors?: string;
  avatar?: FileList;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    watch,
  } = useForm<IEditProfileForm>();
  const [editProfile, { data, loading }] =
    useMutation<IEditProfileResponse>(`/api/users/me`);
  const onValid = async ({ email, phone, name, avatar }: IEditProfileForm) => {
    if (loading) return;
    if (email === "" && phone === "" && name === "") {
      return setError("formErrors", {
        message: "Email OR Phone number are required. You need to choose one.",
      });
    }
    if (avatar && avatar.length > 0 && user?.id) {
      // ask for CF URL
      const cloudflareRequest = await fetch(`/api/files`);
      const { uploadURL } = await cloudflareRequest.json();
      // upload file to CF URL
      const form = new FormData();
      form.append("file", avatar[0], `${user?.id}`);
      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: form,
        })
      ).json();

      editProfile({
        email,
        phone,
        name,
        avatarId: id,
      });
    }
    editProfile({
      email,
      phone,
      name,
    });
  };
  const [avatarPreview, setAvatarPreview] = useState<string>();
  useEffect(() => {
    if (user?.email) setValue("email", user.email);
    if (user?.phone) setValue("phone", user.phone);
    if (user?.name) setValue("phone", user.name);
    if (user?.avatar)
      setAvatarPreview(
        `https://imagedelivery.net/fe4Q0psONJV8oImEl9R2AQ/${user.avatar}/public`,
      );
  }, [user, setValue]);
  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
  }, [data]);
  const avatarWatching = watch("avatar");
  useEffect(() => {
    if (avatarWatching && avatarWatching.length > 0) {
      const file = avatarWatching[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatarWatching]);
  return (
    <Layout canGoBack title="내정보">
      <div className="py-10 px-4 space-y-4">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex items-center space-x-3">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                className="w-14 h-14 rounded-full bg-slate-500"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-slate-500" />
            )}
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
                {...register("avatar")}
              />
            </label>
          </div>
          <Input
            name="name"
            label="name"
            type="text"
            register={register("name")}
          />
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
            <Button loading={loading} text="Update profile" />
          </span>
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;
