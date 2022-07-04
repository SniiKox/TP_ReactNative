import { View, Text, TouchableOpacity, Platform, Linking } from 'react-native'
import styles from './style/TeamDetailsStyle'

function TeamDetails ({ team }) {
  const openMap = async () => {
    const destination = encodeURIComponent(`${team[0]?.venue_address} ${team[0]?.venue_city} England`)
    const provider = Platform.OS === 'ios' ? 'apple' : 'google'
    const link = `https://maps.${provider}.com/?q=${destination}`

    try {
      Linking.openURL(link)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Text style={styles.description}>{`${team[0]?.name}, entrainer par ${team[0]?.coach_name}`}</Text>

      <View style={styles.card}>
        <TouchableOpacity onPress={openMap}>
          <Text style={styles.description}>Stade officiel : {team[0]?.venue_name}</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default TeamDetails
