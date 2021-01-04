import style from './worker.module.css';

const Worker = ({ updateScore, currentScore }) => {
    const work = () => {
        updateScore(currentScore + 1);
    }

    return (
        <div className={style.worker}>
            <h2>Basic Worker</h2>
            <button onClick={work}>Click to Work</button>
        </div>
    )
}

export default Worker;