import {useState} from 'react';
import questions from '../resources/quizQuestion.json';
import {Link} from 'react-router-dom';

const QuizComponent=()=>{
    const [current,setCurrent]=useState(0);
    const [attempted, setAttempted] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    const handlePrev = () => {
        setCurrent(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setCurrent(prevIndex => Math.min(14, prevIndex + 1));
    };

    const handleQuit = () => {
        alert("Are you sure you want to exit?");
        setCurrent(0);
        setAttempted(0);
        setCorrect(0);
        setWrong(0);
        
       
    };
    const handleAnswer = (selectedOption) => {
        const currentQuestion = questions[current];
        let attemptedCount = attempted;
        let correctCount = correct;
        let wrongCount = wrong;
        
        if (selectedOption === currentQuestion.answer) {
            alert("Correct answer!");
            correctCount += 1;
        } else {
            alert("Wrong answer!");
            wrongCount += 1;
        }
        
        attemptedCount += 1;
    
        setAttempted(attemptedCount);
        setCorrect(correctCount);
        setWrong(wrongCount);
    
        
        localStorage.setItem('quizScores', JSON.stringify({ attempted: attemptedCount, correct: correctCount, wrong: wrongCount }));
        
        handleNext();
    };
    const { question, optionA, optionB, optionC, optionD } = questions[current];
    return (
        <>
            <div className="body2">
                <div className="containerquiz">
                    <h2>Question</h2>
                    <p className='Qnum'>{current + 1} of 15</p>
                    <h4>{question}</h4>
                    <div className="options">
                        <button onClick={() => handleAnswer(optionA)}>{optionA}</button>
                        <button onClick={() => handleAnswer(optionB)}>{optionB}</button>
                        <button onClick={() => handleAnswer(optionC)}>{optionC}</button>
                        <button onClick={() => handleAnswer(optionD)}>{optionD}</button>
                    </div>
                    <div className="navButtons">
                        <button id='prev' onClick={handlePrev}>Previous</button>
                        <button id='next' onClick={handleNext}>Next</button>
                        <button id='quit' onClick={handleQuit}>Quit</button>
                        <Link to={"/result"}><button id='finish'>Finish</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizComponent;
    

