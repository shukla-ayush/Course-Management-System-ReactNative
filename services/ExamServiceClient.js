import 'es6-symbol/implement';

const LESSON_EXAM_API_URL =
    'http://192.168.241.2:8085/api/lesson/LID/exam';
const EXAM_API_URL =
    'http://192.168.241.2:8085/api/exam';

let _singleton = Symbol();
export default class ExamServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllExamsForLesson(lessonId) {
        return fetch(
            LESSON_EXAM_API_URL
                .replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    createExam(lessonId,exam) {
        return fetch(LESSON_EXAM_API_URL
                .replace('LID', lessonId),
            {
                body: JSON.stringify(exam),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            { return response.json(); })
    }

    deleteExam(examId) {
        return fetch(EXAM_API_URL + '/' + examId,
            {
                method: 'DELETE'
            })
            .then(function (response)
            { return response; })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ExamServiceClient(_singleton);
        return this[_singleton]
    }
}