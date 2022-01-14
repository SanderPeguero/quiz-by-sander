import firebase from "../firebase/firebaseApp"
import sampleSize from 'lodash/sampleSize'
import shuffle from 'lodash/shuffle'

let cachedQuestions

const transformToArray = (questions) => Object.keys(questions).map((key) => ({
   
    id: key,
    ...questions[key]
}))

const getAllQuestions = async () => {
 
    if (cachedQuestions) {
        return cachedQuestions
    }
    
    const database = firebase.database()
    const snapshot = await database.ref('/Banco').once( 'value' )
    const questions = transformToArray(snapshot.val())
 
    cachedQuestions = questions
 
    return questions
}

const getRandomQuestions = async () => {

    const questions = await getAllQuestions()
    const randomQuestions = sampleSize(questions, 40)

    return randomQuestions.map(question => ({
        ...question,
        choices: shuffle(question.choices)
    }))
}

export {
    getRandomQuestions
}