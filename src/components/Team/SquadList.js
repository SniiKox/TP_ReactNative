import { FlatList, Text, View } from 'react-native'
import SquadListItem from './SquadListItem'
import styles from './style/SquadStyle'

const categoriesTrad = {
  G: 'Gardien',
  D: 'Défenseur',
  M: 'Millieu',
  A: 'Attaquant'
}

function SquadList ({ squad }) {
  const categories = [...new Set(squad.map(d => d.position))]

  const renderItem = ({ item }) => (
    <SquadListItem player={item} />
  )

  return (
    <View>
      <Text />
      <View style={styles.card}>
        <Text style={styles.title}>L'équipe</Text>
        {categories.map((c, i) => (
          <View key={i}>
            <Text style={styles.title}>{categoriesTrad[c]}</Text>
            <FlatList
              horizontal
              pagingEnabled
              legacyImplementation={false}
              data={squad.filter(d => d.position === c)}
              keyExtractor={player => player.id}
              renderItem={renderItem}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

export default SquadList
