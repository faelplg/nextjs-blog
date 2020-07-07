import '../styles/global.css';

const App = ({Component, pageProps}) => {
  console.log('DEBUG: on [App].() - Component', Component);
  console.log('pageProps', pageProps);
  return <Component {...pageProps} />;
};

export default App;
