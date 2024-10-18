import { create } from "zustand"

type DropDown = {
    active: boolean
    setActive: (state: boolean) => void
}
export const useDropdownState = create<DropDown>((set) => ({
    active: false,
    setActive(state: boolean) {
        return set(() => ({ active: state }))
    },
}))
