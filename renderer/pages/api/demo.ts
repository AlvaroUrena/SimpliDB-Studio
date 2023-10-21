import type { NextApiResponse } from "next";

export default async function handler(
  req,
  res: NextApiResponse
) {
  res.status(200).json({ text: 'Hello' });
}