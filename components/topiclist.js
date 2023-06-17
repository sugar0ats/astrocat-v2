//import React from "react";
import styles from '../app/page.module.css'
import Link from 'next/link';



function TopicList() {

    const topics = [["intro to vex", "/introvex"], 
                    ["aluminum vs. steel", "/alumvssteel"], 
                    ["parts galore", "/parts"],
                    ["what goes on an axle?", "/axle"],
                    ["gear ratios", "/gearratios"],
                    ["programming 101", "/programming101"]];

    return (
      <>
        <ul className={styles.topiclist}>
          {topics.map((topic) => (
              <li className={styles.topic} id={topic}>
                <Link href={topic[1]}>
                     <button className={styles.topicbutton}>
                        {topic[0]}
                    </button>
                    
                </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }

  export default TopicList;