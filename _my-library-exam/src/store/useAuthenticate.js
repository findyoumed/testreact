import { create } from 'zustand';

const useAuthenticate = create((set) => ({
    authenticate: false,
    setAuthenticate: () => set((state) => ({authenticate: !state.authenticate}))
}));

export default useAuthenticate;