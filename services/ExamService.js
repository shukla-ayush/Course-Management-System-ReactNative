import 'es6-symbol/implement';

const EXAM_FOR_LESSON_URL =
    'http://192.168.241.2:8085/api/lesson/LID/exam';
const EXAM_URL =
    'http://192.168.241.2:8085/api/exam';

let _singleton = Symbol();
export default class ExamService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ExamService(_singleton);
        return this[_singleton]
    }

    createExam(lessonId,exam) {
        return fetch(EXAM_FOR_LESSON_URL
                .replace('LID', lessonId),
            {
                body: JSON.stringify(exam),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            {
                return response;
            })
            .catch(function(error) {
                console.log(error.message);
            })
    }

    deleteExam(examId) {
        return fetch(EXAM_URL + '/' + examId,
            {
                method: 'DELETE'
            })
            .then(function (response)
            {
                return response;
            })
            .catch(function(error) {
                console.log(error.message);
            })
    }


}