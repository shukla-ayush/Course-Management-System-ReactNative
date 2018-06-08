import 'es6-symbol/implement';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import FixedHeader from './elements/FixedHeader'
import TextHeadings from './elements/TextHeadings'
import Icons from './elements/Icons'
import Exam from './elements/Exam'
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser'
import QuestionTypePicker from './elements/QuestionTypePicker'
import TrueFalseQuestionCreator from './elements/TrueFalseQuestionCreator'
import MultipleChoiceQuestionCreator from './elements/MultipleChoiceQuestionCreator'
import { createStackNavigator } from 'react-navigation'
import {Button} from 'react-native-elements'
import ScreenX from './elements/ScreenX'
import CourseList from './components/CourseList'
import ModuleList from './components/ModuleList'
import LessonList from './components/LessonList'
import WidgetList from './components/WidgetList'
import QuestionList from './components/QuestionList'
import WidgetEditor from "./elements/WidgetEditor";
import AssignmentCreator from "./elements/AssignmentCreator";
import AssignmentEditor from "./elements/AssignmentEditor";
import ExamEditor from "./elements/ExamEditor";
import TrueFalseEditor from "./elements/TrueFalseEditor";
import MultiChoiceEditor from "./elements/MultipleChoiceEditor";
import FillInTheBlankEditor from "./elements/FillInTheBlankEditor";
import EssayEditor from "./elements/EssayEditor";

class Home extends React.Component {
    static navigationOptions = {
        title: 'Course Management System'
    }
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <ScrollView>
                <StatusBar barStyle="light-content"/>
                <FixedHeader/>

                <Button title="Courses"
                        onPress={() => this.props.navigation
                            .navigate('CourseList') } />

            </ScrollView>
        )
    }
}


const App = createStackNavigator({
    Home,
    CourseList,
    ModuleList,
    LessonList,
    WidgetList,
    WidgetEditor,
    ExamEditor,
    AssignmentCreator,
    AssignmentEditor,
    QuestionList,
    TrueFalseEditor,
    MultiChoiceEditor,
    FillInTheBlankEditor,
    EssayEditor,
    TrueFalseQuestionCreator,
    MultipleChoiceQuestionCreator
});

export default App;
