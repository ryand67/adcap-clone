import styles from '../styles/Home.module.css'
import Worker from '../components/Worker/worker';
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  //Total score
  const [testScore, setScore] = useState(0);

  return (
    
    <div className={styles.container}>
      <Head>
        <title>AdCap Clone</title>
      </Head>
      {/* display score */}
      <h1>${testScore.toFixed(2)}</h1>
      {/* Worker components */}
      <Worker currentScore={testScore} updateScore={setScore} productivityLevel={1} unlocked={true} name="Basic Worker" price={0} automatedProp={false} />
    </div>
  )
}
