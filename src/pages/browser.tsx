import Head from 'next/head';
import { NextPage } from 'next';
import styles from '../styles/pages/Browser/styles.module.scss'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.18,
      duration: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Browser: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CloneFlix</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
        <img src="/cloneflixlogo.svg" alt="CloneFlix" />
      </header>

      <div className={styles.content}>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={container}>
          Quem está assistindo?
          </motion.h1>


        <motion.ul
          className={styles.imgsUsers}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[
            { name: 'Malu', img: "/Netflix-avatar.png" },
            { name: 'Evelyn', img: "/Netflix-avatar2.png" },
            { name: 'Diogo', img: "/Netflix-avatar3.png" },
            { name: 'Melissa', img: "/Netflix-avatar2.png" },
            { name: 'Visitante', img: "/Netflix-avatar3.png" },
          ].map((p, index) => (
            <motion.li
              key={index}
              className={styles.borderLi}
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.05 },
              }}
              whileTap={{ scale: 1 }}
            >
              <div className='m-6'>
                <div className={styles.borderHover}>
                  <img src={p.img} alt="" />
                </div>
                <span>{p.name}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          type='button'
          className={styles.managerButtom}
          variants={item}
          whileTap={{ scale: 1 }}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.05 }
          }}
        ><span>GERENCIAR PERFIS</span></motion.button>
      </div>

    </div>
  );
};

export default Browser;
