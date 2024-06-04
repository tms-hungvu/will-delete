import ButtonGradient from "@/components/Button/ButtonGradient";
import { Button } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";

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
