import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MonitorParamList } from '../ParamLists';
import { AuthContext } from '../AuthProvider';
import { RegistroApresentacao } from '../screens/RegistroApresentacao';
import { RegistroApresentacaoInput } from '../screens/RegistroApresentacaoInput';
import { PessoasApresentacao } from '../screens/PessoasApresentacao';
import {AntDesign, Entypo , MaterialCommunityIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistroPessoa } from '../screens/RegistroPessoa';
import { RegistroPessoaInput } from '../screens/RegistroPessoaInput';
import { ProjetosApresentacao } from '../screens/ProjetosApresentacao';
import { GerenciarProjeto } from '../screens/GerenciarProjeto';
import { Apresentacao } from '../screens/Apresentacao';
import { ReportarProblema } from '../screens/ReportarProblema';
import { TermoDeUso } from '../screens/TermoDeUso';

interface MonitorTabsProps {

}

const Tabs = createBottomTabNavigator<MonitorParamList>();
const Stack = createStackNavigator<MonitorParamList>();

function PessoaStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='RegistroPessoa' component={RegistroPessoa}/>
      <Stack.Screen name='RegistroPessoaInput' component={RegistroPessoaInput}/>
    </Stack.Navigator>
  );
}

function ProjetosStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='ProjetosApresentacao' component={ProjetosApresentacao}/>
    </Stack.Navigator>
  );
}

function RegistroApresentacaoStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='RegistroApresentacao' component={RegistroApresentacao}/>
      <Stack.Screen name='RegistroApresentacaoInput' component={RegistroApresentacaoInput}/>
    </Stack.Navigator>
  );
}

const MonitorTabs: React.FC<MonitorTabsProps> = ({}) => {
  return(
    <Tabs.Navigator 
      initialRouteName='PessoasApresentacao'       
      tabBarOptions={{
        activeTintColor: '#add8e6',
        iconStyle: null,
      }}> 
      <Tabs.Screen 
        name='PessoasApresentacao' 
        component={PessoasApresentacao}
        options={{
          tabBarLabel: 'PESSOAS',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name='ProjetosApresentacao' 
        component={ProjetosStack}
        options={{
          tabBarLabel: 'PROJETOS',
          tabBarIcon: ({color, size}) => (
            <Entypo name="open-book" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name='Apresentacao' 
        component={Apresentacao}
        options={{
          tabBarLabel: 'APRESENTAÇÃO',
          //tabBarIcon: () => null,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="projector-screen" size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

function MonitorStack() {
  const{inApresentacao} = useContext(AuthContext)
  return(
    <Stack.Navigator>
      {inApresentacao ? (<Stack.Screen name='MonitorTabStack' component={MonitorTabs}/>) : ( 
      <Stack.Screen name='RegistroApresentacaoStack' component={RegistroApresentacaoStack}/> )}
    </Stack.Navigator>
  );
}

export const MonitorRoute: React.FC<MonitorTabsProps> = ({}) => {
  const {assinouTermo} = useContext(AuthContext)  
  return (
      <Stack.Navigator
        initialRouteName= {assinouTermo ? 'MonitorTabs' : 'TermoDeUso'}
        screenOptions={{
          header: ()=> null
      }}>
        <Stack.Screen name='MonitorTabs' component={MonitorStack}/>
        <Stack.Screen name='RegistroPessoa' component={PessoaStack}/>
        <Stack.Screen name='GerenciarProjeto' component={GerenciarProjeto}/>
        <Stack.Screen name='ReportarProblema' component={ReportarProblema}/>
        <Stack.Screen name='RegistroApresentacaoInput' component={RegistroApresentacaoInput}/>
        <Stack.Screen name= 'TermoDeUso' component={TermoDeUso}/>
      </Stack.Navigator>
    );
}
