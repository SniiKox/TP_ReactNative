import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import IconFea from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome5'
import colors from '../style/Colors'

class Informations extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Icon name='woman' size={25} color={colors.primary} />
        <Text style={styles.text}> CHARPENTIER Guillaume </Text>
        <IconFA name='chalkboard-teacher' size={25} color={colors.primary} />
        <Text style={styles.text}> SERGENT Marius </Text>
        <IconFea name='smartphone' size={25} color={colors.primary} />
        <Text style={styles.text}> Visualisation des équipes de</Text>
        <Text style={styles.text}> Premier League</Text>
        <Text> </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Informations
