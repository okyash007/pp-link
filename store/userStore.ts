import { create } from "zustand";

interface UserState {
  name: string;
  email: string;
  phone: string;
  amount: number;
  editable: boolean;
  currency: string;
  setuser: (user: Partial<Omit<UserState, 'setuser'>>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  // Initial state
  name: "",
  email: "",
  phone: "",
  amount: 200,
  currency: "INR",
  editable: true,

  // Actions
  setuser: (user) => set({ ...user }),
}));
