import React from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'
import EssayQuestionService from "../services/EssayQuestionService";
import QuestionList from "../components/QuestionList"

class EssayEditor extends React.Component {
    static navigationOptions = { title: "Essay Updator"}
    constructor(props) {
        super(props)
        this.state = {
            examId: 1,
            questionId: 1,
            lessonId: 1,
            essayQuestion: {title: '', description: '', points: 0, type: 'Essay'}
        }
        this.essayQuestionService = EssayQuestionService.instance;
    }

    componentWillReceiveProps(newProps){
        this.setState({
            examId: newProps.examId,
            questionId: newProps.questionId,
            lessonId: newProps.lessonId
        })
    }

    componentDidMount() {
        const {navigation} = this.props;
        const questionId = navigation.getParam('questionId');
        const examId = navigation.getParam('examId');
        const lessonId = navigation.getParam('lessonId');
        const question = navigation.getParam('question');
        this.setState({
            questionId:questionId,
            examId: examId,
            lessonId: lessonId,
            essayQuestion: question
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

    updateEssay(){
        this.essayQuestionService.updateEssay(this.state.questionId, this.state.essayQuestion)
    }


    deleteEssay(){
        this.essayQuestionService
            .deleteEssay(this.state.questionId)
            .then(() => {
                this.props.navigation
                    .navigate("QuestionList", {examId: this.state.examId, lessonId: this.state.lessonId});
            })}

    render() {
        return(
            <ScrollView>
                <FormLabel>Title</FormLabel>
                <FormInput
                    value ={this.state.essayQuestion.title}
                    onChangeText={
                    text => this.updateTitle(text)
                }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <FormInput
                    value ={this.state.essayQuestion.description}
                    onChangeText={
                    text => this.updateDescription(text)
                }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>

                <FormLabel>Points</FormLabel>
                <FormInput
                    value ={(this.state.essayQuestion.points).toString()}
                    onChangeText={
                    text => this.updatePoints(text)
                }/>
                <FormValidationMessage>
                    Points are required
                </FormValidationMessage>

                <Button	backgroundColor="green"
                           color="white"
                           title="Update"
                           onPress={() => {this.updateEssay()}}/>

                <Button	backgroundColor="blue"
                           color="white"
                           title="Cancel"
                           onPress={() => {
                               this.props.navigation
                                   .navigate("QuestionList", {examId: this.state.examId})}}/>

                {/*<Button	backgroundColor="red"*/}
                           {/*color="white"*/}
                           {/*onPress={() => {this.deleteEssay()}}*/}
                           {/*title="Delete"/>*/}

                <Text h3>Preview</Text>

                <Text>{this.state.essayQuestion.title}</Text>
                <Text>{this.state.essayQuestion.description}</Text>
                <Text>{this.state.essayQuestion.points}</Text>

            </ScrollView>
        )
    }
}

export default EssayEditor