import { useState, useEffect } from 'react'
import { getRandomQuestions } from '../services/QuestionsService'
import Question from './Question'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles( (theme ) => ({
    Button: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        width: 'inherit',
        backgroundColor: 'rgb(40, 42, 54)'
    },
    paper: {
        margin: `${theme.spacing(1)} px auto`,
        padding: theme.spacing(2),
        backgroundColor: '#4d5761'
    },
    result: {
        textAlign: 'center'
    },
    disabled: {}
}))

const Quiz = () => {

    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [QuestionVisible, setQuestionVisible] = useState(false)
    const [resultsVisible, setResultsVisible] = useState(false)
    const [score, setScore] = useState(0)
    const classes = useStyles()

    useEffect(() => {

        const fetchQuestions = async () => {

            const questions = await getRandomQuestions()
            setQuestions(questions)
            
        }

        fetchQuestions();

    }, [])

    const [usedQuestions, setUsedQuestions] = useState([])

    const selectAnswer = (choiceId) => {

        
        if (currentQuestion.correctAnswer === choiceId && (usedQuestions[currentQuestionIndex]) ){
            
            setScore(score - 1)
            
        }
        
        if (currentQuestion.correctAnswer === choiceId && !(usedQuestions[currentQuestionIndex]) ) {
            
            setScore(score + 1)
            setUsedQuestions(currentQuestionIndex)

        }

        if (currentQuestionIndex + 1 !== questions.length) {
            
            setQuestionVisible(true)

        }else {
            
            setResultsVisible(true)

        }

    }


    const currentQuestion = questions[currentQuestionIndex]

    const renderQuizResults = () => {

        if (resultsVisible) {

            const percentage = ((score / questions.length) * 100).toFixed(1)

            return (
                <div>
                    <Typography variant = "h8" component = "h1" className = {classes.result}>
                        All done! You got {score} out of {questions.length} ({percentage}%) correct!
                    </Typography>
                </div>
            )

        }

    }

    const nextQuestion = () => {
        
        if(questions.length !== currentQuestionIndex){

            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setQuestionVisible(false)

        }

    }

    const backQuestion = () => {
        
        if (currentQuestionIndex - 1 !== 0){

            setCurrentQuestionIndex(currentQuestionIndex - 1)
            setQuestionVisible(false)
        
        }

    }
    const renderQuestionButtons = () => {
       
        return (
            <div className = {classes.Button}>    
                <Button
                    variant = "outlined"
                    onClick = {backQuestion}
                    >
                    Back Question
                </Button>
                
                <Button
                    variant = "outlined"
                    onClick = {nextQuestion}
                    >
                    Next Question
                </Button>
            </div>
        )

    }

    return (

        <Paper className={classes.paper}>
            <Question buttons={renderQuestionButtons} data={currentQuestion} selectAnswer={selectAnswer} currentQuestionIndex={currentQuestionIndex + 1} />
            {renderQuizResults()}
        </Paper>

    )
}

export default Quiz