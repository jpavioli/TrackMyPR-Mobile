import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Colors, Spacing, Typography, Buttons, Cards} from '../../styles/index'

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
      <View style={styles.main}>
        <Text style={styles.header}>{this.props.workout.name}</Text>
        <Text style={styles.att}>{this.props.workout.description}</Text>
        <Text style={styles.inputText}>Enter Score:</Text>
        {(this.props.workout.format === "For Time") ?
          <View>
            <TextInput
              onChangeText={(results)=>this.setState({results})}
              textAlign = 'center'
              placeholder = 'Enter Time...'
              style={styles.textInput} />
          </View>
          :
          <View style={{flexDirection:'row'}}>
            <TextInput
              onChangeText={(results) => this.setState({results})}
              value={this.state.results}
              textAlign = 'center'
              placeholder = 'Enter Score...'
              style={styles.textInput} />
            {this.props.workout.format === "For Load" ?
              <View style={styles.inline}>
                <Button
                  flex={1}
                  title='lbs'
                  onPress={()=>this.setState({weightUnits:'lbs'})}
                  color={this.state.weightUnits === 'lbs' ? '#841584' : 'black'}
                />
                <Button
                  flex={2}
                  title='kgs'
                  onPress={()=>this.setState({weightUnits:'kgs'})}
                  color={this.state.weightUnits === 'kgs' ? '#841584' : 'black'}
                />
              </View>
              : null}
          </View>
        }
        <Button
          title='Rx'
          onPress={()=>this.setState({rx:!this.state.rx})}
          color={this.state.rx ? '#841584' : 'black'}
        />
        {!this.state.rx ?
          <View>
            <Text style={styles.inputText}>Modifications:</Text>
            <TextInput
              onChangeText={(modifications)=>this.setState({modifications})}
              textAlign = 'center'
              placeholder = 'Modifications...'
              style={styles.multiline} 
              multiline={true}
            />
          </View>
          :null}
        <Text style={styles.inputText}>Comments:</Text>
        <TextInput
          onChangeText={(comments)=>this.setState({comments})}
          textAlign = 'center'
          placeholder = 'Comments...'
          style={styles.multiline}
          multiline={true}
        />
        <Button
          title='Log Score'
          onPress={()=>this.props.saveScore(this.state)}
        />
        <Button
          title='Go Back'
          onPress={this.props.close}
        />
      </View>
    )
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
  att: {
    ...Typography.accent
  },
  button: {
    ...Buttons.button
  },
  inline: {
    ...Spacing.sideBySide
  }
})

export default ScoreCard
