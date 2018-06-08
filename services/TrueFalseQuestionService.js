import 'es6-symbol/implement';

const TRUE_FALSE_API_URL =
    'http://192.168.241.2:8085/api/exam/EID/truefalse';

const TRUE_FALSE_API_URL2 =
    'http://192.168.241.2:8085/api/truefalse';

let _singleton = Symbol();
export default class TrueFalseQuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new TrueFalseQuestionService(_singleton);
        return this[_singleton]
    }

    findAllTrueFalseForExam(examId) {
        return fetch(
            TRUE_FALSE_API_URL
                .replace('EID', examId))
            .then(function (response) {
                return response.json();
            })
    }

    createTrueFalse(examId,trueFalse) {
        return fetch(TRUE_FALSE_API_URL
                .replace('EID', examId),
            {
                body: JSON.stringify(trueFalse),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            { return response.json(); })
    }

    updateTrueFalse(questionId, question) {
        console.log(questionId)
        return fetch(TRUE_FALSE_API_URL2+'/'+ questionId,
            {
                body: JSON.stringify(question),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
            .then(function (response)
            {
                return response.json();
            })
            .catch(function(error) {
                console.log(error.message);
            })
    }

    deleteTrueFalse(questionId) {
        return fetch(TRUE_FALSE_API_URL2 + '/' + questionId,
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