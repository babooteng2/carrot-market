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
  console.log( req.session.user )
  const profile = await client.user.findUnique({where: {id: req.session.user?.id }})
  //res.status(200).end();    
  res.json({
    ok: true,
    profile,
  })
}

export default withIronSessionApiRoute( withHandler({methods: ["GET"], handler, isPrivate: false}), {
  cookieName: "carrotsession",
  password:"514216516516151421651651615142165165161"
});