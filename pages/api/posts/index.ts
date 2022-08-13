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
    if( req.method === "POST") {
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
      res.json({
        ok: true,
        post,
      })
    }
  
  if( req.method === "GET") {
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
            createdAt: true
          }
        },
        _count: {
          select: {
            curiosities: true,
            answers: true
          }
        }        
      },      
    });
    res.json({
      ok: true,
      posts,      
    })
  }
}
export default withApiSession( 
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);