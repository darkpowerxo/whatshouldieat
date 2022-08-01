import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const [food, setFood] = useState('');
  const [source, setSource] = useState('');
  const [show, setShow] = useState(false);
  const showfood = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayFoods(data.meals));
  };
  const displayFoods = (foods) => {
    foods.map((food) => {
      setFood(food.strMeal);
      setSource(food.strSource);
      setShow(true);
    });
  };
  return (
    <div class={styles.container}>
      <Head>
        <title>what should i eat</title>
      </Head>
      <main class={styles.main}>
        <h1 class={styles.title}>
          Welcome to <a href="https://www.google.com/search?q=food">food</a>
        </h1>
        <button onClick={showfood} class="btn">
          show food
        </button>
        {show ? (
          <div class={styles.title}>
            <a
              href={source}
            >
              make {food}
            </a>
            <p></p>
            <a
              class="foodtype"
              href={'https://www.ubereats.com/search?q=' + food}
            >
              order {food}
            </a>
          </div>
        ) : null}
      </main>

      <footer class={styles.footer}>
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
