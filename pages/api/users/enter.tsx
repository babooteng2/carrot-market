// connection handler를 기본으로 export 해주면 됨
import twilio from "twilio";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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
    console.log( token );
    if( phone ) {
      const message = await twilioClient.messages.create({
        messagingServiceSid: process.env.TWILIO_MSID,
        to: process.env.MY_PHONE!,
        body: `Your login token is ${payload}.`
      });
      console.log( message );
    }
    return res.json({
      ok: true,
    })
}

export default withHandler("POST", handler);