import React, {Component} from 'react'
import {View, Alert, Picker, ScrollView} from 'react-native'
import {Text, ListItem, ButtonGroup} from 'react-native-elements'
import MultipleChoiceQuestionEditor from "../elements/MultipleChoiceQuestionEditor";
import TrueFalseQuestionEditor from "../elements/TrueFalseQuestionEditor";
import EssayQuestionEditor from "../elements/EssayQuestionEditor";
import FillInTheBlankQuestionEditor from "../elements/FillInTheBlankQuestionEditor";

class QuestionList extends Component {
  static navigationOptions = {title: 'Questions'}
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      examId: 1,
      newQuestion: ''
    }
  }

  componentWillReceiveProps(newProps){
      this.setState({
          examId: newProps.examId
      })
  }

  componentDidMount() {
    const {navigation} = this.props;
    const examId = navigation.getParam("examId");
      this.setState({
          examId: examId
      })
    fetch("http://192.168.241.2:8085/api/exam/"+examId+"/question")
      .then(response => (response.json()))
      .then(questions => this.setState({questions}))
  }

  render() {

    return(
      <ScrollView style={{padding: 15}}>

          <Picker
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({newQuestion: itemValue})}
              selectedValue={this.state.widgetType}>
              <Picker.Item value="MC"
                           label="Multiple Choice" />
              <Picker.Item value="TF"
                           label="True or False" />
              <Picker.Item value="FB"
                           label="Fill in the Blanks" />
              <Picker.Item value="EQ"
                           label="Essay" />
          </Picker>
          {this.state.newQuestion === 'MC' && <MultipleChoiceQuestionEditor examId={this.state.examId}/>}
          {this.state.newQuestion === 'TF' && <TrueFalseQuestionEditor examId={this.state.examId}/>}
          {this.state.newQuestion === 'FB' && <FillInTheBlankQuestionEditor examId={this.state.examId}/>}
          {this.state.newQuestion === 'EQ' && <EssayQuestionEditor examId={this.state.examId}/>}

      {this.state.questions.map(
        (question, index) => (
          <ListItem
            onPress={() => {
              if(question.type === "TrueFalse")
                this.props.navigation
                  .navigate("TrueFalseQuestionEditor", {questionId: question.id})
              if(question.type === "MultipleChoice")
                this.props.navigation
                  .navigate("MultipleChoiceQuestionEditor", {questionId: question.id})
            }}
            key={index}
            subtitle={question.description}
            title={question.title}/>))}
      </ScrollView>
    )
  }
}
export default QuestionList