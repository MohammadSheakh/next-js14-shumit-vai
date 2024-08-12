// functional component
// rfce
// "use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import Thumb from "@/public/images/dg.jpg";

function Mission() {
  return (
    <>
      <div className="mt-10">This is Mission Page</div>

      <Image placeholder="blur" src={Thumb} alt="thumb image" />
      {/* // quality={100} -> best quality */}

      <div className="mt-5">
        <Button />
      </div>
    </>
  );
}

export default Mission;
