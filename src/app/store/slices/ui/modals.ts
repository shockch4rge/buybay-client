import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseModalState {
    open: boolean;
}

type ModalTypes = "login" | "register" | "resetPassword";

const initialState: Record<ModalTypes, BaseModalState> = {
    login: {
        open: false,
    },
    register: {
        open: false,
    },
    resetPassword: {
        open: false,
    },
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalTypes>) => {
            state[action.payload].open = true;
        },

        closeModal: (state, action: PayloadAction<ModalTypes>) => {
            state[action.payload].open = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;