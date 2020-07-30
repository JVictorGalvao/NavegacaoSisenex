import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './screens/Login';
import { ParamList } from './ParamLists';
import { ScreenContainer } from './components/ScreenContainer';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import Center from './components/Center';
import { AuthContext } from './AuthProvider';
import { MonitorRoute } from './navigation/MonitorRoute';
import { AvaliadorRoute } from './navigation/AvaliadorRoute';
import { TermoDeUsoScreen } from './screens/TermoDeUso';

interface RoutesProps {

}

const Stack = createStackNavigator<ParamList>();


export const Routes: React.FC<RoutesProps> = ({}) => {
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const {isMonitor} = useContext(AuthContext);
  const {assinouTermo} = useContext(AuthContext);
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString){
          //loginAvaliador();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
   

  if (loading){
    return(
      <ScreenContainer>
        <Center>
          <ActivityIndicator size='large'/>
        </Center>
      </ScreenContainer>
    )
  }

    return (
      <NavigationContainer>
        {user ? (isMonitor ? (assinouTermo ? <MonitorRoute/> : <TermoDeUsoScreen/> ) : (assinouTermo ? <AvaliadorRoute/> : <TermoDeUsoScreen/>)) : (
        <Stack.Navigator screenOptions={{
          header: ()=> null
        }}>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>)}
      </NavigationContainer>
    );
}