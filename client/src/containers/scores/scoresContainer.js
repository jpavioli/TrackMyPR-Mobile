import React from "react";
import { View, ScrollView, Text } from "react-native";
import { connect } from "react-redux"
import Score from '../../components/score/scoreCard'
import {fetchScores} from '../../actions/scoreActions'

class scoresContainer extends React.Component {

  componentDidMount() {
    this.props.fetchScores(this.props.user.user._id)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", color:'white' }}>
        <ScrollView>
          {this.props.score.scores.map(s=> <Score key={s._id} workout={s} />)}
        </ScrollView>
      </View>
    );
  }
}

const mstp = (state) => {
  return {
    environment: state.environment,
    user: state.user,
    score: state.score
  }
}

export default connect(mstp,{fetchScores})(scoresContainer)
