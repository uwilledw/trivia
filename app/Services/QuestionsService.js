import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";




class QuestionsService {


    async getQuestions() {
        let response = await axios.get('https://opentdb.com/api.php?amount=1')
        console.log('axios', response.data.results);
        appState.questions = response.data.results.map(ques => new Question(ques))
        console.log('app', appState.questions);
    }


}

export const questionsService = new QuestionsService()