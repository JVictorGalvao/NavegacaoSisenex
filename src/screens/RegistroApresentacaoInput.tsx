import React from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Separator } from '../components/Separator';
import { NavProps, ParamList } from '../ParamLists';

export function RegistroApresentacaoInput({navigation, route}:NavProps<'RegistroApresentacaoInput'>) {
  return (
    <ScreenContainer>
    <ScreenTitle
      title="Apresentação"
      subtitle="Digite o código para visualizar os projetos que foram alocados a essa apresentação"
    />
    <Separator vertical size={160}/>
    <TextInput
      style={{
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 8,
        textAlign: "center",
        paddingVertical: 12,
        fontSize: 32,
        color: "#56625A"
      }}
    />
    <Separator vertical size={64}/>
      <Button 
        title='Confirmar'
        onPress={() => {navigation.navigate('MonitorTabs')}}
      />
    <Separator vertical size={32}/>
      <Button 
        color = 'gray'
        title='Cancelar'
        onPress={() => {navigation.goBack()}}
      />
  </ScreenContainer>
  );
}