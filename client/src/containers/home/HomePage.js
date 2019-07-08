import React from "react";
import { View, Text, ScrollView, TouchableHighlight, Modal } from "react-native";
import { connect } from "react-redux"

import {fetchMyScores} from '../../actions/scoreActions'
import ScoreCard from '../../components/score/scoreCard'
import ScoreShow from '../../components/score/scoreShow'

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
            <ScoreShow score={this.state.scoreDetail} workout={this.state.workoutDetail} close={this.closeModal}/>
        </Modal>
        <View style={{ flex: 1, alignItems: "stretch", justifyContent: "flex-start", color:'white', width:this.props.environment.width*0.95}}>
          <Text style={{color:'white'}} >Recently Logged Workouts</Text>
          <View style={{flexContainer: 'column', padding:this.props.environment.width*0.05}}>
            {this.props.scores.map((s)=>{ return <ScoreCard score={s} key={s._id} showScore={this.showScore}/> })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user,
    scores: state.score.myScores
  }
}

export default connect(mstp,{fetchMyScores})(HomePage)
