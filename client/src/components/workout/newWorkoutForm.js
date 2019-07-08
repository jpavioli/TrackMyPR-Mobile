import React from "react";
import { View, Text, Button, TextInput, Picker} from "react-native";
import {connect} from "react-redux"

import {newWorkout} from '../../actions/workoutActions'

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{color:'white'}} >NEW WORKOUT Screen</Text>
        <Text style={{color:'white'}} >Workout Name:</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(name) => this.setState({name})} value={this.state.name} />
        <Text style={{color:'white'}} >Description:</Text>
        <TextInput style={{height: 60, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(description) => this.setState({description})} value={this.state.description} multiline={true}/>
        <Text style={{color:'white'}} >Warmup:</Text>
        <TextInput style={{height: 60, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(warmup) => this.setState({warmup})} value={this.state.warmup} multiline={true} />
        <Text style={{color:'white'}} >Cool Down:</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'white'}} onChangeText={(coolDown) => this.setState({coolDown})} value={this.state.coolDown} multiline={true} />
        <Text style={{color:'white'}} >Workout Type:</Text>
        <View style={{flexDirection:'row'}}>
          <Button flex={1} title='For Time' onPress={()=>this.setState({format:'For Time'})} color={this.state.format === 'For Time' ? '#841584' : 'black'} />
          <Button flex={2} title='For Reps' onPress={()=>this.setState({format:'For Reps'})} color={this.state.format === 'For Reps' ? '#841584' : 'black'} />
          <Button flex={3} title='For Load' onPress={()=>this.setState({format:'For Load'})} color={this.state.format === 'For Load' ? '#841584' : 'black'} />
        </View>
        <Button title='Add Workout' onPress={()=>this.newWorkout()} />
        <Button title='Go Back' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user
  }
}

export default connect(mstp,{newWorkout})(NewWorkout)
