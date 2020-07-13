import React, { useContext } from 'react'
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Card, CardButton } from '../components/Card';
import { Button } from 'react-native';
import { NavProps } from '../ParamLists';
import { AuthContext } from '../AuthProvider';
import { Separator } from '../components/Separator';

export function Apresentacao({navigation, route}: NavProps<'Apresentacao'>) {
  const {logout, sairapresentacao} = useContext(AuthContext)
  return (
    <ScreenContainer>
      <ScreenTitle 
        title='Apresentação'
        subtitle='Visualize as informações e encerre a apresentação ao seu término'  
      />
      <Card title='Apresentação'/>
      <CardButton
        title='Qrcode'
        buttontitle='Encerrar apresentação'
        onPress={()=>{sairapresentacao()}}
      />
      <Separator vertical size={32}/>
      <Button 
        title='Comunicar um problema'
        onPress={()=>{navigation.navigate('ReportarProblema')}}  
      />
      <Separator vertical size={32}/>
      <Button 
        title='Sair da aplicação'
        onPress={()=>logout()}  
      />
    </ScreenContainer>
  );
}