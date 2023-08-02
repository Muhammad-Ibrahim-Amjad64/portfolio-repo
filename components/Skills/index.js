import React from "react";


const Skills = ({ img, name, description, onClick }) => {
  // console.log(img)
  // const imagePath = require("../../assets/redux cart 1.png").default
    
    let style = "relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-white bg-cover   justify-center flex items-center  rounded-full p-2 bg-slate-600 "
    // if (name === "React Native") {
    //     style="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-slate-600 bg-cover   justify-center flex items-center  rounded-full p-2 "
        
    // }
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link justify-center flex items-center flex-col"
      onClick={onClick}
    >
      <div
              className={style}
              
              
        style={{ height: "50px ", width:"100px",borderRadius:" 50%" }}
      >
        <img
          alt={name}
        
          className=" h-full w-full object-contain hover:scale-110 transition-all ease-out duration-300   "
          src={img}
          // src="/images/expense.png"
          // color="#000000"

        ></img>
      </div>
      <h1 className="mt-5 text-sm opacity-50 font-medium">
        {name ? name : "Project Name"}
          </h1>
          
      {/* <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2> */}
    </div>
  );
};

export default Skills;
