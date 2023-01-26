import React, { useState } from 'react';
import Question from './quiz.json'

let st = Question.questions
const Quiz = () => {
    const [mainState, setMainState] = useState(st)
    const [nextQuestion, setNextQuestion] = useState(0)
    const [tr, setTr] = useState(false)


    const returnFunc = () => {
        setTr(false)
        st = Question.questions
        setNextQuestion(0)
    }
    const nextQuest = (e) => {
        let target = e.target.value
        console.log(target)
        
        if(target === 'single') {
            st = Question.questions[1]
            setNextQuestion(nextQuestion + 1)
        } 
        if(target === "married") {
            st = Question.questions[2]
            setNextQuestion(nextQuestion + 2)
        } 
        if(target === "More than a year") {
            st = Question.questions[3]
            setNextQuestion(3)
        } 
        if(target === "Yes" || target === "No" || target === "Less than a year"){
            setTr(true)
            console.log('test')
        }
    }
    return (
        <div className="container-md">
            <div className="quiz_container">
                {
                    tr ? (
                    <>
                        <h1 className='quiz_question'>
                            Thanks for answer! {nextQuestion}
                        </h1>
                        <button onClick={returnFunc} class="btn btn-outline-secondary">Return</button>
                    </>) : (
                        <>
                        <div className='quiz_question'>{mainState[nextQuestion].question}</div>
                        <div className='quiz_answers'>
                            {mainState[nextQuestion].answers.map((answ) => (
                                <button onClick={(e) => nextQuest(e, answ)}  key={answ} value={answ} type="button" class="btn btn-outline-secondary">{answ}</button>
                            ))}
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;