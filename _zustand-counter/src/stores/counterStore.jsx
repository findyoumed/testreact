import { create } from "zustand"

const counterStore = create((set) => ({  // 콜백함수를 `()`(괄호)로 한 번 감싸는 게 포인트
	count: 1,
    increase: () => set((state) => ({ count: state.count+1 })),
    increaseBy: (value) => set((state) => ({ count: state.count + value, })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    decreaseBy : (value) => set((state) => ({ count: state.count - value })),
    reset: () => set({ count: 1 })
}));

export default counterStore;
