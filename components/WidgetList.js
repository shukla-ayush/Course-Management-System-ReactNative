// import React, {Component} from 'react'
// import {View, Alert} from 'react-native'
// import {Text, ListItem, Button} from 'react-native-elements'
//
// class WidgetList extends Component {
//   static navigationOptions = {title: 'Widgets'}
//   constructor(props) {
//     super(props)
//     this.state = {
//       widgets: [],
//       courseId: 1,
//       moduleId: 1,
//       lessonId: 1
//     }
//   }
//   componentDidMount() {
//     const {navigation} = this.props;
//     const lessonId = navigation.getParam("lessonId")
//     fetch("http://192.168.241.2:8085/api/lesson/"+lessonId+"/widget")
//       .then(response => (response.json()))
//       .then(widgets => this.setState({widgets}))
//         .catch(function(error) {
//             console.log(error.message);
//         })
//   }
//   render() {
//     return(
//       <View style={{padding: 15}}>
//
//       <Button	backgroundColor="green"
//             color="white"
//             title="Create Widget"
//             onPress={() => this.props.navigation
//                  .navigate("WidgetEditor", {lessonId: this.state.lessonId})}/>
//
//       {this.state.widgets.map(
//         (widget, index) => (
//           <ListItem
//             // onPress={() => { if(widget.widgetType === "Exam") {this.props.navigation.navigate("QuestionList", {examId: widget.id})}
//             // else {this.props.navigation.navigate("AssignmentCreator", {assignmentId: widget.id})}}}
//             key={index}
//             // text={widget.text}
//             subtitle={widget.description}
//             title={widget.title}/>))}
//       </View>
//     )
//   }
// }
// export default WidgetList

// ########################################################################3333


// import React, {Component} from 'react'
// import {ScrollView} from 'react-native'
// import {Button, ListItem} from 'react-native-elements'
// import AssignmentEditor from "../elements/AssignmentEditor";
// import WidgetEditor from "../elements/WidgetEditor";
//
// class WidgetList extends Component {
//     static navigationOptions = {title: 'Widgets'};
//     constructor(props) {
//         super(props)
//         this.state = {
//             widgets: [],
//             courseId: 1,
//             moduleId: 1,
//             lessonId: 1
//         }
//     }
//
//     componentDidMount() {
//         const {navigation} = this.props;
//         const lessonId = navigation.getParam("lessonId");
//         this.setState({
//             lessonId: lessonId
//         });
//         fetch("http://192.168.241.2:8085/api/lesson/"+lessonId+"/widget")
//             .then(response => (response.json()))
//             .then(widgets => this.setState({widgets}))
//             .catch(function(error) {
//                 console.log(error.message);
//             })
//     }
//     render() {
//         return(
//             <ScrollView style={{padding: 15}}>
//
//                 <Button backgroundColor="green"
//                         color="white"
//                         onPress={() => this.props.navigation.navigate('WidgetEditor',{lessonId: this.state.lessonId})}
//                         title= "Create Widget"/>
//
//                 {this.state.widgets.map(
//                     (widget, index) => (
//                         <ListItem
//                             onPress={() => {if(widget.widgetType === "Exam") {this.props.navigation.navigate("QuestionList", {examId: widget.id})}
//                             else {this.props.navigation.navigate("AssignmentEditor", {assignmentId: widget.id, widget: widget})}}}
//                             key={index}
//                             title={widget.title}
//                             subtitle={widget.description}/>
//                     ))}
//             </ScrollView>
//         )
//     }
// }
// export default WidgetList

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// import React, {Component} from 'react'
// import {ScrollView} from 'react-native'
// import {Button, ListItem} from 'react-native-elements'
//
// class WidgetList extends Component {
//     static navigationOptions = {title: 'Widgets'};
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             widgets: [],
//             courseId: 1,
//             moduleId: 1,
//             lessonId: 1
//         }
//     }
//
//     componentWillReceiveProps(newProps) {
//         this.setState({
//             lessonId: newProps.lessonId
//         })
//         console.log(this.state.lessonId + "&&&&&&&&&&&&&&&")
//         fetch("http://192.168.241.2:8085/api/lesson/" + newProps.lessonId + "/widget")
//             .then(response => (response.json()))
//             .then(widgets => this.setState({widgets}))
//             .catch(function(error) {
//                 console.log(error.message);
//             })
//     }
//
//     componentDidMount() {
//         const {navigation} = this.props;
//         const lessonId = navigation.getParam("lessonId");
//         this.setState({
//             lessonId: lessonId
//         });
//         fetch("http://192.168.241.2:8085/api/lesson/" + lessonId + "/widget")
//             .then(response => (response.json()))
//             .then(widgets => this.setState({widgets}))
//             .catch(function(error) {
//                 console.log(error.message);
//             })
//     }
//
//     render() {
//         return (
//             <ScrollView style={{padding: 15}}>
//                 <Button backgroundColor="green"
//                         color="white"
//                         onPress={() => this.props.navigation.navigate('WidgetEditor', {lessonId: this.state.lessonId})}
//                         title="Add Widget"/>
//                 {this.state.widgets.map(
//                     (widget, index) => (
//                         <ListItem
//                             onPress={() => {
//                                 if (widget.widgetType === "Exam") {
//                                     this.props.navigation.navigate("QuestionList", {examId: widget.id})
//                                 }
//                                 else {
//                                     this.props.navigation.navigate("AssignmentEditor", {assignmentId: widget.id,
//                                         widget: widget})
//                                 }
//                             }}
//                             key={index}
//                             title={widget.title}
//                             subtitle={widget.description}/>
//                     ))}
//             </ScrollView>
//         )
//     }
// }
//
// export default WidgetList


//###################

import React, {Component} from 'react'
import {ScrollView, View} from 'react-native'
import {Button, ListItem} from 'react-native-elements'
import AssignmentCreator from "../elements/AssignmentCreator";

class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'};

    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1,
            lessonId: 1
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        this.setState({
            lessonId: lessonId
        })
        fetch("http://192.168.241.2:8085/api/lesson/" + lessonId + "/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }

    componentWillReceiveProps(newProps) {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        this.setState({
            lessonId: lessonId
        })
        fetch("http://192.168.241.2:8085/api/lesson/" + lessonId + "/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }

    render() {
        return (
            <ScrollView style={{padding: 15}}>
                <Button backgroundColor="green"
                        color="white"
                        onPress={() => this.props.navigation.navigate('WidgetEditor', {lessonId: this.state.lessonId})}
                        title="Add Widget"/>
                {this.state.widgets.map(
                    (widget, index) => (
                        <ListItem
                            onPress={() => {
                                if (widget.widgetType === "Exam") {
                                    this.props.navigation.navigate("QuestionList", {examId: widget.id, lessonId: this.state.lessonId})
                                }
                                else {
                                    this.props.navigation.navigate("AssignmentEditor", {assignmentId: widget.id, widget: widget,lessonId: this.state.lessonId })
                                }
                            }}
                            key={index}
                            title={widget.title}
                            subtitle={widget.description}/>
                    ))}
            </ScrollView>
        )
    }
}

export default WidgetList