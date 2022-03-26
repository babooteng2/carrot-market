// connection handler를 기본으로 export 해주면 됨

import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
  ) {
    await client.user.create({
      data: {
        email: "babooteng2@naver.com",
        name: "babooteng3",
      }
    });
    res.json({
      ok:true,      
    })
}