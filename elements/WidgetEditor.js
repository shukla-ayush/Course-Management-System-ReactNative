import React from 'react'
import {Picker, ScrollView} from 'react-native'
import AssignmentCreator from "./AssignmentCreator";
import ExamEditor from "./ExamEditor";
import AssignmentEditor from "./AssignmentEditor";

export default class WidgetEditor extends React.Component {
    static navigationOptions = { title: "Add Assignment or Exam"}
    constructor(props) {
        super(props);
        this.state = {
            lessonId: 1,
            widgetType: 'Exam'
        }
    }
    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam('lessonId');
        this.setState({
            lessonId: lessonId,
        })
    }

    render() {
        return(
            <ScrollView>
                <Picker
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({widgetType: itemValue})}
                    selectedValue={this.state.widgetType}>
                    <Picker.Item value="Exam"
                                 label="Draft Exam" />
                    <Picker.Item value="Assignment"
                                 label="Draft Assignment" />
                </Picker>
                {this.state.widgetType === 'Exam'
                && <ExamEditor navigation={this.props.navigation}
                               lessonId={this.state.lessonId}/>}
                {this.state.widgetType === 'Assignment'
                && <AssignmentCreator navigation={this.props.navigation}
                                      lessonId={this.state.lessonId}/>}
            </ScrollView>
        )
    }
}