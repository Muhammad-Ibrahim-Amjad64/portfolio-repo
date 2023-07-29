import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

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
