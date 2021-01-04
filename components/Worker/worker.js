import style from './worker.module.css';
import getProductivity from './workerUtil/getProductivity';
import { useState } from 'react';

const Worker = ({ updateScore, currentScore, productivityLevel, name, unlocked }) => {
    const [productivity, setProductivity] = useState(getProductivity(name));

    const work = () => {
        updateScore(currentScore + productivity);
    }

    const buyWorker = () => {

    }

    return (
        <div className={style.worker}>
            <h2>{name}</h2>
            {unlocked ? <button onClick={work}>Click to Work</button> : <button onClick={buyWorker}>Purchase Worker</button>}
            <button>Upgrade</button>
            <button>Automate</button>
        </div>
    )
}

export default Worker;