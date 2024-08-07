import React from "react";
import { LinkPreview } from "./ContactMe";

export function LinkPreviewDemo() {

  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        You can reach out to me via{"  "}
        <LinkPreview isStatic={true}  imageSrc='email.png' url="https://my-portfolio-mike-96-640a902a20f4.herokuapp.com/email" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-green-500">
          Email
        </LinkPreview>
        ,{" "}
        <LinkPreview url="https://github.com/artsemlemesh" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-500 to-yellow-500">
          Github
        </LinkPreview>{" "}
        or
        {" "}
        <LinkPreview
          url="https://linkedin.com/in/artsem-lemesh-664381232"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
           LinkedIn
        </LinkPreview>{" "}
      </p>
      
      
      
      
    </div>
  );
}
