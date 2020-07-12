import React, { useState } from 'react'
import { AsyncStorage } from 'react-native';

type User = null | {username: string}
type IsMonitor = null | boolean;

export const AuthContext = React.createContext<{
  user: User,
  isMonitor: IsMonitor,
  loginMonitor: () => void;
  loginAvaliador: () => void;
  logout: () => void;
}>({
  user: null,
  isMonitor: false,
  loginMonitor: () => {},
  loginAvaliador: () => {},
  logout: () => {}
});

interface AuthProviderProps {

}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const [isMonitor, setIsMonitor] = useState<IsMonitor>(null);  
  return (
      <AuthContext.Provider value={{
        user,
        isMonitor,
        loginMonitor:() => {
          const User = {username: 'monitor'};
          setUser(User);
          setIsMonitor(true);
          AsyncStorage.setItem('user', JSON.stringify(User))
        },
        loginAvaliador:() => {
          const User = {username: 'avaliador'};
          setUser(User);
          setIsMonitor(false);
          AsyncStorage.setItem('user', JSON.stringify(User))
        },
        logout:() => {
          setUser(null);
          AsyncStorage.removeItem('user');
        }
      }}>
        {children}
      </AuthContext.Provider>
    );
}