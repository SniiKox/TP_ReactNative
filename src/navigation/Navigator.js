import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import TeamsScreen from '../screens/TeamsScreen'
import colors from '../style/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamScreen from '../screens/TeamScreen'
import LoginScreen from '../screens/LoginScreen'
import { useState } from 'react'

const TabNavigator = createBottomTabNavigator()

const StackNavigator = createNativeStackNavigator()

const AuthStackNavigator = createNativeStackNavigator()

const RestaurantNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='TeamsList' component={TeamsScreen} />
      <StackNavigator.Screen name='TeamDetails' component={TeamScreen} />
    </StackNavigator.Navigator>
  )
}

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStackNavigator.Screen name='Login' component={LoginScreen} />
    </AuthStackNavigator.Navigator>
  )
}

const MainNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          const iconSize = focused ? 30 : 25

          switch (route.name) {
            case ('Home'):
              iconName = focused ? 'home' : 'home-outline'
              break
            case ('Restaurants'):
              iconName = focused ? 'fast-food' : 'fast-food-outline'
              break
            default:
              break
          }

          return <Icon name={iconName} size={iconSize} color={colors.primary} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text
      })}
    >
      <TabNavigator.Screen name='Home' component={HomeScreen} />
      <TabNavigator.Screen
        name='Restaurants'
        component={RestaurantNavigator}
        options={{
          headerShown: false
        }}
      />
    </TabNavigator.Navigator>
  )
}

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />

  // =
  // if (isLoggedIn) {
  //   return <MainNavigator />
  // } else {
  //   return <AuthNavigator />
  // }
}

export default RootNavigator
