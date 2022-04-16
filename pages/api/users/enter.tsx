// connection handler를 기본으로 export 해주면 됨

import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
  ) {
    const { phone, email } = req.body;    
    const user = phone ? {phone : +phone} : email ? {email} : null;
    // Bad Request
    if( !user ) return res.json({ok: false});
    const payload = Math.floor(100000 + Math.random() * 90000) + "";
    const token = await client.token.create({
      data: {
        payload,
        user: {
          connectOrCreate: {
            where: {
              ...user,
            },
            create: {
              name: "Anonymous",
              ...user,
            },
          }
        },
      }
    });
    console.log( token )    
    return res.json({
      ok: true,
    })
}

export default withHandler("POST", handler);