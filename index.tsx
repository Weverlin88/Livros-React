
import * as React from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />
      

      <main>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

const styles = {
  main: {
    marginTop: '50px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
  },
};

export default Home;
