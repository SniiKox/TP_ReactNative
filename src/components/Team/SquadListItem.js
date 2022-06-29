import { Text, useWindowDimensions, View } from 'react-native'
import styles from './style/DishesStyle'

// const STRAPI_URL = 'https://strapi.myidea.fr'

const ItemSeparator = () => {
  return (
    <View style={
      {
        height: '100%',
        width: 5
      }
  }
    />
  )
}

function SquadListItem ({ player }) {
  const SCREEN_WIDTH = useWindowDimensions().width

  return (
    <View style={{
      width: SCREEN_WIDTH,
      height: 'auto',
      flexDirection: 'row'
    }}
    >
      <ItemSeparator />
      <View style={styles.dishesCard}>
        {/* {player.photos[0] &&
          <Image
            style={styles.image}
            source={{ uri: `${STRAPI_URL}${plat.photos[0]?.url}` }}
            resizeMode='cover'
          />} */}
        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle}>
            {player.name}
          </Text>
          <Text style={styles.description}>
            {player.position}
          </Text>
          <Text style={styles.description}>
            Numéro : {player.number}
          </Text>
        </View>
      </View>
      <ItemSeparator />
    </View>
  )
}

export default SquadListItem
