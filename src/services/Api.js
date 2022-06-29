import axios from 'axios'

const api = axios.create({
  baseURL: 'https://data.football-api.com/v3',
  headers: {
    // 'Content-Type': 'application/json',
    // Authorization: 'tQLMUvWYih7JvkIhgA3T38HsXH5qi33B4niDAsgc',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getTeams = async () => {
  try {
    const response = await api.get('https://data.football-api.com/v3/standings/1204?Authorization=tQLMUvWYih7JvkIhgA3T38HsXH5qi33B4niDAsgc')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getTeamById = async (id) => {
  try {
    const response = await api.get('https://data.football-api.com/v3/teams/9002?Authorization=tQLMUvWYih7JvkIhgA3T38HsXH5qi33B4niDAsgc')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/local', credentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getTeams,
  getTeamById,
  loginUser
}
