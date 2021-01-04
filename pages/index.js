import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Worker from '../components/Worker/worker';
import { useState } from 'react';

export default function Home() {
  const [testScore, setScore] = useState(0);

  return (
    <div className={styles.container}>
      <h1>${testScore}</h1>
      <Worker currentScore={testScore} updateScore={setScore} productivityLevel={1} unlocked={true} name="Basic Worker" price={0} />
    </div>
  )
}
