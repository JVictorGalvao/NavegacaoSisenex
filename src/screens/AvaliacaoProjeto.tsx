import React from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { NavProps } from '../ParamLists';
import { Separator } from '../components/Separator';
import { BackButton } from '../components/BackButton';
import { CardButton } from '../components/Card';
import { Button } from 'react-native';

export function AvaliacaoProjeto({navigation, route}:NavProps<'AvaliacaoProjetos'>) {
    return (
      <ScreenContainer>
        <Separator vertical size={16}/>
        <BackButton onPress={()=> navigation.goBack()}/>
        <ScreenTitle
          title='Avalie'
          subtitle='Nome do projeto'
          centerSubtitle
        />
        <CardButton
          title='Apresentou domínio do conteúdo considerando as questões formuladas
          pelos avaliardores e os pares'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Demonstrou objetividade, sequência e clareza na apresentação'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Explicitou a contribuição da experiência de extensão na sua
          formação acadêmico-profissional e cidadã'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Os resumos apresentados possuel relação com a temática do projeto'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Evidenciou articulação do PRojeto com o ensino e a pesquisa da UFPB'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <CardButton
          title='Explanou a coerência e adequação entre os objetivos proposos pelo 
          Projeto e resultados obtidos/esperados'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
         <CardButton
          title='Demonstrou sua visão quanto ao impacto social do projeto'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
         <CardButton
          title='Expôs o empoderamento da comunidade público-alvo acerca dos
          objetivos propostos no projeto'
          buttontitle='Inserir nota'
          onPress={()=>{}}
          textsubtitle='Quanto a apresentacao do Resumo/participação no Projeto'
          subtitle
        />
        <Separator vertical size={16}/>
        <Button
          title='Finalizar Avaliação'
          onPress={()=>{navigation.goBack()}}
        />
        <Separator vertical size={16}/>
      </ScreenContainer>
    );
}