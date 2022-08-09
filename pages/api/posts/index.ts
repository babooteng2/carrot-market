import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { METHODS } from "http";


async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
  ) {    
    const {
      body:{question},
      session: {user}
    } = req;
    const post = await client.post.create({
      data: {
        user: {
          connect: {
            id: user?.id
          }
        },
        question: question
      }
    })
    res.send({
      ok: true,
      post,
    })
  }

export default withApiSession( 
  withHandler({
    methods: ["POST"],
    handler,
  })
);