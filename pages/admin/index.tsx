import ButtonGradient from "@/components/Button/ButtonGradient";
import { Button } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6enZqcXJraXRhZ212eWZyamt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NjIwODQsImV4cCI6MjAzMzEzODA4NH0.RWoDUr28GlCCnR0okXflIVSDsXgLPx7Hj1nRAc-L7AY";


const supabase = createClient("https://lzzvjqrkitagmvyfrjkx.supabase.co", anonKey);
const Admin = () => {
  const { data: session } = useSession();
  




  
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>

    </>
  );
};

export default Admin;
