import { View, Text } from 'react-native'
import styles from './style/RestaurantDetailsStyle'

function TeamDetails ({ team }) {
  return (
    <View>
      <Text style={styles.description}>{`${team.name}, entrainer par ${team.venue_name}`}</Text>

      <View style={styles.card}>
        <Text style={styles.description}>{team.description}</Text>
      </View>
    </View>

  )
}

export default TeamDetails
