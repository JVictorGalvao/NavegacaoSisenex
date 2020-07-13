import React, { useContext } from 'react'
import { NavProps } from '../ParamLists';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Card } from '../components/Card';
import { Separator } from '../components/Separator';
import { Button } from 'react-native';
import { AuthContext } from '../AuthProvider';

export function Identidade({route}:NavProps<'Identidade'>) {
  const {logout} = useContext(AuthContext)  
  return (
      <ScreenContainer>
        <ScreenTitle
          title='Identifique-se'
          subtitle='Mostre as suas credenciais a um monitor para começar a avaliação.'
        />
        <Card title= 'Dados do avaliador'/>
        <Card title= 'QrCode'/>
        <Separator vertical size={32}/>
        <Button
          title='Sair'
          onPress={()=>{logout();}}
        />
      </ScreenContainer>
    );
}