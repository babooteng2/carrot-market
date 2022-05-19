import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

declare module "iron-session" {
  interface IronSessionData {
    user? : {
      id: number;   
    }
  }
}

async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
  ) {
    console.log( "REQ_SESSION : ",req.session );
    const { token } = req.body;
    console.log( "TOKEN : " ,  token );
    const exists = await client.token.findUnique({
      where: {
    payload: token,
    },
    include: { user: true},
  });
  if( !exists ) return res.status(404).end();  
  req.session.user = {
    id: exists.userId
  }
  await req.session.save();
  res.status(200).end();    
}

export default withIronSessionApiRoute( withHandler({methods: ["POST"], handler, isPrivate: false}), {
  cookieName: "carrotsession",
  password:"514216516516151421651651615142165165161"
});