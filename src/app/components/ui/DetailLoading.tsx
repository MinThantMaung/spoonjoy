import Image from "next/image";
import React from "react";
import cooking from "../../../../public/cooking.gif";
import { Typewriter } from "react-simple-typewriter";

const DetailLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={cooking} alt="loading" width={80} height={80} />
      <h1 className="text-xl font-bold">
        <Typewriter
          words={["Preparing food..."]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default DetailLoading;
