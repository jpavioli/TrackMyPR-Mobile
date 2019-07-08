import React from "react";
import {View, Text, Button, TextInput, Picker} from "react-native";
import {connect} from "react-redux"

class EditWorkout extends React.Component {

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

  componentDidMount(){
    this.setState({
      warmup: this.props.workout.warmup ? this.props.workout.warmup : null,
      name: this.props.workout.name ? this.props.workout.name : null,
      description: this.props.workout.description ? this.props.workout.description : null,
      format: this.props.workout.format ? this.props.workout.format : null,
      coolDown: this.props.workout.coolDown ? this.props.workout.coolDown : null,
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{color:'black'}} >Workout Name:</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'black'}} onChangeText={(name) => this.setState({name})} value={this.state.name} />
        <Text style={{color:'black'}} >Description:</Text>
        <TextInput style={{height: 60, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'black'}} onChangeText={(description) => this.setState({description})} value={this.state.description} multiline={true} />
        <Text style={{color:'black'}} >Warmup:</Text>
        <TextInput style={{height: 60, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'black'}} onChangeText={(warmup) => this.setState({warmup})} value={this.state.warmup} multiline={true} />
        <Text style={{color:'black'}} >Cool Down:</Text>
        <TextInput style={{height: 20, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.8,color:'black'}} onChangeText={(coolDown) => this.setState({coolDown})} value={this.state.coolDown} multiline={true} />
        <Text style={{color:'black'}} >Workout Type:</Text>
        <View style={{flexDirection:'row'}}>
          <Button flex={1} title='For Time' onPress={()=>this.setState({format:'For Time'})} color={this.state.format === 'For Time' ? '#841584' : 'black'} />
          <Button flex={2} title='For Reps' onPress={()=>this.setState({format:'For Reps'})} color={this.state.format === 'For Reps' ? '#841584' : 'black'} />
          <Button flex={3} title='For Load' onPress={()=>this.setState({format:'For Load'})} color={this.state.format === 'For Load' ? '#841584' : 'black'} />
        </View>
        <Button title='Commit Changes' onPress={()=>this.props.editWorkout({_id:this.props.workout._id,...this.state})} />
        <Button title='Go Back' onPress={() => this.props.navigation.navigate('My Workouts')} />
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

export default connect(mstp)(EditWorkout)
