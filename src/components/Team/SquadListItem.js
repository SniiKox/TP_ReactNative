import { Text, View } from 'react-native'
import styles from './style/SquadStyle'

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
  return (
    <View style={{
      height: 'auto',
      flexDirection: 'row'
    }}
    >
      <ItemSeparator />
      <View style={styles.playerCard}>
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
