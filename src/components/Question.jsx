import { makeStyles } from "@material-ui/core/styles"
import { useState, useEffect } from 'react'
import { Avatar, Grid, Paper, ButtonGroup, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { CodeBlock, dracula } from "react-code-blocks"

const useStyles = makeStyles( (theme ) => ({

    questionRoot: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        //margin: `${theme.spacing(1)} px auto`,
       // padding: theme.spacing(2),
        backgroundColor: '#4d5761'
    },
    choices: {
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'left',
    },
    explanation: {
        flexDirection: 'column',
        //margin: `${theme.spacing(1)} px auto`,
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        background: 'rgb(40, 42, 54)'
    },
    correctAnswer: {
        background: 'linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99))'

    },
    wrongAnswer: {
        background: 'linear-gradient(to right, rgb(255, 81, 47), rgb(221, 36, 118))'

    },
    Typography: {
        margin: '0.5rem'
    },
    root: {
        '&$disabled': {
            color: 'white',
        },
        justifyContent: 'left'
    },
    disabled: {}

}))

const Question = ({ buttons, data, selectAnswer, currentQuestionIndex }) => {
    
    const [selectedChoice, setSelectedChoice] = useState()
    const [disableChoices, setDisableChoices] = useState(false)
    const classes = useStyles();

    useEffect( () => {

        setSelectedChoice(null)
        setDisableChoices(false)

    }, [data])

    const onChoiceSelect = (choice) => {

        setSelectedChoice(choice.id)
        selectAnswer(choice.id)
        setDisableChoices(true)

    }

    const AlfaIndex = (index) => {

        if (index === 0){
            
            return 'A)'

        }else if(index === 1){
            
            return 'B)'

        }else if(index === 2){

            return 'C)'

        }else if(index === 3){

            return 'D)'

        }

    }

    const renderChoice = (choice, index) => {

        let className = '';
        
        if (selectedChoice === choice.id) {
        
            className = choice.id === data.correctAnswer ? classes.correctAnswer : classes.wrongAnswer

        }

        if (selectedChoice && choice.id === data.correctAnswer) {

            className = classes.correctAnswer
        
        }

        return (

            <Button
                onClick = { () => onChoiceSelect(choice)}
                className = { className }
                classes = {{
                    root: classes.root,
                    disabled: classes.disabled,
                }}
                disabled = { disableChoices }
                key = { choice.id }
            >
            
                {AlfaIndex(index)} {choice.text}
            
            </Button>
        )
    }

    const renderExplanation = () => {

        if (!selectedChoice || !data.explanation) {
            return null;
        }

        return (
            <Grid item xs = {12} className = {classes.explanation}>
                {data.explanation}
            </Grid>
        )

    }

    if (!data) {
    
        return null
    
    }

    return (

        <Grid container spacing={2}>
            <Grid item >
                <Avatar>{currentQuestionIndex}</Avatar>
            </Grid>
            <Grid item xs>
                <Typography className={classes.Typography}>{data.question}</Typography>
                {/* {data.code && <CodeBlock 
                    theme = {dracula}
                    text = {data.code}
                    language = "js"
                    showLineNumbers = {false}
                />} */}
            </Grid>
            <Grid item xs = {12}>
                <ButtonGroup
                    orientation = "vertical"
                    className = {classes.choices}
                >
                    {data.choices.map(( choice, index ) => renderChoice(choice, index))}
                </ButtonGroup>
            </Grid>
            {renderExplanation()}
            {buttons()}
        </Grid>

    )

}

export default Question