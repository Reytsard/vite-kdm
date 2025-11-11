import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";
import pfp from "../../public/pfp.jpg";

function Landing() {
  return (
    <div>
      <div className="flex gap-2 flex-row-reverse flex-wrap items-center justify-center lg:flex-nowrap">
        <img
          src={pfp}
          alt="person with red coat"
          className="aspect-square min-w-[220px] min-h-[220px] max-w-[320px] object-fill border border-white rounded-full"
        />
        <div className="flex flex-col items-center justify-center lg:justify-start">
          <span className=" scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Protect Your Future with Smart Insurance & Financial Planning
          </span>
          <p>
            Tailored life insurance and investment solutions for families and
            professionals.
          </p>
        </div>
      </div>
      <Button
        asChild
        size={"lg"}
        variant={"outline"}
        className="w-full flex items-center justify-center max-w-[300px] m-auto mt-10"
      >
        <Link to={"/"}>Get a Personalized Quote</Link>
        {/* {create thing for the link} */}
      </Button>
      <div className="h-[2px] bg-red-400 mt-15 rounded-full"></div>
      <div className="mt-40">
        images here, maybe we can do 2 col to 1 col or 1 3 1 or maybe 3 1 or
        maybe 1 3
      </div>
    </div>
  );
}

export default Landing;
