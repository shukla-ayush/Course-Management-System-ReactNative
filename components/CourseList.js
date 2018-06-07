import React, {Component} from 'react'
import {View, Alert, ScrollView} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

class CourseList extends Component {
  static navigationOptions = {title: 'Courses'}
  constructor(props) {
    super(props)
    fetch('http://192.168.241.2:8085/api/course')
      .then(response => (response.json()))
      .then(courses => {
        this.setState({courses: courses})
      })
        .catch(function(error) {
            console.log(error.message);
        })
    this.state = {
      courses: []
    }
  }
  render() {
    return(
      <ScrollView style={{padding: 15}}>
        {this.state.courses.map((course, index) => (
          <ListItem
            onPress={() => this.props.
              navigation.navigate("ModuleList",
              {courseId: course.id})}
            title={course.title}
            key={index}/>
        ))}
      </ScrollView>
    )
  }
}
export default CourseList