import 'es6-symbol/implement';

const ESSAY_API_URL =
    'http://192.168.241.2:8085/api/exam/EID/essay';

const ESSAY_API_URL2 =
    'http://192.168.241.2:8085/api/essay';

let _singleton = Symbol();
export default class EssayQuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new EssayQuestionService(_singleton);
        return this[_singleton]
    }

    findAllEssayForExam(examId) {
        return fetch(
            ESSAY_API_URL
                .replace('EID', examId))
            .then(function (response) {
                return response.json();
            })
    }

    createEssay(examId,essay) {
        return fetch(ESSAY_API_URL
                .replace('EID', examId),
            {
                body: JSON.stringify(essay),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            { return response.json(); })
    }

    updateEssay(questionId, question) {
        return fetch(ESSAY_API_URL2+'/'+ questionId,
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

    deleteEssay(questionId) {
        return fetch(ESSAY_API_URL2 + '/' + questionId,
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