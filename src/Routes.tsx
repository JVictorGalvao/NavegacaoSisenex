import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './screens/Login';
import { ParamList } from './ParamLists';
import { ScreenContainer } from './components/ScreenContainer';
import { ActivityIndicator, View, AsyncStorage, Text, Button } from 'react-native';
import Center from './components/Center';
import { AuthContext } from './AuthProvider';
import { MonitorRoute } from './navigation/MonitorRoute';
import { AvaliadorRoute } from './navigation/AvaliadorRoute';

interface RoutesProps {

}

const Stack = createStackNavigator<ParamList>();


export const Routes: React.FC<RoutesProps> = ({}) => {
  const {user, loginMonitor} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const {isMonitor} = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString){
          loginMonitor();
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
        {user ? (isMonitor ? <MonitorRoute/>: <AvaliadorRoute/>) : (
        <Stack.Navigator screenOptions={{
          header: ()=> null
        }}>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>)}
      </NavigationContainer>
    );
}