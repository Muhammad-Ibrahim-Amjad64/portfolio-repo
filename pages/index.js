import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
// import Button from "../components/Button";
// Local Data
import data from "../data/portfolio.json";
import Skills from "../components/Skills";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const redirectToExternalLink = () => {
    const externalUrl =
      "https://drive.google.com/file/d/17Mkhq_4MrR1CuZsDr7DfMRPOjrZYQqsE/view?usp=sharing";
    window.location.href = externalUrl;
  };

  return (
    <div
      style={{ fontFamily: "Russo One" }}
      className={`relative ${data.showCursor && "cursor-none"}`}
    >
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>
      {/* 
      <div className="gradient-circle:'radial-gradient(circle, #3trffs, #3trffd)'"></div>
      <div className="gradient-circle-bottom:'radial-gradient(ellipse at bottom, #3trffs, #3trffd)'"></div> */}

      <div className="gradient-circle "></div>
      <div className="gradient-circle-bottom "></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5"
            // style={{alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"}}
          >
            {/* <h1 className="text-8xl bg-slate-800" >Not finalized....</h1> */}
            <h1
              ref={textOne}
              className="text-6xl tablet:text-6xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2  text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-6xl tablet:text-6xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2  text-bold w-full laptop:w-4/5 text-slate-400"
            >
              {data.headerTaglineTwo}
            </h1>
            {/* <h1 
              ref={textThree}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1> */}
            <h1
              ref={textFour}
              className="text-lg tablet:text-lg laptop:text-lg laptopl:text-lg p-1 tablet:p-2 text-bold w-full laptop:w-4/5 text-white font-sans font-semibold"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="text-slate-400 mt-2 laptop:mt-5 mb-500 font-bold font-sans "  />

          {/* <Button onClick={redirectToExternalLink} type="primary">Download Resume</Button> */}
          {/* <Button classes="bg-black color-white text-slate-400 border border-slate-400 rounded-1 " onClick={redirectToExternalLink} type="primary">My Work</Button> */}

          {/* <div  style={{
            background:
                "linear-gradient(180deg, rgba(3,11,35,1) 28%, rgba(25, 31, 38, 1) 100%)",flex:1
            }}> */}
          <div>
          <div
            
            className="mt-10 laptop:mt-40 p-2 laptop:p-0"
            ref={aboutRef}
            >
            <h1 className="tablet:m-10 text-6xl text-bold">Initiation</h1>
            <h1 className="tablet:m-10 text-4xl text-bold">
              About <span className="text-slate-400"> me</span>
            </h1>
            <p className="tablet:m-10 mt-2 text-lg laptop:text-lg w-full laptop:w-3/5 bg-slate-800 p-5 rounded font-sans font-semibold">
              {data.aboutpara}
            </p>
          </div>
          <div className="mt-20 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="tablet:m-10 text-6xl text-bold">
              My <span className="text-slate-400"> Services</span>
            </h1>
            <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {data.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>

          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
         
          <h1 className="text-6xl text-bold" >
            
            My <span className="text-slate-400"> Work</span>
          </h1>

          <div className="mt-10 m-30 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                descriptionLarge={project.description2}
                skills={project.skills}
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="text-6xl text-bold">
            {" "}
            My <span className="text-slate-400"> Skills</span>
          </div>

          <div className="mt-5 laptop:mt-10 grid grid-cols-3 flex items-center justify-center tablet:grid-cols-5 gap-4">
            {data.skills.map((project) => (
              <Skills
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                // description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        < Footer />
      </div>

        {/* </div> */}
      </div>
      {/* naya div upr */}
    </div>
  );
}

// const ali = ()=>{}
