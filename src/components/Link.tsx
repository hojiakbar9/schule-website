import React from "react";
import { LuArrowRight } from "react-icons/lu";

interface Props {
  text: string;
}

const Links = ({ text }: Props) => {
  return (
    <>
      <a className="text-sm font-medium text-primary hover:underline" href="#">
        {text} <LuArrowRight className="inline text-xs" />
      </a>
    </>
  );
};

export default Links;
