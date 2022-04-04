// connection handler를 기본으로 export 해주면 됨

import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";


async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
  ) {
    if( req.method !== "POST") res.status(401).end();
    console.log( req.body );
    res.status(200).end();   
}

export default withHandler("POST", handler);