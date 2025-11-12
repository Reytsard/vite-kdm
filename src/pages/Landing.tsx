import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

function Landing() {
  return (
    <div>
      <div className="flex gap-2 flex-row-reverse flex-wrap items-center justify-center lg:flex-nowrap">
        <img
          src={"pfp.jpg"}
          alt="person with red coat"
          className="aspect-square min-w-[220px] min-h-[220px] max-w-[320px] object-fill border border-white rounded-full"
        />
        <div className="flex flex-col items-center justify-center lg:justify-start px-13">
          <span className=" scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Protect Your Future with Smart Insurance & Financial Planning
          </span>
          <p className="text-center">
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
      <Carousel
        opts={{
          align: "center",
          loop: true,
          active: true,
        }}
        className="mt-20 mb-10 w-full max-h-[600px]"
      >
        <CarouselContent>
          <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 relative">
            <img
              src="aiaLogo.webp"
              alt="aia logo"
              className="object-cover aspect-4/3"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 relative">
            <img
              src="bg_photo.jpg"
              alt="aia logo"
              className="object-cover aspect-4/3"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 relative">
            <img
              src="group_photo.jpg"
              alt="aia logo"
              className="object-cover aspect-4/3"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 relative">
            <img
              src="bop_photo.jpg"
              alt="aia logo"
              className="object-cover aspect-4/3"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 relative">
            <img
              src="AiaBaguio.jpg"
              alt="aia logo"
              className="object-cover aspect-4/3"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="h-[2px] bg-red-400 mt-15 rounded-full mb-[20px]"></div>
    </div>
  );
}

export default Landing;
