import style from './worker.module.css';
import getProductivity from './workerUtil/getProductivity';
import { useState } from 'react';

const Worker = ({ updateScore, currentScore, productivityLevel, name, unlocked, automatedProp }) => {

    //States
    //Productivity/score gained per action
    const [productivity, setProductivity] = useState(getProductivity(name));
    //Status of whether or not the worker is working or idle
    const [workStatus, setWorkStatus] = useState(false);
    //Flag for whether the worker is automated.
    const [automated, setAutomated] = useState(automatedProp || false);

    //Works and updates score
    const work = () => {
        updateScore(currentScore + productivity);
    }

    //Unlocks/buys a worker
    const buyWorker = () => {

    }

    //Automates a worker
    const automate = () => {
        setAutomated(true);
    }

    return (
        <div className={style.worker}>
            {/* Name */}
            <h2>{name}</h2>
            {/* Checks status and if they're working displays that the worker is working or idle */}
            <h2 className={style.status}>{workStatus ? 'Working' : 'Idle'}</h2>
            {/* Checks if the worker is unlocked, and whether it's automated and displays the appropriate buttons */}
            {unlocked ? (automated ? <h2>Automated</h2> : <button onClick={work}>Click to Work</button>) : <button onClick={buyWorker}>Purchase Worker</button>}
            {/* Upgrade button */}
            <button>Upgrade</button>
            {automated ? <></> : <button onClick={automate}>Automate</button>}
        </div>
    )
}

export default Worker;