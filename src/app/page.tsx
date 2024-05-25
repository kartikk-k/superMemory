"use client"

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import QueryInput from "@/components/QueryInput";
import { useState } from "react";

export default function Home() {
  const [isEmpty, setIsEmpty] = useState(false)
  return (
    <main className="h-screen flex flex-col p-4 relative">
      <Menu />

      <Header />

      <div className="max-w-3xl flex mx-auto w-full flex-col">

          {/* all content goes here */}
          <div className="">
          </div>

          <div className="w-full h-96">
            <QueryInput />
          </div>

      </div>

    </main>
  );
}
