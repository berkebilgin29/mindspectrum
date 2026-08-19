"use client";

import { applyA11yToDom, getA11ySnapshot } from "@/lib/a11y";
import { useEffect } from "react";

export function A11yBoot() {
  useEffect(() => {
    applyA11yToDom(getA11ySnapshot());
  }, []);
  return null;
}
