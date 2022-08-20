import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const {
    session: { user },
    body: { name, price, description },
    query: { page },
  } = req;

  if (req.method === "POST") {
    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      stream,
    });
  } else if (req.method === "GET") {
    const queryPage = page ? +page.toString() : 1;
    const currentPage = queryPage - 1;
    const pageSize = 10;
    const streams = await client.stream.findMany({
      take: pageSize,
      skip: currentPage * pageSize,
    });
    console.log(page, currentPage, pageSize);
    res.json({
      ok: true,
      streams,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler }),
);
