import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const [food, setFood] = useState('');
  const showfood = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayFoods(data.meals));
  };
  const displayFoods = (foods) => {
    foods.map((food) => {
      setFood(food.strArea);
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">food</a>
          <p>&nbsp;</p>
          <button onClick={showfood} class="btn">
            show food
          </button>
          <p id="foodtype">{food}</p>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://theproject1.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by&nbsp;<b>Sam</b>&nbsp;⭐
        </a>
      </footer>
    </div>
  );
}
