import React from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Card } from '../components/Card';
import { NavProps } from '../ParamLists';
import { Separator } from '../components/Separator';
import { Button } from 'react-native';


export function PessoasApresentacao({navigation, route}: NavProps<'PessoasApresentacao'>) {
    return (
      <ScreenContainer>
        <ScreenTitle 
          title='Pessoas'
          subtitle='Escaneie ou digitalize as credenciais dos avaliadores para adicioná-los a apresentação'
        />
        <Card title ='Avaliador 1'/>
        <Card title ='Avaliador 2'/>
        <Card title ='Avaliador 3'/>
        <Separator vertical size={32}/>
        <Button
          title='Adicionar avaliador'
          onPress={()=> {navigation.navigate('RegistroPessoa')}}
        />
      </ScreenContainer>
    );
}