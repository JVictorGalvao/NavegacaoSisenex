import React from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Card, CardButton } from '../components/Card';
import { NavProps } from '../ParamLists';

export function ProjetosApresentacao({navigation, route}:NavProps<'ProjetosApresentacao'>) {
    return (
      <ScreenContainer>
        <ScreenTitle
          title='Projetos'
          subtitle='Habilite os projetos de acordo com a ordem de apresentação'  
        />
        <CardButton
           title='Projeto 1'
           buttontitle='Gerenciar'
           onPress={()=>{navigation.navigate('GerenciarProjeto')}}/>
        <CardButton
           title='Projeto 2'
           buttontitle='Gerenciar'
           onPress={()=>{navigation.navigate('GerenciarProjeto')}}/>
          <CardButton
            title='Projeto 3'
            buttontitle='Gerenciar'
            onPress={()=>{navigation.navigate('GerenciarProjeto')}}/>
      </ScreenContainer>
    );
}