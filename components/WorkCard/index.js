import React from "react";
import Button from "../Button";


const WorkCard = ({ img, name, description, onClick, descriptionLarge, skills }) => {
  // console.log(img)
  // const imagePath = require("../../assets/redux cart 1.png").default
  return (
    <div 
    // <div style={{ fontFamily: 'Hind' }}
      className=" rounded-lg ph-2  first:ml-0 link bg-slate-800 hover:bg-black duration-300 p-3 "
     
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-white h-500 w-768"
        style={{ height: "250px" }}
      >
        <img
          style={{backgroundColor:"white"}}
          alt={name}
          className="h-full  w-full object-contain bg-slate-800 hover:scale-110 transition-all ease-out duration-300 overflow-hidden"
          src={img}
       

        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium text-slate-400 ">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 " font-sans font-semibold>
        {description ? description : "Description"}
      </h2>
      <h2 className="font-sans font-semibold">{descriptionLarge}
      </h2>
      <h2 className="text-purple-300">{skills}
        <div>
      <Button  onClick={onClick} type="primary">View project</Button>
        </div>
      </h2>
    </div>
  );
};

export default WorkCard;
