import React, { useContext } from 'react'
import { AvaliadorParamList } from '../ParamLists';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Button } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import Center from '../components/Center';
import { AuthContext } from '../AuthProvider';
import { createStackNavigator } from '@react-navigation/stack';
import { Identidade } from '../screens/Identidade';
import {AntDesign, Entypo , FontAwesome} from '@expo/vector-icons';
import { Projetos } from '../screens/Projetos';
import { AvaliacaoProjeto } from '../screens/AvaliacaoProjeto';
import { Avaliacoes } from '../screens/Avaliacoes';
import { VisualizarAvaliacaoProjeto } from '../screens/VisualizarAvaliacaoProjeto';
import { TermoDeUso } from '../screens/TermoDeUso';


interface AvaliadorTabsProps {

}

const Tabs = createBottomTabNavigator<AvaliadorParamList>();
const Stack= createStackNavigator<AvaliadorParamList>();

function IdentidadeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name= 'Identidade' component={Identidade}/>
    </Stack.Navigator>
  );
}

function ProjetoStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Projetos' component={Projetos}/>
    </Stack.Navigator>
  );
}

function AvaliacoesStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Avaliacoes' component={Avaliacoes}/>
    </Stack.Navigator>
  );
}

function AvaliadorTabs() {
  return(
    <Tabs.Navigator> 
        <Tabs.Screen 
          name='Identidade' 
          component={IdentidadeStack}
          options={{
            tabBarLabel: 'IDENTIDADE',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="user" size={size} color={color} />
            )
          }}/>
        <Tabs.Screen 
          name='Projetos' 
          component={ProjetoStack}
          options={{
            tabBarLabel: 'PROJETOS',
            tabBarIcon: ({color, size}) => (
              <Entypo name="open-book" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen 
          name='Avaliacoes' 
          component={AvaliacoesStack}
          options={{
            tabBarLabel: 'AVALIAÇÕES',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="check-square-o" size={size} color={color} />
            )
        }}/>
      </Tabs.Navigator>
  );
}

export const AvaliadorRoute: React.FC<AvaliadorTabsProps> = ({}) => {
  const {assinouTermo} = useContext(AuthContext)    
  return (
      <Stack.Navigator
        initialRouteName={assinouTermo ? 'IdentidadeStack' : 'TermoDeUso'}
        screenOptions={{
          header: ()=> null
      }}>
        <Stack.Screen name='IdentidadeStack' component={AvaliadorTabs}/>
        <Stack.Screen name='AvaliacaoProjetos' component={AvaliacaoProjeto}/>
        <Stack.Screen name='VisualizarAvaliacaoProjeto' component={VisualizarAvaliacaoProjeto}/>
        <Stack.Screen name= 'TermoDeUso' component={TermoDeUso}/>
      </Stack.Navigator>
    );
}