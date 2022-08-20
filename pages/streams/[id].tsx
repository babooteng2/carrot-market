import { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { useEffect } from "react";

interface IstreamMessage {
  message: string;
  id: number;
  user: {
    avatar?: string;
    id: number;
  };
}

interface IStreamWithMessages extends Stream {
  //  messages: (MessageData & {user: {avater?: string , id: number}})[];
  messages: IstreamMessage[];
}

interface IMessageForm {
  message: string;
}
interface IStreamResponse {
  ok: boolean;
  stream: IStreamWithMessages;
}

const StreamDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<IMessageForm>();
  const { data, mutate } = useSWR<IStreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null,
  );
  const [sendMessage, { loading, data: sendMessageData }] = useMutation(
    `/api/streams/${router.query.id}/messages`,
  );
  const onValid = (form: IMessageForm) => {
    if (loading) return;
    reset();
    sendMessage(form);
  };
  useEffect(() => {
    if (sendMessageData && sendMessageData.ok) {
      mutate();
    }
  }, [sendMessageData, mutate]);
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">
            {data?.stream?.name}
          </h1>
          <span className="text-2xl block mt-3 text-gray-900">
            {data?.stream?.price}
          </span>
          <p className=" my-6 text-gray-700">{data?.stream?.description}</p>
        </div>
        <div>
          <h2 className="text-gray-900 font-bold text-2xl">Live Chat</h2>
          <div className="pt-10 pb-16 px-4 space-y-4 h-[50vh] overflow-y-auto">
            {data?.stream.messages.map(message => (
              <Message
                key={message.id}
                message={message.message}
                reverse={message.user.id === user?.id}
              />
            ))}
          </div>
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <form
            className="flex relative items-center"
            onSubmit={handleSubmit(onValid)}
          >
            <input
              {...register("message", { required: true })}
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 pr-12 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 items-center focus:ring-orange-500 focus:outline-none bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600">
                {loading ? "Sending..." : null} &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
