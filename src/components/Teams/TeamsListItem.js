import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './style/TeamsListItemStyle'
import { actionTypes, useFavorites } from '../../contexts/FavoritesContext'

const BPL_URL = 'https://www.sportzcraazy.com/wp-content/uploads/2022/05/Premier-League-PNG-Image-temp.png'

function TeamsListItem ({ team }) {
  const navigation = useNavigation()

  const { dispatch } = useFavorites()

  const addTeam = (teamToAdd) => {
    dispatch({
      type: actionTypes.ADD,
      name: teamToAdd
    })
  }

  const deleteTeam = (teamToDelete) => {
    dispatch({
      type: actionTypes.DELETE,
      name: teamToDelete
    })
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TeamDetails', { id: team.team_id })}
      >
        <Image
          style={styles.image}
          source={{ uri: BPL_URL }}
          resizeMode='cover'
        />
        <View style={styles.cardFooter}>
          <Text style={styles.cardTitle}>
            {team.team_name}
          </Text>
          <Text style={styles.description}>
            {team.description}
          </Text>

          <Text style={styles.description}>
            Favoris :
          </Text>
          <Button title='+' onPress={() => addTeam(team.team_name)} />
          <Button title='-' onPress={() => deleteTeam(team.team_name)} />

        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TeamsListItem
