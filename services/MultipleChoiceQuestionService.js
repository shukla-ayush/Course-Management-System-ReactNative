import 'es6-symbol/implement';

const MULTI_CHOICE_API_URL =
    'http://192.168.241.2:8085/api/exam/EID/choice';

const MULTI_CHOICE_API_URL2 =
    'http://192.168.241.2:8085/api/choice';

let _singleton = Symbol();
export default class MultipleChoiceQuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new MultipleChoiceQuestionService(_singleton);
        return this[_singleton]
    }

    findAllMultiChoiceForExam(examId) {
        return fetch(
            MULTI_CHOICE_API_URL
                .replace('EID', examId))
            .then(function (response) {
                return response.json();
            })
    }

    createMultiChoice(examId,choice) {
        return fetch(MULTI_CHOICE_API_URL
                .replace('EID', examId),
            {
                body: JSON.stringify(choice),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            { return response.json(); })
    }

    updateMultiChoice(questionId, question) {
        return fetch(MULTI_CHOICE_API_URL2+'/'+ questionId,
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

    // deleteMultiChoice(questionId) {
    //     return fetch(MULTI_CHOICE_API_URL2 + '/' + questionId,
    //         {
    //             method: 'DELETE'
    //         })
    //         .then(function (response)
    //         {
    //             return response;
    //         })
    //         .catch(function(error) {
    //             console.log(error.message);
    //         })
    // }

}