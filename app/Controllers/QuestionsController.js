import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionsService } from "../Services/QuestionsService.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuestions() {
    let template = ''
    let questions = appState.questions
    questions.forEach(q => {
        template += q.questionTemplate
        q.incorrect_answer.push(q.correct_answer)
        appState.comAnswers = q.incorrect_answer
        console.log(questions, appState.comAnswers, q.incorrect_answer, 'draw');
    })
    console.log(template, 'this template');
    setHTML('question', template)

}

function _drawAnswers() {
    let template = ''
    let ans = appState.questions
    ans.forEach(a => template += a.answerTemplate)
    console.log(ans, template, 'what');

    // comAnswers.forEach(a => template += a.answerTemplate)
    // console.log(template);
    setHTML('answers', template)
}






export class QuestionsController {
    constructor() {
        console.log('controller');
        this.getQuestions()
        _drawQuestions()
        appState.on('questions', _drawQuestions)
        appState.on('questions', _drawAnswers)
        _drawAnswers()

    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            console.error(error)
        }
        // let response = await axios.get('https://opentdb.com/api.php?amount=1')
        // console.log('axios', response.data.results);
        // appState.questions = response.data.results.map(ques => new Question(ques))
        // console.log('app', appState.questions);
    }


}
