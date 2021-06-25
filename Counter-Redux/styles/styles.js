import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  aligner:{
    flexDirection: 'row', 
    width: "80%", 
    justifyContent: 'space-evenly' 
  },
  button:{
    backgroundColor:'red', 
    borderRadius:5, 
    padding: 10},
  text:{ 
    fontSize: 20, 
    color:'white' 
  },
  textmiddle:{
    fontSize: 20,
    color:'black',
    marginTop: 10
  }
})

export default styles