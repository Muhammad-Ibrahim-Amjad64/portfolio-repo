// custom font step 1 download the ttf file and place it in the 


import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import '../styles/fonts.css'; 
import { useEffect } from "react";


import styles from  "./global.module.css"

const App = ({ Component, pageProps }) => {


//   useEffect(() => {
//    const  observer  = new IntersectionObserver((enteries) => {
//     enteries.forEach((entry)=> {
//       console.log(entry)
//       if (entry.isIntersecting) {
//         entry.target.classList('show')
        
//       }
//     })
    
//     // slider Animation step 2 
    
    
//     // slider step 3 add two classes in the global styles sheet .show .hidden
// });
//   }, []);

//   // slider Animation step 1   add this function 
//   // const observer = new IntersectionObserver()
//   const hiddenElements = document.querySelectorAll('.hidden') 
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
