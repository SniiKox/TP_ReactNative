import { View, Text } from 'react-native'
import styles from './style/TeamDetailsStyle'

function TeamDetails ({ team }) {
  return (
    <View>
      <Text style={styles.description}>{`${team[0]?.name}, entrainer par ${team[0]?.coach_name}`}</Text>

      <View style={styles.card}>
        <Text style={styles.description}>Stade officiel : {team[0]?.venue_name}</Text>
      </View>
    </View>

  )
}

export default TeamDetails
