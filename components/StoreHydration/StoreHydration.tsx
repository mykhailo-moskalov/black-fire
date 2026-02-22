"use client";

import { useEffect } from "react";
import { useSidebarStore } from "@/lib/store/sidebarStore";

export default function StoreHydration() {
  useEffect(() => {
    useSidebarStore.persist.rehydrate();
  }, []);

  return null;
}
