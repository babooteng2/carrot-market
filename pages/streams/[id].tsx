import { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";

interface IStreamResponse {
  ok: boolean;
  stream: Stream;
}

const StreamDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<IStreamResponse>(
    router.query.id ? `/api/streams/${router.query.id}` : null,
  );
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
            <Message
              message="Hi how much are you selling them for? lorem Hi how much are you selling them for?
          Hi how much are you selling them for?Hi how much are you selling them for?Hi how much are you selling them for?"
              reverse
            />
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ￦20,000" reverse />
            <Message message="no, never stop!!" />
            <Message message="I want ￦20,000" reverse />
            <Message message="no, never stop!!" />
            <Message message="I want ￦20,000" reverse />
            <Message message="no, never stop!!" />
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ￦20,000" reverse />
            <Message message="no, never stop!!" />
          </div>
        </div>
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 pr-12 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 items-center focus:ring-orange-500 focus:outline-none bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
