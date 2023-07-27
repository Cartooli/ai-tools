"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f4066a95-cba9-4b96-8889-21b8f9f7497b");
  }, []);

  return null;
};
