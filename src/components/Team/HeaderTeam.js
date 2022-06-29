import { ImageBackground, Text, View } from 'react-native'
import styles from './style/HeaderRestaurantStyle'

const BPL_URL = 'https://www.sportzcraazy.com/wp-content/uploads/2022/05/Premier-League-PNG-Image-temp.png'

function HeaderTeam ({ team }) {
  return (
    <View>
      <ImageBackground
        source={{ uri: BPL_URL }}
        style={styles.headerImage}
        resizeMode='cover'
      >
        <View style={styles.backdrop}>
          <Text style={styles.title}>{team.team_name}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HeaderTeam
