/* eslint-disable react/no-unescaped-entities */
import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import Image from "next/image";
import Card from "./Card";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";
import { useRouter } from "next/router";

function HomeUi() {
  const { myState, setMyState } = useContext(MyContext);
  const router = useRouter();

  const topDestinations = [
    {
      title: "Agra",
      subtitle: "Home of the Taj Mahal",
    },
    {
      title: "Kerala",
      subtitle: "Beautiful Natural Landscapes",
    },
    {
      title: "Goa",
      subtitle: "Sun, Sand, and Sea",
    },
  ];
  return (
    <div>
      <br />
      <div className="flex justify-evenly w-full flex-wrap my-10">
        <div className="bg-primaryBlue max-w-[500px] p-8 h-full justify-evenly rounded-xl m-3 ml-0">
          <h2 className="text-5xl font-semibold">
            Discover Your Perfect Destination
          </h2>
          <br />
          <p>
            At TripWise, we believe that every traveler deserves a personalized
            travel experience. That's why we've created a unique feature that
            allows you to describe what you want to explore, and we'll use AI to
            suggest travel locations that match your interests. <br /> Whether
            you're looking for a romantic getaway, an adventure-filled trip, or
            a relaxing vacation, our website has everything you need to make
            your travel planning process seamless and stress-free.
          </p>
        </div>
        <div>
          <div className="flex">
            <Image src={img1} alt="img1" className="p-3" />
            <Image src={img2} alt="img2" className="p-3" />
          </div>
          <div className="flex ">
            <Image src={img3} alt="img3" className="p-3" />
            <Image src={img4} alt="img4" className="p-3" />
          </div>
        </div>
      </div>
      <br />
      <div className="my-10">
        <h2 className="text-5xl font-semibold text-black text-center m-10">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topDestinations.map((destination, index) => (
            // eslint-disable-next-line react/jsx-key
            <button
              onClick={() => {
                router.push(`/plan/${destination.title}`);
              }}
            >
              <Card
                key={index}
                imgUrl={`https://source.unsplash.com/1600x900/?${destination.title}`}
                title={destination.title}
                subtitle={destination.subtitle}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeUi;
