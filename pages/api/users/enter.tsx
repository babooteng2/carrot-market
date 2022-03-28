// connection handler를 기본으로 export 해주면 됨

import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";

export default async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
  ) {
    if( req.method !== "POST") res.status(401).end();
    console.log( req.body );
   res.status(200).end();
}