import type { NextApiRequest, NextApiResponse } from 'next';
 
type ResponseData = { success: boolean, id: string}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let success: boolean = false;
  let id: string = "a";
  let body = JSON.parse(req.body);
  
  switch (req.method) {
    case "POST":
      if (body.id === "hehe" && body.password === "password") {
        success = true;
        id = "hehe";
      }
    } 
  
    res.status(200).json({ success: success, id: id })
}