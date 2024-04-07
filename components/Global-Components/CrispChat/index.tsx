"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(String(process.env.NEXT_PUBLIC_CRISP_ID));
  }, []);
  return null;
};

export default CrispChat;
