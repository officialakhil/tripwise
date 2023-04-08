import React from "react";
import ai from "../images/ai.png";
import Image from "next/image";
import { useState } from "react";

function AiSearch() {
  const [input, setInput] = useState("");
  const [destinations, setDestinations] = useState([]);

  async function onSubmitPrompt(event) {
    event.preventDefault();
    setDestinations([]);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ discreption: input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      const results = data.result.split(",").map((item) => item.trim());
      results.map(async (item) => {
        const response = await fetch(`/api/searchLocation?location=${item}`, {
          method: "GET",
        });

        if (response.status !== 200) {
          return;
        }

        const { locations } = await response.json();
        const mainDestination = locations[0]["name"];
        const mainDestinationPhoto = locations[0]["photoURL"];

        // remove first location
        locations.shift();

        setDestinations((prev) => {
          console.log({ prev });
          return [
            ...prev,
            { mainDestination, mainDestinationPhoto, locations },
          ];
        });
      });

      setInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Image
        src={ai}
        alt="ai"
        className="h-[500px] object-cover object-center"
      />

      <div className="absolute top-[65%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 w-[70%] text-black">
        <div class="relative w-[75%] h-10 rounded-full">
          <label for="UserEmail" class="sr-only">
            {" "}
            search{" "}
          </label>
          <form onSubmit={onSubmitPrompt}>
            <input
              type="text"
              id="prompt"
              placeholder="Describe what you want to explore (e.g. beaches, museums, outdoor activities)"
              class="w-full rounded-3xl border-gray-200 pr-10 shadow-sm sm:text-sm border-2 focus:ring-indigo-500 focus:border-indigo-500 p-2 pl-5 text-black placeholder-gray-500 "
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onSubmit={onSubmitPrompt}
            />

            <span class="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.24 3.75004C8.65135 3.75004 7.12777 4.38113 6.00443 5.50447C4.88109 6.62782 4.25 8.1514 4.25 9.74004C4.25 11.3287 4.88109 12.8523 6.00443 13.9756C7.12777 15.099 8.65135 15.73 10.24 15.73C11.8286 15.73 13.3522 15.099 14.4756 13.9756C15.5989 12.8523 16.23 11.3287 16.23 9.74004C16.23 8.1514 15.5989 6.62782 14.4756 5.50447C13.3522 4.38113 11.8286 3.75004 10.24 3.75004ZM2.75 9.74004C2.75017 8.54079 3.0383 7.35911 3.59017 6.29438C4.14204 5.22965 4.94151 4.313 5.92134 3.62152C6.90117 2.93004 8.03271 2.48395 9.22081 2.32077C10.4089 2.15758 11.6188 2.28207 12.7488 2.68376C13.8788 3.08546 14.8958 3.75261 15.7143 4.62912C16.5328 5.50563 17.1288 6.56587 17.4523 7.72066C17.7758 8.87546 17.8173 10.0911 17.5733 11.2652C17.3293 12.4394 16.8069 13.5378 16.05 14.468L21.49 19.91L20.43 20.97L14.99 15.531C13.8931 16.4307 12.5633 17.0004 11.1554 17.1737C9.74736 17.3471 8.31909 17.1171 7.03675 16.5103C5.75441 15.9036 4.67073 14.9452 3.91184 13.7467C3.15294 12.5481 2.75003 11.1587 2.75 9.74004Z"
                  fill="black"
                />
              </svg>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AiSearch;
