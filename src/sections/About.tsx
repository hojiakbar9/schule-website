import React from "react";
import TextBox from "../components/TextBox";
import Card from "../components/Card";
import { LuBookOpen, LuHeart, LuStar } from "react-icons/lu";
import Citatation from "../components/Citatation";
const About = () => {
  const cardContents = [
    {
      icon: LuBookOpen,
      title: "Academic Growth",
      text: "We foster academic excellence through innovative teaching methods and personalized learning approaches.",
    },
    {
      icon: LuHeart,
      title: "Caring Environment",
      text: "Our school provides a nurturing and supportive atmosphere where every student feels valued and respected.",
    },
    {
      icon: LuStar,
      title: "Excellence in Education",
      text: "We strive for excellence in all aspects of education, preparing students for success in their future endeavors.",
    },
  ];
  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <TextBox />
        <div className="flex flex-col gap-8 md:flex-row">
          {cardContents.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <Citatation
        ayah="رَّبِّ زِدْنِى عِلْمًا"
        translation='"My Lord, increase me in knowledge."'
        reference="Quran 20:114"
      />
    </section>
  );
};

export default About;
