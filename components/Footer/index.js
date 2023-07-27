import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  const redirectToExternalLink = () => {
    const externalUrl = 'https://drive.google.com/file/d/17Mkhq_4MrR1CuZsDr7DfMRPOjrZYQqsE/view?usp=sharing';
    window.location.href = externalUrl;
  };

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-4xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-4xl text-bold">
              TOGETHER
            </h1>
            <Button onClick={() => window.open("contact: +923122990606")} type="primary">Call me</Button>
            <Button  onClick={() => window.open("mailto: mibrahimmkhann@gmail.com")} type="primary">Email me </Button>
            <div className="mt-10">
              {/* <Socials  /> */}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Developed By {" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Muhammad Ibrahim Khan</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
