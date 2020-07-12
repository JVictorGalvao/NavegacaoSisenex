import React from 'react'
import { NavProps } from '../ParamLists';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Separator } from '../components/Separator';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';



export function RegistroPessoaInput({navigation, route}: NavProps<'RegistroPessoaInput'>) {
    return (
      <ScreenContainer>
        <ScreenTitle
          title='Pessoa'
          subtitle='Digite as credenciais de um avalliador para adiciona-lo a apresentação'
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