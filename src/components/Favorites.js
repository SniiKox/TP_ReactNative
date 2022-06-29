import { Button, Text, View } from 'react-native'
import { actionTypes, FavoritesProvider, useFavorites } from '../contexts/FavoritesContext'

const FavoritesValue = () => {
  const { state: { favorites } } = useFavorites()
  return (
    <View>
      <Text> Equipe favorites : {favorites}</Text>
    </View>
  )
}

const FavoritesActions = () => {
  const { dispatch } = useFavorites()

  const handlePlus = (team) => {
    dispatch({
      type: actionTypes.ADD,
      name: team
    })
  }

  const handleMinus = (team) => {
    dispatch({
      type: actionTypes.DELETE,
      name: team
    })
  }

  return (
    <View>
      <Button title='-' onPress={handleMinus('A')} />
      <Button title='+' onPress={handlePlus('B')} />
    </View>
  )
}

const Favorites = () => {
  return (
    <FavoritesProvider>
      <View>
        <FavoritesValue />
        <FavoritesActions />
      </View>
    </FavoritesProvider>
  )
}

export default Favorites
