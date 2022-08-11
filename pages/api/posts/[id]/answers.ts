import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { METHODS } from "http";
import Id from "pages/api/products/[id]";


async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
  ) {    
    const {
      query: {id},
      session: {user},
      body: {answer}
    } = req;
    const post = await client.post.findUnique({
      where: {
        id: +id.toString(),
      },
      select: {
        id: true,
      }      
    });
    if( !post ) res.status(404).json({ok: false, message: "Not found post"});
    else {
      const newAnswer = await client.answer.create({
        data: {
          user: {
            connect: {
              id: user?.id,
            }
          },
          post: {
            connect: {
              id: +id.toString()
            }
          },
          answer
        }        
      })
      console.log( newAnswer )
      res.send({
        ok: true,
        answer: newAnswer
      })
    }    
  }

export default withApiSession( 
  withHandler({
    methods: ["POST"],
    handler,
  })
);