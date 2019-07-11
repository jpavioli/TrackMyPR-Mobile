import React from "react";
import { View, Text, Button, TextInput, Picker, StyleSheet} from "react-native";
import {connect} from "react-redux"

import {newWorkout} from '../../actions/workoutActions'
import { Colors, Spacing, Typography, Buttons} from '../../styles/index'

class NewWorkout extends React.Component {

  constructor() {
    super()
    this.state = {
      warmup: '',
      name: '',
      description: '',
      format: '',
      coolDown: ''
    }
  }

  newWorkout = () => {
    this.props.newWorkout(this.state, this.props.user.token)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.header} >Create a New Workout</Text>
        <Text style={styles.inputText} >Workout Name:</Text>
        <TextInput
          style={styles.textInput}
          textAlign='center'
          placeholder = 'Workout Name...'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text style={styles.inputText} >Description:</Text>
        <TextInput
          style={styles.multiline}
          textAlign='center'
          placeholder = 'Enter Workout Description...'
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
          multiline={true}
        />
        <Text style={styles.inputText} >Warmup:</Text>
        <TextInput
          style={styles.multiline}
          textAlign='center'
          placeholder = 'Enter Warmup...'
          onChangeText={(warmup) => this.setState({warmup})}
          value={this.state.warmup}
          multiline={true}
        />
        <Text style={styles.inputText} >Cool Down:</Text>
        <TextInput
          style={styles.multiline}
          textAlign='center'
          placeholder = 'Enter Cool Down...'
          onChangeText={(coolDown) => this.setState({coolDown})}
          value={this.state.coolDown}
          multiline={true}
        />
        <Text style={styles.inputText} >Workout Type:</Text>
        <View style={{flexDirection:'row'}}>
          <Button
            flex={1}
            title='For Time'
            onPress={()=>this.setState({format:'For Time'})}
            color={this.state.format === 'For Time' ? '#841584' : 'black'}
          />
          <Button
            flex={2}
            title='For Reps'
            onPress={()=>this.setState({format:'For Reps'})}
            color={this.state.format === 'For Reps' ? '#841584' : 'black'}
          />
          <Button
            flex={3}
            title='For Load'
            onPress={()=>this.setState({format:'For Load'})}
            color={this.state.format === 'For Load' ? '#841584' : 'black'}
          />
        </View>
        <Button
          title='Add Workout'
          onPress={()=>this.newWorkout()}
        />
        <Button
          title='Go Back'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    ...Colors.background,
    ...Spacing.centeredMain
  },
  header: {
    ...Colors.text,
    ...Spacing.mainHeader,
    ...Typography.mainHeader
  },
  inputText: {
    ...Spacing.input,
    ...Colors.text,
    ...Typography.sectionHead
  },
  textInput: {
    ...Colors.text,
    ...Spacing.textInput
  },
  multiline: {
    ...Colors.text,
    ...Spacing.textInput,
    height: Spacing.height*0.15
  },
  button: {
    ...Buttons.button
  },
  inline: {
    ...Spacing.sideBySide
  }
})

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user
  }
}

export default connect(mstp,{newWorkout})(NewWorkout)
