// custom font step 1 download the ttf file and place it in the 


import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import '../styles/fonts.css'; 


import styles from  "./global.module.css"

const App = ({ Component, pageProps }) => {
  return (
    <div className={styles.body}>

      {/* <div className={styles.ball}> */}
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
      {/* </div> */}
    </div>
  );
};

export default App;
