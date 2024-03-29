import { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import { Stream } from "@prisma/client";
import useSWR from "swr";
import { useRouter } from "next/router";

interface IStreamsResponse {
  ok: boolean;
  streams: Stream[];
}

const Streams: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<IStreamsResponse>(
    `/api/streams?page=${router.query.page ? router.query.page : 0}`,
  );
  return (
    <Layout title="라이브" hasTabBar>
      <div className="divide-y-[1px] space-y-6">
        {data?.streams?.map(stream => (
          <Link key={stream.id} href={`/streams/${stream.id}`}>
            <a className="px-4 block pt-10">
              <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
              <h3 className="text-gray-700 text-2xl font-semibold mt-2">
                {stream.name}
              </h3>
            </a>
          </Link>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
