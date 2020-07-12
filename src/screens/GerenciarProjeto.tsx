import React, { useState } from 'react'
import { NavProps } from '../ParamLists';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Card } from '../components/Card';
import { Separator } from '../components/Separator';
import { Button, Text } from 'react-native';
import { BackButton } from '../components/BackButton';



export function GerenciarProjeto({navigation, route}:NavProps<'GerenciarProjeto'>) {
  const [apresentacao, setApresentacao] = useState<null | string>(null);
  const habilitar = () =>{
    setApresentacao('Apresentacao em curso')
  };
  const desabilitar = () =>{
    setApresentacao(null)
  };
  return (
    <ScreenContainer>
      <Separator vertical size={16}/>
      <BackButton onPress={()=>navigation.goBack()}/>
      <Card title='Projeto 1'/>
      <Separator vertical size={32}/>
      <Button 
        title='Iniciar avaliação'
        onPress={()=>{habilitar()}}
      />
      <Separator vertical size={32}/>
      <Button 
        title='Finalizar avaliação'
        onPress={()=>{desabilitar()}}
      />
      <Text style={{alignSelf:'center'}}>{apresentacao}</Text>
    </ScreenContainer>
  );
}