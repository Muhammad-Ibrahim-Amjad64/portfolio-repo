import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link
    
      `}>
      {yourData.socials.map((social, index) => (
        <>
           {social.title==="Github" &&  <Button onClick={()=>{}} type="primary">Download Resume</Button>}
        <Button classes="text-slate-300 bg-black" key={index} onClick={() => window.open(social.link)}>
          {social.title}
          </Button>
         
      
     
        </>
      ))}
    </div>
  );
};

export default Socials;
