import React, { useContext } from 'react'
import { Button } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Separator } from '../components/Separator';
import { AuthContext } from '../AuthProvider';


export function Login (){
  const {loginMonitor, loginAvaliador} = useContext(AuthContext);
  return (
    <ScreenContainer>
      <ScreenTitle
        title='Login'
      />
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