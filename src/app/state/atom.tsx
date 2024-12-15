"use client";
import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false, // Set your default loading state here
});

export const currentAllowance = atom({
  key: "currentAllowance",
  default: 0, // Set your default amount state here
});
