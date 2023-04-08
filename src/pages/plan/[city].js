import React from "react";
import { useRouter } from "next/router";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

function plan() {
  const router = useRouter();
  const { city } = router.query;
  // const [imgUrl, setImgUrl] = useState("");
  
  const { myState } = useContext(MyContext);
  console.log(myState);
  
  const [plan, setPlan] = useState([]);
  
  useEffect(() => {
    if (!router.isReady) return;
    // setImgUrl(`https://source.unsplash.com/1600x900/?${city}`);
    fetch(`/api/poi?city=${city}&days=5`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { schedule: plan } = data;
        setPlan(plan);
      });
  }, [router.isReady]);
  return (
    <div className="flex justift-center items-center">
      <div className="bg-white  w-full ">
        <h1 className="text-black text-5xl font-bold text-center p-6">
          {city}
        </h1>
        <div className="p-10">
          {plan.map((day) => {
            return <p className="text-black bg-white">{day}</p>;
          })}
        </div>
        <div>
          {/* <Image src={imgUrl} width={500} height={500} /> */}
        </div>
      </div>
    </div>
  );
}

export default plan;
