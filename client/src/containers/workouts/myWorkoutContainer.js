import React from "react";
import { Modal, View, ScrollView, Text, Button, Alert} from "react-native";
import { connect } from "react-redux"
import Workout from '../../components/workout/workoutCard'
import EditWorkout from '../../components/workout/editWorkoutForm'
import {fetchMyWorkouts, editWorkout,deleteWorkout} from '../../actions/workoutActions'

class myWorkoutContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      modalVis: false,
      editThis: null
    }
  }

  componentDidMount() {
    this.props.fetchMyWorkouts(this.props.user.user._id)
  }

  openModal = (obj) => {
    this.setState({
      editThis: obj,
      modalVis: !this.state.modalVis
    })
  }

  editWorkout = (obj) => {
    this.props.editWorkout(obj,this.props.user.token)
    this.setState({
      modalVis: false,
      editThis: null
    })
    this.props.navigation.navigate('My Workouts')
  }

  deleteWorkout = (obj) => {
    Alert.alert('Delete Workout','Are you sure?', [{text: 'OK', onPress: () => this.props.deleteWorkout(obj._id,this.props.user.token)},{text: 'Cancel'}])
    this.props.navigation.navigate('My Workouts')
  }

  render() {
    return (
      <View style={{flexContainer: 'column', padding:this.props.environment.width*0.05}}>
        <View>
          <Button title='Crate a New Workout' onPress={() => this.props.navigation.navigate('New Workout')} />
        </View>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVis}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
              <EditWorkout workout={this.state.editThis} editWorkout={this.editWorkout}/>
          </Modal>
          {this.props.workouts.map(w=> <Workout key={w._id} workout={w} editWorkout={this.openModal} commitEditWorkout={this.editWorkout} deleteWorkout={this.deleteWorkout}/>)}
        </ScrollView>
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    user: state.user,
    environment:state.environment,
    workouts: state.workouts.myWorkouts
  }
}

export default connect(mstp,{fetchMyWorkouts, editWorkout, deleteWorkout})(myWorkoutContainer)
