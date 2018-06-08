import 'es6-symbol/implement';

const FILL_BLANK_API_URL =
    'http://192.168.241.2:8085/api/exam/EID/blanks';
const FILL_BLANK_API_URL2 =
    'http://192.168.241.2:8085/api/blanks';

let _singleton = Symbol();
export default class FillInTheBlankQuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new FillInTheBlankQuestionService(_singleton);
        return this[_singleton]
    }

    findAllFillInTheBlankQuestionForExam(examId) {
        return fetch(
            FILL_BLANK_API_URL
                .replace('EID', examId))
            .then(function (response) {
                return response.json();
            })
    }

    createFillInTheBlank(examId,blanks) {
        return fetch(FILL_BLANK_API_URL
                .replace('EID', examId),
            {
                body: JSON.stringify(blanks),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(function (response)
            { return response.json(); })
    }

    updateFillInTheBlank(questionId, question) {
        return fetch(FILL_BLANK_API_URL2+'/'+ questionId,
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

    // deleteFillInTheBlank(questionId) {
    //     return fetch(FILL_BLANK_API_URL2 + '/' + questionId,
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