import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const redirectTo = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/callback`;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(200).json({ url: data.url });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sign in failed" });
  }
}
