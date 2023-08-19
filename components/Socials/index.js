import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const redirectToExternalLink = () => {
    const externalUrl =
      "https://drive.google.com/file/d/16LIS1ESZsF8lKS7IX4DPR7R6y9h85x7g/view?usp=sharing";
    window.location.href = externalUrl;
  };
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link
    
      `}>
      {yourData.socials.map((social, index) => (
        <>
           {social.title==="Github" &&  <Button onClick={redirectToExternalLink} type="primary">Download Resume</Button>}
        <Button classes="text-slate-300 bg-black" key={index} onClick={() => window.open(social.link)}>
          {social.title}
          </Button>
         
      
     
        </>
      ))}
    </div>
  );
};

export default Socials;
