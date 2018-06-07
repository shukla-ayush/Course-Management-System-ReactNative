// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import 'es6-symbol/implement';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import FixedHeader from './elements/FixedHeader'
import TextHeadings from './elements/TextHeadings'
import Icons from './elements/Icons'
import Exam from './elements/Exam'
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser'
import QuestionTypePicker from './elements/QuestionTypePicker'
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor'
import MultipleChoiceQuestionEditor from './elements/MultipleChoiceQuestionEditor'
import { createStackNavigator } from 'react-navigation'
import {Button} from 'react-native-elements'
import ScreenX from './elements/ScreenX'
import CourseList from './components/CourseList'
import ModuleList from './components/ModuleList'
import LessonList from './components/LessonList'
import WidgetList from './components/WidgetList'
import QuestionList from './components/QuestionList'
import WidgetEditor from "./elements/WidgetEditor";
import AssignmentContainer from "./elements/AssignmentContainer";
import AssignmentEditor from "./elements/AssignmentEditor";
import ExamContainer from "./elements/ExamContainer";

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
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
                {/*<Button title="Go to Screen X"*/}
                        {/*onPress={() => this.props.navigation*/}
                            {/*.navigate('ScreenX') } />*/}
                {/*<Button title="Go to Screen A"*/}
                        {/*onPress={() => this.props.navigation*/}
                            {/*.navigate('ScreenA') } />*/}
                {/*<Button title="Go to Screen B"*/}
                        {/*onPress={() => this.props.navigation*/}
                            {/*.navigate('ScreenB') } />*/}


                {/*<TrueFalseQuestionEditor/>*/}

                {/*<QuestionTypeButtonGroupChooser/>*/}
                {/*<QuestionTypePicker/>*/}

                {/*<Exam/>*/}

                {/*<Icons/>*/}
                {/*<View style={{padding: 20}}>*/}
                    {/*<TextHeadings/>*/}
                {/*</View>*/}
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
    ExamContainer,
    AssignmentContainer,
    AssignmentEditor,
    QuestionList,
    TrueFalseQuestionEditor,
    MultipleChoiceQuestionEditor
});

export default App;
