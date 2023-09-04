"use client";
import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import React from "react";

const Page = () => {
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container fex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4 cursor-pointer">
            <CloseModal />
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Page;
