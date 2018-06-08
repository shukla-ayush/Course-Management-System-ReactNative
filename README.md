This is the client side repository for Course Management System application (Mobile application version). 

This part of the application has been implemneted using React Native. The features provided in this part of the application are to enable faculty in creating, updating deleting exams, assignments and questions. Certain features on press are to be performed twice, which seems to be a problem because of usnig ScrollView.

The questions that can be added to the exam include Essay Question, Multiple choice question, True False Question and Fill in the blanks question. 

Question descriptions-
 
The true and false question and essay question are straight forward, but to draft choices in multiple choice question, the options need to be entered separated by commas something like - "Option 1, Option 2, Option 3". Whereas for Fill in the blank entering any text inside the question text field inside square brackets considers itself as a blank variable. For example -> This is [React Native] will store "React Native" as variable and render as [     ]   

The server side of the aplication is present in the following repository, which is a spring application - 

https://github.com/shukla-ayush/Course-Management-System-Spring-Boot  (exam-asssignments-widgets branch).
