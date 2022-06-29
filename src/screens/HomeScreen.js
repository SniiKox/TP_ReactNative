import { ScrollView, useColorScheme, View } from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import Clock from '../components/Clock'
import Counter from '../components/Counter'
import Favorites from '../components/Favorites'

function HomeScreen () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style={backgroundStyle}
    >
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white
        }}
      >
        <Clock />
        <Counter />
        {/* <Favorites /> */}
      </View>
    </ScrollView>
  )
}

export default HomeScreen
