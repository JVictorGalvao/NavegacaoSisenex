import React from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { NavProps } from '../ParamLists';
import { Separator } from '../components/Separator';
import { BackButton } from '../components/BackButton';
import { CardButton } from '../components/Card';

export function VisualizarAvaliacaoProjeto({navigation, route}:NavProps<'VisualizarAvaliacaoProjeto'>) {
    return (
      <ScreenContainer>
        <Separator vertical size={16}/>
        <BackButton onPress={()=> navigation.goBack()}/>
        <ScreenTitle
          title='Sua avaliação'
          subtitle='Nome do projeto'
          centerSubtitle
        />
        <CardButton
          title='Apresentou domínio do conteúdo considerando as questões formuladas
          pelos avaliardores e os pares'
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
          nota
          valornota={'Nota: 10'}
        />
        <CardButton
          title='Demonstrou objetividade, sequência e clareza na apresentação'
          nota
          valornota={'Nota: 9'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Explicitou a contribuição da experiência de extensão na sua
          formação acadêmico-profissional e cidadã'
          nota
          valornota={'Nota: 8'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Os resumos apresentados possuel relação com a temática do projeto'
          nota
          valornota={'Nota: 7'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Evidenciou articulação do PRojeto com o ensino e a pesquisa da UFPB'
          nota
          valornota={'Nota: 6'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Explanou a coerência e adequação entre os objetivos proposos pelo 
          Projeto e resultados obtidos/esperados'
          nota
          valornota={'Nota: 5'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
         <CardButton
          title='Demonstrou sua visão quanto ao impacto social do projeto'
          nota
          valornota={'Nota: 4'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
         <CardButton
          title='Expôs o empoderamento da comunidade público-alvo acerca dos
          objetivos propostos no projeto'
          nota
          valornota={'Nota: 3'}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <Separator vertical size={16}/>
      </ScreenContainer>
    );
}