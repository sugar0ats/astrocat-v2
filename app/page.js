import Image from 'next/image'
import styles from './page.module.css'
import TopicList from './topiclist';
import React from 'react';
import Link from 'next/link';
import './globals.css';
import RootLayout from './/layout';

//const topics = ["intro to vex", "aluminum vs. steel", "parts galore","what goes on an axle?"];

function Home() {
  return (
      <main className={styles.main}>

        <div className={styles.center}>
          <h1>Astrocat Teaches VEX </h1>
        </div>
        
        <p className="content">
          "let's learn to build robots!" - astrocat
        </p>

        <TopicList/>
      </main>
  );
}

export default Home;
