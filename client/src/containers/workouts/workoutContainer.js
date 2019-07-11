import React from "react";
import { View, Text, FlatList, TextInput, TouchableHighlight, Modal, ScrollView,StyleSheet} from "react-native";
import { connect } from "react-redux"
import WorkoutCard from '../../components/workout/workoutCard'
import AddScore from '../../components/score/scoreForm'
import {fetchAllWorkouts} from '../../actions/workoutActions'
import {newScore} from '../../actions/scoreActions'
import { Colors, Spacing, Typography, Buttons, Cards} from '../../styles/index'

class WorkoutContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      data: [],
      modalVis: false,
      scoreThis: null
    }
  }

  searchFilterFunction = text => {
    const newData = this.props.workouts.filter(workout => {
      return workout.name.includes(text) || (workout.description ? workout.description.includes(text) : false)
    });
    this.setState({ data: newData });
  };

  openModal = (obj) => {
    this.setState({
      scoreThis: obj,
      modalVis: !this.state.modalVis
    })
  }

  closeModal = () => {
    this.setState({
      modalVis: false,
      editThis: null
    })
  }

  saveScore = (obj) => {
    this.props.newScore(obj,this.props.user.token)
    this.setState({
      modalVis: false,
      editThis: null
    })
    this.props.navigation.navigate('Workouts')
  }

  render() {
    return (
      <View style={{flexContainer: 'column', padding:this.props.environment.width*0.05}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVis}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <AddScore workout={this.state.scoreThis} saveScore={this.saveScore} close={this.closeModal}/>
        </Modal>
        <View style={{height:50, allignItems:'stretch',...Colors.backgroundColor}} />
        <View style={{height:Spacing.height*0.1}}>
          <Text style={styles.header} >Search:</Text>
          <TextInput
            style={styles.textInput}
            textAlign = 'center'
            placeholder = 'Search Workouts'
            onChangeText={this.searchFilterFunction} />
        </View>
        <ScrollView>
          <FlatList
            data={this.state.data.length === 0 ? this.props.workouts : this.state.data}
            renderItem={ workout =>
              <TouchableHighlight onPress={()=>this.openModal(workout.item)}>
                <WorkoutCard workout={workout.item} />
              </TouchableHighlight>
            }
            keyExtractor={w => w._id}
          />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    ...Cards.card
  },
  header: {
    ...Colors.text,
    ...Typography.mainHeader,
    ...Spacing.mainHeader,
  },
  section:{
    ...Spacing.input,
    ...Colors.text,
    ...Typography.sectionHead
  },
  description: {
    ...Typography.text,
    ...Spacing.input,
  },
  textInput: {
    ...Colors.text,
    ...Spacing.textInput
  },
  att: {
    ...Typography.accent
  },
  inline: {
    ...Spacing.sideBySide,
  },
});

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user,
    workouts: state.workouts.workouts
  }
}

export default connect(mstp,{fetchAllWorkouts,newScore})(WorkoutContainer)
