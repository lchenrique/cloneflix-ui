import Head from 'next/head';
import { NextPage } from 'next';
import styles from '../styles/pages/Home/styles.module.scss'
import { useState } from 'react';


const Home: NextPage = () => {
  const [focus, setFocus] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false)
  const [value, setValue] = useState('')


  return (
    <div className={styles.container} onClick={() => !mouseEnter && value.length < 1 && setFocus(false)} >
      <Head>
        <title>CloneFlix</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <img src="/cloneflixlogo.svg" alt="CloneFlix" />
        </header>
      </div>

      <div className={styles.content}>


        <div className={styles.heroCard}>
          <div>
            <div className={styles.maskImage} />
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/920ff518-b8d4-4669-a652-7faa8b14f960/BR-pt-20210222-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
          </div>
        </div>
        <div className={styles.callToAction}>
          <div>
            <h1 >Filmes, séries e muito mais. Sem limites.</h1>
            <h3>Assista onde quiser. Cancele quando quiser.      </h3>
            <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
          </div>


          <div className={styles.emailForm}>
            <div
              onMouseEnter={() => setMouseEnter(true)}
              onMouseLeave={() => setMouseEnter(false)}

              onFocus={(e) => setFocus(true)}
              className={focus ? styles.emailInputFocused : styles.emailInput}
            >
              <label htmlFor="email">E-mail</label>
              <input type='text' id='email' onChange={(v) => setValue(v.target.value)} defaultValue={value} />
            </div>
            <button type='button'>Vamos lá</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
