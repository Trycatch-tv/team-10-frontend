import { User } from "../model/User.model";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface UserContext {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<UserContext>({
    user: {
        isAuthenticated: true,
        id: 0,
        name: '',
        cedula: '',
        email: '',
        phone: '',
        role: '',
    },
    setUser: () => {}
});

export const useProductContext = () => useContext(UserContext);