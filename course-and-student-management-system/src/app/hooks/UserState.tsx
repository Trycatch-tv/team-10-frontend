'use client';

import { User } from '../model/User.model';
import React, { useState, ReactNode } from 'react';
import { UserContext } from './UserContex';

const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    cedula: '',
    email: '',
    phone: '',
    role: '',
    isAuthenticated: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AppStateProvider ;


// const { user, setUser } = useContext(UserContext);