import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/utils/supabaseClient";

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken) {
      supabase.auth
        .setSession({
          access_token: accessToken,
          refresh_token: refreshToken ?? "",
        })
        .then(() => {
          router.replace("/admin");
        })
        .catch((error) => {
          console.error("Error setting session:", error);
          router.replace("/login?error=failed-to-set-session");
        });
    } else {
      router.replace("/login?error=no-access-token");
    }
  }, [router]);

  return <div>Loading...</div>;
};

export default Callback;
