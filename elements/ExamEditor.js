import React from 'react'
import {ScrollView, TextInput} from 'react-native'
import {Text, Button} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import ExamService from "../services/ExamService";
import WidgetList from "../components/WidgetList";


class ExamEditor extends React.Component {
    static navigationOptions = { title: "Exam Editor"};
    constructor(props) {
        super(props);
        this.examService = ExamService.instance;
        this.state = {
            lessonId: this.props.lessonId,
            exam : {title: '', description: '', questions: [], widgetType: 'Exam'}
        }
    }

    componentDidMount() {
        this.setState({
            lessonId: this.props.lessonId
        })
    }

    componentWillReceiveProps(newProps){
        this.setState({
            lessonId: newProps.lessonId
        })
    }

    updateTitle(newTitle) {
        this.setState({exam: {title: newTitle,
                description: this.state.exam.description,
                questions: this.state.exam.questions,
                widgetType:this.state.exam.widgetType}});
    }

    updateDescription(newDescription) {
        this.setState({exam: {title: this.state.exam.title,
                description: newDescription,
                questions: this.state.exam.questions,
                widgetType:this.state.exam.widgetType}});
    }

    createExam(){
        this.examService
            .createExam(this.state.lessonId, this.state.exam)
            .then(() => {
                this.props.navigation
                    .navigate("WidgetList", {lessonId: this.state.lessonId})
            });
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
                <TextInput
                    multiline={true}
                    numberOfLines={2}
                    onChangeText={
                    text => this.updateDescription(text)
                }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>

                <Button	backgroundColor="green"
                           color="white"
                           title="Save"
                           onPress={() => {this.createExam()}}/>

                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"
                           onPress={() =>
                               this.props.navigation
                                   .navigate("WidgetList", {lessonId: this.state.lessonId})
                           }/>

                <Text h3>Preview</Text>
                {<Text>{this.state.exam.title}</Text>}
                {<Text>{this.state.exam.description}</Text>}
                <FormInput/>

            </ScrollView>
        )
    }
}

export default ExamEditor