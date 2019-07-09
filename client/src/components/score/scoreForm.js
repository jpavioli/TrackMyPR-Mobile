import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import TimeField from 'react-simple-timefield'

class ScoreCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      results: '0',
      weightUnits: 'lbs',
      rx: false,
      modifications: '',
      comments: '',
      workout: props.workout._id
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: "center", color:'black'}}>
        <Text>{this.props.workout.name}</Text>
        <Text>{this.props.workout.description}</Text>
        <Text>Enter Score:</Text>
        {(this.props.workout.format === "For Time") ?
          <View>
            <TextInput onChangeText={(results)=>this.setState({results})} />
          </View>
          :
          <View style={{flexDirection:'row'}}>
            <TextInput onChangeText={(results) => this.setState({results})} value={this.state.results} />
            {this.props.workout.format === "For Load" ?
              <View style={{flexDirection:'row'}}>
                <Button flex={1} title='lbs' onPress={()=>this.setState({weightUnits:'lbs'})} color={this.state.weightUnits === 'lbs' ? '#841584' : 'black'} />
                <Button flex={2} title='kgs' onPress={()=>this.setState({weightUnits:'kgs'})} color={this.state.weightUnits === 'kgs' ? '#841584' : 'black'} />
              </View>
              : null}
          </View>
        }
        <Button title='Rx' onPress={()=>this.setState({rx:!this.state.rx})} color={this.state.rx ? '#841584' : 'black'} />
        <Text>Modifications:</Text>
        <TextInput onChangeText={(modifications)=>this.setState({modifications})} />
        <Text>Comments:</Text>
        <TextInput onChangeText={(comments)=>this.setState({comments})} />
        <Button title='Log Score' onPress={()=>this.props.saveScore(this.state)} />
        <Button title='Go Back' onPress={this.props.close} />
      </View>
    )
  }

}

export default ScoreCard
