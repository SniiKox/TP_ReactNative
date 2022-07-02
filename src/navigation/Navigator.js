import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign'

import HomeScreen from '../screens/HomeScreen'
import TeamsScreen from '../screens/TeamsScreen'
import colors from '../style/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamScreen from '../screens/TeamScreen'

const TabNavigator = createBottomTabNavigator()

const StackNavigator = createNativeStackNavigator()

const TeamNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='TeamsList' component={TeamsScreen} />
      <StackNavigator.Screen name='TeamDetails' component={TeamScreen} />
    </StackNavigator.Navigator>
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
              iconName = 'home'
              break
            case ('Teams'):
              iconName = 'team'
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
        name='Teams'
        component={TeamNavigator}
        options={{
          headerShown: false
        }}
      />
    </TabNavigator.Navigator>
  )
}

export default MainNavigator
