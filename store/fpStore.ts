import { create } from "zustand";

interface FpState {
  fp: string;
  setFp: (fp: string) => void;
}

export const useFpStore = create<FpState>((set) => ({
  // Initial state
  fp: "",

  // Actions
  setFp: (fp) => set({ fp }),
}));
