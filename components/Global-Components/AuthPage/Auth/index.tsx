"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export const LoginBtn = () => {
  return <Button onClick={() => signIn()}>Sign In</Button>;
};

export const LogoutBtn = () => {
  return (
    <Button
      onClick={() => signOut({ redirect: true, callbackUrl: "/auth/login" })}
    >
      Sign Out
    </Button>
  );
};
