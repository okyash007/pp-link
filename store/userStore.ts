import { create } from "zustand";

interface UserState {
  name: string;
  displayName: string;
  email: string;
  phone: string;
  amount: number;
  editable: boolean;
  currency: string;
  errors: string[]
  setuser: (user: Partial<Omit<UserState, 'setuser'>>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  // Initial state
  name: "",
  displayName: "",
  email: "",
  phone: "",
  amount: 200,
  currency: "INR",
  editable: true,
  errors: [],


  // Actions
  setuser: (user) => set({ ...user }),
}));
