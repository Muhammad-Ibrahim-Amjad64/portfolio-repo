import React from "react";


const WorkCard = ({ img, name, description, onClick }) => {
  // console.log(img)
  // const imagePath = require("../../assets/redux cart 1.png").default
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link bg-slate-800"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "250px" }}
      >
        <img
          alt={name}
          className=" bg-slate-200 h-full w-full object-contain bg-slate-800 hover:scale-110 transition-all ease-out duration-300 "
          src={img}
          // src="/images/expense.png"
          // color="#000000"

        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium text-slate-400">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <p>lorem ljdlksjdljwe dwekldjwelkdjnwed edwkldjwelkdn asldkjsd adlkejdklsnd aslkdjeld asldnednalkdmad akldjendlkxassdnakld akldnasl xmaslda
      </p>
    </div>
  );
};

export default WorkCard;
