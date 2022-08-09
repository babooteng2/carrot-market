import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import Id from "pages/api/products/[id]";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";

interface IWriteResponse {
  ok: boolean;
  post: Post;
}

interface IWriteForm {
  question: string;
}

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IWriteForm>();
  const [post, {loading, data}] = useMutation<IWriteResponse>("/api/posts");
  const onValid = (data:IWriteForm) => {
    if( loading ) return;
    post( data );
  }
  useEffect(()=>{
    if( data && data.ok ) {
      router.push(`/community/${data.post.id}`)
    }
  },[data, router]);
  return (
    <Layout canGoBack title="질문하기">
      <form className="flex flex-col mt-8 p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <TextArea           
          register={
            register("question",{required: true, minLength: 5})
          }
          label="질문하기"
          required
          placeholder="Ask a question!"/>
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </Layout>
  );
}

export default Write;