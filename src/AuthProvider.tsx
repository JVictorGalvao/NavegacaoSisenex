import React, { useState } from 'react'
import { AsyncStorage } from 'react-native';

type User = null | {username: string}
type IsMonitor = null | boolean;
type InApresentacao = null | boolean;
type AssinouTermo = null | boolean;

export const AuthContext = React.createContext<{
  user: User,
  isMonitor: IsMonitor,
  inApresentacao: InApresentacao,
  assinouTermo: AssinouTermo,
  loginMonitor: () => void;
  loginAvaliador: () => void;
  logout: () => void;
  apresentacao:()=> void;
  sairapresentacao:()=> void;
  assinou: () => void;
}>({
  user: null,
  isMonitor: false,
  inApresentacao: false,
  assinouTermo: false,
  loginMonitor: () => {},
  loginAvaliador: () => {},
  logout: () => {},
  apresentacao:()=>{},
  sairapresentacao:()=>{},
  assinou: () => {},
});

interface AuthProviderProps {

}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const [isMonitor, setIsMonitor] = useState<IsMonitor>(null);
  const [inApresentacao, setInApresentacao] = useState<InApresentacao>(null);
  const [assinouTermo, setTermo] = useState<AssinouTermo>(null);
  return (
      <AuthContext.Provider value={{
        user,
        isMonitor,
        inApresentacao,
        assinouTermo,
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
          setIsMonitor(null);
          AsyncStorage.removeItem('user');
          setInApresentacao(null);
        },
        apresentacao:()=>{
          setInApresentacao(true);
        },
        sairapresentacao:()=>{
          setInApresentacao(false);
        },
        assinou:()=>{
          setTermo(true);
        }
      }}>
        {children}
      </AuthContext.Provider>
    );
}