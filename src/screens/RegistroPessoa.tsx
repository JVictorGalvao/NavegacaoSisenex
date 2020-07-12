import React from 'react'
import { ScreenTitle } from '../components/ScreenTitle';
import { ScreenContainer } from '../components/ScreenContainer';
import { Separator } from '../components/Separator';
import { Button } from 'react-native';
import { NavProps } from '../ParamLists';


export function RegistroPessoa ({navigation, route}: NavProps<'RegistroPessoa'>) {
    return (
      <ScreenContainer>
        <ScreenTitle
          title='Pessoa'
          subtitle='Escaneie ou digitalize as credenciais dos avaliadores para adicioná-los a apresentação'
        />
        <Separator vertical size={256}/>
        <Button 
          title='Escaneei o código'
          onPress={()=>{navigation.navigate('MonitorTabs')}}
        />
        <Separator vertical size={32}/>
        <Button 
          title='Digitar o código' 
          onPress={()=>{navigation.navigate('RegistroPessoaInput')}}
        />
      </ScreenContainer>
    );
}