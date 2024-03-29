/* import { NextApiRequest, NextApiResponse } from "next"; */
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";
// type method = "GET" | "POST" | "DELETE";
interface IConfigType {
  // methods: method[];
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean | true;
}

export default function withHandler({
  methods,
  handler,
  isPrivate,
}: IConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Plz log in" });
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
