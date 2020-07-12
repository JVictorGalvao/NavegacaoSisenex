import React, { useContext } from 'react'
import { Button, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Separator } from '../components/Separator';
import { NavProps } from '../ParamLists';
import { AuthContext } from '../AuthProvider';


export function Login ({route}:NavProps<'Login'>){
  const {loginMonitor, loginAvaliador} = useContext(AuthContext);
  return (
    <ScreenContainer>
      <ScreenTitle
        title='Login'
      />
      <Text>route: {route.name}</Text>
      <Separator vertical size={256}/>
      <Button 
        title='Monitor'
        onPress={() => {loginMonitor();}}
      />
      <Separator vertical size={32}/>
      <Button 
        title= 'Avaliador'
        onPress={() => {loginAvaliador();}}
      />
    </ScreenContainer>
  );
}