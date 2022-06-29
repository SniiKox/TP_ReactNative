import { useEffect, useState } from 'react'
import { View } from 'react-native'
import TeamsList from '../components/Teams/TeamsList'
import { getTeams } from '../services/Api'

function TeamsScreen () {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getTeams()
      setTeams(data)
    }
    getData()
  }, [])

  return (
    <View>
      <TeamsList teams={teams} />
    </View>
  )
}

export default TeamsScreen
