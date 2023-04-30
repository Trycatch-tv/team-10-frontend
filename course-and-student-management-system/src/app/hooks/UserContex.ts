import { User } from '../model/User.model';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface UserContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  cleanUserData: () => void;
}

export const UserContext = createContext<UserContext>({
  user: {
    isAuthenticated: false,
    id: 0,
    username: '',
    cedula: '',
    email: '',
    phone: '',
    role: '',
  },
  setUser: () => {},
  cleanUserData: () => {},
});

export const useProductContext = () => useContext(UserContext);
