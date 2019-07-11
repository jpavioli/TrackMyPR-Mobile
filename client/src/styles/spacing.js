import {Dimensions} from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height

export const mainHeader = {
  paddingTop: width*0.005,
  paddingBottom: width*0.01,
  paddingHorizontal: width*0.05
}

export const main = {
  flexDirection:'column',
  justifyContent:'center',
  height:height,
  width:width
}

export const text = {
  paddingHorizontal: width*0.05,
  paddingBottom: width*0.01,
}

export const input = {
  height: 30,
  paddingHorizontal: width*0.05,
}

export const card = {
  padding: width*0.05,
}

export const centeredMain = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

export const centered = {
  allignItmes: "center"
}

export const textInput = {
  height: 20,
  width: width*0.8
}

export const sideBySide = {
  flexDirection: 'row',

}
