import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Class
// import App, { AppProps } from "next/app";

// class PBMApp extends App {
//   constructor(props: AppProps) {
//     super(props);
//   };

//   render(): JSX.Element {
//     return (
//       <>
//         <this.props.Component {...this.props.pageProps} />
//       </>
//     );
//   };
// };

// PBMApp.getInitialProps = async (appCtx) => {
//   return {
//     pageProps: {}
//   };
// };

// Func
import { AppProps, AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import withDarkMode from 'next-dark-mode'

const PBMApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Безымянная страница | НБМ</title>
        <meta name="description" content="Добро пожаловать в Народный Банк Мемов!" />
        <script src="https://vk.com/js/api/openapi.js?169" type="text/javascript"></script>
        <link rel="icon" href="/PBM_back_inv.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

PBMApp.getInitialProps = async (appCtx: AppContext): Promise<AppInitialProps> => {
  return {
    pageProps: {}
  };
};

export default withDarkMode(PBMApp, {
  cookieOptions: {
    path: "/"
  }
});
