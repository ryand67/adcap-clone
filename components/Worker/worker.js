import style from './worker.module.css';
import getProductivity from './workerUtil/getProductivity';
import getWorkTime from './workerUtil/getWorkTime';
import { useState } from 'react';

const Worker = ({ updateScore, currentScore, name, unlocked, automatedProp, automatePrice }) => {

    //States
    //Productivity/score gained per action
    const [productivity, setProductivity] = useState(getProductivity(name));
    //Status of whether or not the worker is working or idle
    const [workStatus, setWorkStatus] = useState(false);
    //Flag for whether the worker is automated.
    const [automated, setAutomated] = useState(automatedProp || false);
    //Upgrade level
    const [upgradeLevel, setUpgradeLevel] = useState(1);

    //Works and updates score
    const work = () => {
        setWorkStatus(true);
        setTimeout(() => {
            setWorkStatus(false);
        }, getWorkTime(name))
        updateScore(currentScore + productivity);
    }
    
    //Purchases automation, broken into two functions because the states weren't updating correctly.
    const automatePurchase = () => {
        setAutomated(true);
        
        updateScore(currentScore - automatePrice);
        
        automate();
    }
    
    //Sets the interval 
    const automate = () => {
        const interval = setInterval(() => {
            updateScore(currentScore + productivity)
        }, getWorkTime(name))
    }

    //Unlocks/buys a worker
    const buyWorker = () => {

    }

    const upgradeWorker = () => {
        setUpgradeLevel(upgradeLevel + 1);
        setProductivity(productivity + (upgradeLevel * .1))
        updateScore(currentScore - 1);
    }


    return (
        <div className={style.worker}>
            {/* Name */}
            <h2>{name}</h2>
            {/* Upgrade Level */}
            {/* For some reason it needs the -1 to work correctly */}
            <h2>Upgrades: {upgradeLevel - 1}</h2>
            {/* Checks status and if they're working displays that the worker is working or idle */}
            <div className={style.statusDiv}>
                <h2 className={style.status}>{workStatus ? 'Working' : 'Idle'}</h2>
            </div>
            {/* Checks if the worker is unlocked, and whether it's automated and displays the appropriate buttons */}
            {unlocked ? (automated ? <h2>Automated</h2> : (workStatus ? <button>Click to Work</button> : <button onClick={work}>Click to Work</button>)) : <button onClick={buyWorker}>Purchase Worker</button>}
            {/* Upgrade button */}
            <button onClick={upgradeWorker}>Upgrade</button>
            {automated ? <></> : <button onClick={automatePurchase}>Automate (${automatePrice})</button>}
        </div>
    )
}

export default Worker;