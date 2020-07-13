import React from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { CardButton } from '../components/Card';
import { NavProps } from '../ParamLists';

export function Projetos ({navigation, route}:NavProps<'Projetos'>) {
    return (
      <ScreenContainer>
        <ScreenTitle
          title='Projetos'
          subtitle='Os projetos são disponibilizados na ordem de apresentação. Avalie-os:'
        />
        <CardButton
          title='Titulo do projeto 1'
          buttontitle='Reavaliar'
          onPress={()=>{navigation.navigate('AvaliacaoProjetos')}}
        />
        <CardButton
          title='Titulo do projeto 2'
          buttontitle='Avaliar'
          onPress={()=>{navigation.navigate('AvaliacaoProjetos')}}
        />
      </ScreenContainer>
    );
}