





export class Question {
    constructor(data) {
        this.difficulty = data.difficulty
        this.category = data.category
        this.type = data.type
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answer = data.incorrect_answers

    }



    get questionTemplate() {
        return `
        <h2>Question</h2>
        <h3>${this.category}</h3>
        <p>${this.question}</p>`
    }

    get answerTemplate() {
        this.incorrect_answer.forEach(i => {
            return `
            <button onclick="" class="btn btn-danger">${this.incorrect_answer[i]}</button>
            `

        });
    }
}







