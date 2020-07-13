import React from 'react'
import { NavProps } from '../ParamLists';
import { Alert, TextInput, Button } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { BackButton } from '../components/BackButton';
import { Separator } from '../components/Separator';

export function ReportarProblema({navigation}:NavProps<'ReportarProblema'>) {
  const showAlert = () =>{
    Alert.alert(
      'Problema enviado!'
  )}
  return (
    <ScreenContainer>
      <Separator vertical size={16}/>
      <BackButton onPress={()=>navigation.goBack()}/>
      <ScreenTitle
        title='Reportar problemas'
      />
      <Separator vertical size={32}/>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        //onChangeText={text => onChangeText(text)}
        placeholder="Digite o problema aqui"
      />
      <Separator vertical size={32}/>
      <Button title='Enviar'
        onPress={()=>{showAlert()}}
      />
    </ScreenContainer>
  );
}