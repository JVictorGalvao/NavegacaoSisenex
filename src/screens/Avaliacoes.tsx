import React from 'react'
import { NavProps } from '../ParamLists';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { CardButton } from '../components/Card';

export function Avaliacoes({navigation, route}:NavProps<'Avaliacoes'>) {
    return (
      <ScreenContainer>
        <ScreenTitle
          title='Avaliações'
          subtitle='Os projetos avaliados por você poderão ser consultados aqui.'
        />
        <CardButton
          title='Titulo do projeto 1'
          buttontitle='Visualizar'
          onPress={()=>{navigation.navigate('VisualizarAvaliacaoProjeto')}}
        />
        <CardButton
          title='Titulo do projeto 2'
          buttontitle='Visualizar'
          onPress={()=>{navigation.navigate('VisualizarAvaliacaoProjeto')}}
        />
      </ScreenContainer>
    );
}