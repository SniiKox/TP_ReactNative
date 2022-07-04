import { Button, Text, View } from 'react-native'
import { actionTypes, useFavorites } from '../contexts/FavoritesContext'

const FavoritesValue = () => {
  const { state: { favoritesTeams } } = useFavorites()

  return (
    <View>
      <Text>Mes équipes favorites :</Text>
      <Text>{favoritesTeams.map((team) => team + ' - ')}</Text>
    </View>
  )
}

const FavoritesActions = () => {
  const { dispatch } = useFavorites()

  const addTeam = (team) => {
    dispatch({
      type: actionTypes.ADD,
      name: team
    })
  }

  const deleteTeam = (team) => {
    dispatch({
      type: actionTypes.DELETE,
      name: team
    })
  }

  return (
    <View>
      <Button title='+' onPress={() => addTeam('EquipeTest')} />
      <Button title='-' onPress={() => deleteTeam('EquipeTest')} />
    </View>
  )
}

const Favorites = () => {
  return (
    <View>
      <FavoritesValue />
    </View>
  )
}

export default Favorites
