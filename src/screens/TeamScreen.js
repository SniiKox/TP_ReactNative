import { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import SquadList from '../components/Team/SquadList'
import HeaderTeam from '../components/Team/HeaderTeam'
import TeamDetails from '../components/Team/TeamDetails'
import { getTeamById } from '../services/Api'

function TeamScreen ({ route, navigation }) {
  const [team, setTeam] = useState()
  const { id } = route.params

  useEffect(() => {
    const getData = async () => {
      console.log(id)
      const data = await getTeamById(id)
      setTeam(data)
      navigation.setOptions({ title: data.title })
    }
    getData()
  })

  if (!team) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <HeaderTeam team={team} />
      <TeamDetails team={team} />
      <SquadList squad={team.squad} />
    </ScrollView>
  )
}

export default TeamScreen
