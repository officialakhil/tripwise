import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { MyContext } from "../context/MyContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [myState, setMyState] = useState("default value");
  return (
    <SessionProvider session={pageProps.session}>
      <MyContext.Provider value={{ myState, setMyState }}>
        <Navbar />
        <Component {...pageProps} />
      </MyContext.Provider>
    </SessionProvider>
  );
}
