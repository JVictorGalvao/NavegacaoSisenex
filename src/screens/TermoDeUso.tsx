import React, { useContext } from 'react'
import { Button } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { ScreenTitle } from '../components/ScreenTitle';
import { Separator } from '../components/Separator';
import { AuthContext } from '../AuthProvider';
import Center from '../components/Center';
import { BackButton } from '../components/BackButton';
import { NavProps } from '../ParamLists';
import { createStackNavigator } from '@react-navigation/stack';

interface TermoDeUsoScreen{

}

export function TermoDeUso ({navigation, route}: NavProps<'TermoDeUso'>){
  const {assinouTermo, assinou, logout} = useContext(AuthContext);
  return (
    <ScreenContainer>
      <BackButton onPress={()=> logout()}/>
      <ScreenTitle
        title='Termos de Uso'
      />
      <Center>
        <Button 
          title='Assinar termo'
          onPress={() => {assinou();}}
        />
        {console.log(assinouTermo)}
      </Center>
    </ScreenContainer>
  );
}

export const TermoDeUsoScreen: React.FC<TermoDeUsoScreen> = ({}) => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      header: () => null
    }}>
      <Stack.Screen name='Termo' component={TermoDeUso}/>
    </Stack.Navigator>
  )}