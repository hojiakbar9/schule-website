import React from "react";

interface Props {
  icon: React.ElementType;
  title: string;
  text: string;
}

const Card = ({ icon: Icon, title, text }: Props) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-secondary font-accent leading-relaxed">{text}</p>
    </div>
  );
};

export default Card;
