// connection handler를 기본으로 export 해주면 됨

import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";


async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
  ) {

   /*  if( req.method !== "POST") res.status(401).end();
    console.log( req.body ); */
     const { phone, email } = req.body;
     const payload = phone ? {phone : +phone} : {email};
   
      const user = await client.user.upsert({      
        where: {
          ...payload,
         /*  ...(phone && {phone: +phone} ),
          ...(email && {email} ), */
        },
        create: {
          name: "Anonymous",
          ...payload,
          /* ...(phone && {phone: +phone} ),
          ...(email && {email} ), */
        },
        update: {

        }
      })   
   console.log( user )
/* 
    if( email ) {
      user = await client.user.findUnique({
        where: {
          email,
        }
      });
      if( user ) console.log( "found it. ")
      if( !user ) {
        console.log( "Did not find, will create")
        user = await client.user.create({
          data: {
            name: "Anonymous",
            email,
          }
        });
      }
      console.log( user )
    }
    if( phone ) {
      user = await client.user.findUnique({
        where: {
          phone: +phone,
        }
      });
      if( user ) console.log( "found it. ")
      if( !user ) {
        console.log( "Did not find, will create")
        user = await client.user.create({
          data: {
            name: "Anonymous",
            phone: +phone,
          }
        });
      }
      console.log( user )
    }
     */
    return res.status(200).end();   
}

export default withHandler("POST", handler);