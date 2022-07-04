import { FlatList } from 'react-native'
import TeamsListItem from './TeamsListItem'

function TeamsList ({ teams }) {
  const renderItem = ({ item }) => (
    <TeamsListItem team={item} />
  )

  return (
    <FlatList
      data={teams}
      renderItem={renderItem}
      keyExtractor={item => item.team_id}
    />
  )
}

export default TeamsList
