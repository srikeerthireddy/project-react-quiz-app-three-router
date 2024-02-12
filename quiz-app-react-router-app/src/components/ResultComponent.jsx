import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ResultComponent = () => {
    const [attempted, setAttempted] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    useEffect(() => {
        const quizScores = JSON.parse(localStorage.getItem('quizScores'));
            setAttempted(quizScores.attempted);
            setCorrect(quizScores.correct);
            setWrong(quizScores.wrong);
    }, []);

    const percentage = () => {
        return parseInt((correct / 15) * 100);
    };

    return (
        <>
            <div className="body3">
                <h1>Result</h1>
                <div className="containerResult">
                    <h3> {percentage() >50 ?"Congratulations You passed!" : "Practice more!"} </h3>
                    <h1 className='score'>Your score is {percentage()}%</h1>
                    <div className="results">
                        <p>Total number of questions: 15 </p>
                        <p>Number of attempted questions: {attempted} </p>
                        <p>Number of correct answers: {correct}</p>
                        <p>Number of wrong answers: {wrong}</p>
                    </div>
                </div>
                <div className="btns">
                    <Link to={"/quiz"}>
                        <button className='btn' id='play'>Play Again</button>
                    </Link>
                    <Link to={"/"}>
                        <button className='btn' id='back'>Back to home</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ResultComponent;