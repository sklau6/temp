import { create } from 'zustand';
import { produce } from 'immer';

interface AppState {
    isValidAllowance: boolean,
    setIsValidAllowance: (value: boolean) => void
}

export const useAppState = create<AppState>((set) => ({
    isValidAllowance: false,
    setIsValidAllowance: (value: boolean) => set({ isValidAllowance: value }),
}));