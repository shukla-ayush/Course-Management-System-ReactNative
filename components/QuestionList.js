import React, {Component} from 'react'
import {Picker, View, Button, ScrollView} from 'react-native'
import {Text, ListItem, ButtonGroup} from 'react-native-elements'
import ExamService from "../services/ExamService";
import WidgetList from "./WidgetList";
import MultipleChoiceQuestionCreator from "../elements/MultipleChoiceQuestionCreator";
import TrueFalseQuestionCreator from "../elements/TrueFalseQuestionCreator";
import EssayQuestionCreator from "../elements/EssayQuestionCreator";
import FillInTheBlankQuestionCreator from "../elements/FillInTheBlankQuestionCreator";
import FillInTheBlankEditor from "../elements/FillInTheBlankEditor";
import MultiChoiceUpdator from "../elements/MultipleChoiceEditor";
import TrueFalseEditor from "../elements/TrueFalseEditor";
import EssayUpdator from "../elements/EssayEditor";


class QuestionList extends Component {
    static navigationOptions = {title: 'Questions'}

    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            questions: [],
            examId: 1,
            lessonId: 1,
            selectedQuestionTypeIndex: 10
        }
        this.examService = ExamService.instance;
        this.deleteExam = this.deleteExam.bind(this)
        this.selectQuestionType = this.selectQuestionType.bind(this)
    }

    componentDidMount() {
        const {navigation} = this.props;
        const examId = navigation.getParam("examId");
        const lessonId = navigation.getParam("lessonId");
        console.log(examId)
        console.log(lessonId)
        this.setState({
            examId: examId,
            lessonId: lessonId
        })
        fetch("http://192.168.241.2:8085/api/exam/" + examId + "/question")
            .then(response => (response.json()))
            .then(questions => this.setState({questions: questions}))
            .catch(function(error) {
                console.log(error.message);
            })
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            examId: newProps.examId,
            lessonId: newProps.lessonId
        })
        fetch("http://192.168.241.2:8085/api/exam/" + newProps.examId + "/question")
            .then(response => (response.json()))
            .then(questions => this.setState({questions: questions}))
            .catch(function(error) {
                console.log(error.message);
            })
    }

    selectQuestionType = (newQuestionTypeIndex) => {
        this.setState({
            selectedQuestionTypeIndex: newQuestionTypeIndex
        })
    }

    deleteExam() {
        this.examService
            .deleteExam(this.state.examId)
            .then(() => {
                this.props.navigation
                    .navigate("WidgetList", {lessonId: this.state.lessonId})
            });
    }

    render() {

        const questionTypes = [
            'Multiple Choice',
            'Fill in the blank',
            'Essay',
            'True or\nfalse']

        return (

            <ScrollView style={{padding: 15}}>

                <Button backgroundColor="red"
                        color="black"
                        onPress={() => {
                            this.deleteExam()}}
                        title="Delete Exam"/>

                <ButtonGroup
                    onPress={this.selectQuestionType}
                    selectedIndex={this.state.selectedQuestionTypeIndex}
                    buttons={questionTypes}
                    containerStyle={{height: 75}}/>
                {this.state.selectedQuestionTypeIndex === 0 && <MultipleChoiceQuestionCreator examId={this.state.examId}/>}
                {this.state.selectedQuestionTypeIndex === 3 && <TrueFalseQuestionCreator examId={this.state.examId}/>}
                {this.state.selectedQuestionTypeIndex === 1 && <FillInTheBlankQuestionCreator examId={this.state.examId}/>}
                {this.state.selectedQuestionTypeIndex === 2 && <EssayQuestionCreator examId={this.state.examId}/>}

                {this.state.questions.map(
                    (question, index) => (
                        <ListItem
                            onPress={() => {
                                if (question.type === "TrueFalse")
                                {this.props.navigation
                                        .navigate("TrueFalseEditor", {questionId: question.id,question: question, examId: this.state.examId, lessonId: this.state.lessonId})}
                                if (question.type === "MultiChoice")
                                {this.props.navigation
                                        .navigate("MultiChoiceUpdator", {questionId: question.id,question: question, examId: this.state.examId, lessonId: this.state.lessonId})}
                                if (question.type === "Essay")
                                {this.props.navigation
                                    .navigate("EssayUpdator", {questionId: question.id,question: question, examId: this.state.examId, lessonId: this.state.lessonId})}
                                if (question.type === "FillInTheBlank")
                                {this.props.navigation
                                    .navigate("FillInTheBlankEditor", {questionId: question.id,question: question, examId: this.state.examId, lessonId: this.state.lessonId})}
                            }}
                            key={index}
                            subtitle={question.description}
                            title={question.title}/>))}

            </ScrollView>
        )
    }
}

export default QuestionList