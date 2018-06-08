import React from 'react'
import {ScrollView, TextInput, View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'
import EssayQuestionService from "../services/EssayQuestionService";
import QuestionList from "../components/QuestionList"

class EssayQuestionCreator extends React.Component {
    static navigationOptions = { title: "Essay"}
    constructor(props) {
        super(props)
        this.state = {
            examId: 1,
            essayQuestion: {title: '', description: '', points: 0, type: 'Essay'}
        }
        this.essayQuestionService = EssayQuestionService.instance;
    }

    componentWillReceiveProps(newProps){
        this.setState({
            examId: newProps.examId
        })
    }

    componentDidMount() {
        const {navigation} = this.props;
        const examId = this.props.examId;
        this.setState({
            examId: examId
        })
    }

    updateTitle(newTitle) {
        this.setState({essayQuestion: {title: newTitle,
                description: this.state.essayQuestion.description,
                points: this.state.essayQuestion.points,
                type: this.state.essayQuestion.type}});
    }

    updateDescription(newDescription) {
        this.setState({essayQuestion: {title: this.state.essayQuestion.title,
                description: newDescription,
                points: this.state.essayQuestion.points,
                type: this.state.essayQuestion.type}});
    }

    updatePoints(newPoints) {
        this.setState({essayQuestion: {title: this.state.essayQuestion.title,
                description: this.state.essayQuestion.description,
                points: newPoints,
                type: this.state.essayQuestion.type}});
    }

    createEssay(){
        this.essayQuestionService.createEssay(this.state.examId, this.state.essayQuestion)
    }

    render() {
        return(
            <ScrollView>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateTitle(text)
                }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <TextInput onChangeText={
                    text => this.updateDescription(text)
                }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>

                <FormLabel>Points</FormLabel>
                <FormInput onChangeText={
                    text => this.updatePoints(text)
                }/>
                <FormValidationMessage>
                    Points are required
                </FormValidationMessage>

                <Button	backgroundColor="green"
                           color="white"
                           title="Save"
                           onPress={() => {this.createEssay()}}/>

                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"
                           onPress={() => {
                               this.props.navigation
                                   .navigate("QuestionList", {lessonId: this.state.lessonId, examId: this.state.examId})}}/>

                <Text h3>Preview</Text>

                <Text>{this.state.essayQuestion.title}</Text>
                <Text>{this.state.essayQuestion.description}</Text>
                <Text>{this.state.essayQuestion.points}</Text>

            </ScrollView>
        )
    }
}

export default EssayQuestionCreator