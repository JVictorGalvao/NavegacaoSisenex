import React, { useContext } from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Separator } from '../components/Separator';
import { Button } from 'react-native';
import { NavProps } from '../ParamLists';
import { AuthContext } from '../AuthProvider';

export function RegistroApresentacao ({navigation, route}: NavProps<'RegistroApresentacao'>) {
  const {apresentacao, inApresentacao} = useContext(AuthContext)
  return (
    <ScreenContainer>
      <ScreenTitle 
        title='Identifique-se'
        subtitle= 'Escaneie o código para visualizar os projetos que foram alocados a essa apresentação'
      />
      <Separator vertical size={256}/>
      <Button 
        title='Escaneei o código'
        onPress={()=>{apresentacao();}}
      />
      {console.log(inApresentacao)}
      <Separator vertical size={32}/>
      <Button 
        title='Digitar o código' 
        onPress={()=>{navigation.navigate('RegistroApresentacaoInput')}}
      />
    </ScreenContainer>
  );
}