import React from "react";
import { View, Text, FlatList, TextInput} from "react-native";
import { connect } from "react-redux"
import WorkoutCard from '../../components/workout/workoutCard'
import {fetchAllWorkouts} from '../../actions/workoutActions'

class WorkoutContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  searchFilterFunction = text => {
    const newData = this.props.workouts.filter(workout => {
      return workout.name.includes(text) || (workout.description ? workout.description.includes(text) : false)
    });
    this.setState({ data: newData });
  };

  componentDidMount() {
    this.props.fetchAllWorkouts()
  }

  render() {
    return (
      <View style={{flexContainer: 'column', padding:this.props.environment.width*0.05}}>
        <View style={{height:this.props.environment.height*0.1}}>
          <Text style={{color:'white'}} >Search:</Text>
          <TextInput style={{height: this.props.environment.height*0.075, borderColor:'gray', borderWidth: 1,width:this.props.environment.width*0.9,color:'white'}} onChangeText={this.searchFilterFunction} />
        </View>
        <View>
          <FlatList
            data={this.state.data.length === 0 ? this.props.workouts : this.state.data}
            renderItem={ workout =>
              <WorkoutCard workout={workout.item} />
            }
            keyExtractor={w => w._id}
          />
        </View>
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user,
    workouts: state.workouts.workouts
  }
}

export default connect(mstp,{fetchAllWorkouts})(WorkoutContainer)
