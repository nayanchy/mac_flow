import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass}>
        <Image
          className="invert-colors mr-2.5 object-contain"
          src="/icons/github.svg"
          alt="github"
          height={20}
          width={20}
        />
        <span>Login with GitHub</span>
      </Button>
      <Button className={buttonClass}>
        <Image
          className="mr-2.5 object-contain"
          src="/icons/google.svg"
          alt="google"
          height={20}
          width={20}
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
