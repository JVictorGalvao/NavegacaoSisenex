import React, { useContext } from 'react'
import { AvaliadorParamList } from '../ParamLists';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Button } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import Center from '../components/Center';
import { AuthContext } from '../AuthProvider';

interface AvaliadorTabsProps {

}

const Tabs = createBottomTabNavigator<AvaliadorParamList>();

function Tela1 (){
  return(
    <ScreenContainer>
      <Center>
        <Text>Avaliador 1</Text>
      </Center>
    </ScreenContainer>
  );
}

function Tela2 (){
  // const {user} = useContext(AuthContext)
  // AsyncStorage.getItem('user')
  // console.log(user)
  return(
    <ScreenContainer>
      <Center>
        <Text>Avaliador 2</Text>
      </Center>
    </ScreenContainer>
  );
}

function Tela3 (){
  const {logout} = useContext(AuthContext)
  return(
    <ScreenContainer>
      <Center>
        <Text>Avaliador 3</Text>
        <Button title='Sair' onPress={()=> logout()}/>
      </Center>
    </ScreenContainer>
  );
}
export const AvaliadorRoute: React.FC<AvaliadorTabsProps> = ({}) => {
    return (
      <Tabs.Navigator initialRouteName='Tela1'> 
        <Tabs.Screen name='Tela1' component={Tela1}/>
        <Tabs.Screen name='Tela2' component={Tela2}/>
        <Tabs.Screen name='Tela3' component={Tela3}/>
      </Tabs.Navigator>
    );
}