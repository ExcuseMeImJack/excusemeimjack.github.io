import React from "react";
import { useRouter } from "next/navigation";

export default function getRoute() {
  const router = useRouter();
  return router;
}
