import { NextPage } from 'next'
import Head from 'next/head'
import { NavLayout } from '../components/NavLayout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная | НБМ</title>
        <meta name="description" content="Добро пожаловать в Народный Банк Мемов!" />
      </Head>
      <NavLayout>
        
      </NavLayout>
    </>
  )
}

export default Home;
