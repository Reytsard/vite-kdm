import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

function Landing() {
  return (
    <div>
      <div className="flex gap-2 flex-row-reverse flex-wrap items-center justify-center lg:flex-nowrap">
        <div className="min-w-[220px] min-h-[300px]">image</div>
        <div>
          <span className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
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

      <div className="mt-40">
        images here, maybe we can do 2 col to 1 col or 1 3 1 or maybe 3 1 or
        maybe 1 3
      </div>
    </div>
  );
}

export default Landing;
