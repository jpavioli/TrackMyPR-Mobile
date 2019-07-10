import React from "react";
import { View, Text, ScrollView, TouchableHighlight, Modal, StyleSheet } from "react-native";
import { connect } from "react-redux"

import {fetchMyScores, deleteScore} from '../../actions/scoreActions'
import {fetchMyWorkouts} from '../../actions/workoutActions'
import {fetchAllWorkouts } from '../../actions/workoutActions'
import {fetchAllScores } from '../../actions/scoreActions'
import ScoreCard from '../../components/score/scoreCard'
import ScoreShow from '../../components/score/scoreShow'
import { Colors, Spacing, Typography, Buttons} from '../../styles/index'

class HomePage extends React.Component {

  constructor() {
    super()
    this.state = {
      modalVis: false,
      scoreDetail: null,
      workoutDetail: null
    }
  }

  componentDidMount() {
    this.props.fetchMyScores(this.props.user.user._id)
    this.props.fetchMyWorkouts(this.props.user.user._id)
    this.props.fetchAllWorkouts()
    this.props.fetchAllScores()
  }

  showScore = (score,workout) => {
    this.setState({
      scoreDetail: score,
      workoutDetail: workout,
      modalVis: !this.state.modalVis,
    })
  }

  closeModal = () => {
    this.setState({
      scoreDetail: null,
      workoutDetail: null,
      modalVis: !this.state.modalVis,
    })
  }

  deleteScore = (id) => {
    this.props.deleteScore(id,this.props.user.token)
    this.setState({
      scoreDetail: null,
      workoutDetail: null,
      modalVis: !this.state.modalVis,
    })
  }

  render() {
    return (
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVis}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.main}>
            <ScoreShow score={this.state.scoreDetail} workout={this.state.workoutDetail} close={this.closeModal} delete={this.deleteScore}/>
          </View>
        </Modal>
        <View style={{height:50, allignItems:'stretch',...Colors.backgroundColor}} />
        <View style={{ flex: 1, alignItems: "stretch", color:'white', width:this.props.environment.width*0.95}}>
          <Text style={styles.header} >Recently Logged Workouts</Text>
          <View style={styles.card}>
            {this.props.scores.map((s)=>{ return <ScoreCard score={s} key={s._id} showScore={this.showScore}/> })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    ...Colors.background,
    ...Spacing.main
  },
  header: {
    ...Colors.text,
    ...Spacing.mainHeader,
    ...Typography.mainHeader
  },
  card: {
    ...Spacing.card,
    ...Colors.text,
  },
  textInput: {
    ...Colors.text,
    ...Spacing.textInput
  },
  button: {
    ...Buttons.button
  }
})

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user,
    scores: state.score.myScores
  }
}

export default connect(mstp,{fetchAllScores, fetchMyScores, fetchAllWorkouts, fetchMyWorkouts, deleteScore})(HomePage)
