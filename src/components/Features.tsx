import React, { useState } from "react";
import Heading from "../components/ui/Heading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import huddlePic from '../assets/huddlePic.png'
import esoPic from '../assets/esoPic.png'
import constructionPic from '../assets/constructionPic.jpg'
import Paragraph from "../components/ui/Paragraph";
interface Feature {
  image: string;
  title: string;
  price: string;
  description: string;
  colors: string[];
  urlz: string;
}

const features: Feature[] = [
  {
    image: huddlePic,
    title: "Huddle",
    price: "Complete",
    description: "A word game of synonyms and antonyms featuring a vulgar assistant.",
    colors: ["React.js", "redux", "JSON storage", "frontend"],
    urlz: 'https://danielwalkercoder.github.io/HUDDLE/',
  },
  {
    image: esoPic,
    title: "ESO Checklist",
    price: "Complete",
    description: "A customizable checklist for gamers with multi-character accounts on Elder Scrolls Online.",
    colors: ["React.js", "browser storage", "frontend"],
    urlz: 'https://github.com/BSDannondorf/Elder-Scrolls-Online-Checklist',
  },
  {
    image: constructionPic,
    title: "Chef Hero",
    price: "In Progress",
    description: "An app designed to encourage experimentation and perfection in the kitchen.",
    colors: ["React.js", "redux", "MongoDB", "fullstack"],
    urlz: 'https://github.com/DanielWalkerCoder/midterm',
  },
  {
    image: constructionPic,
    title: "Japanese Tutor",
    price: "In Progress",
    description: "An all-in-one resource to help students prepare for the Japanese Language Proficiency Test.",
    colors: ["React.js", "frontend"],
    urlz: 'https://github.com/BSDannondorf/Japanese-Tutor',
  },
];

const FeatureSection: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<(string | null)[]>(
    Array(features.length).fill(null)
  );

  const handleColorSelect = (index: number, color: string) => {
    const updated = [...selectedColors];
    updated[index] = color;
    setSelectedColors(updated);
  };

  const handleAddToCart = (index: number) => {
    const selected = selectedColors[index];
    if (selected) {
      window.open(features[index].urlz, '_blank');
    } else {
      window.open(features[index].urlz, '_blank');
    }

    // Clear selected color for that item
    const updated = [...selectedColors];
    updated[index] = null;
    setSelectedColors(updated);
  };

  return (
    <section id="features" className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        {/* <Heading level="h3" className="mt-2">
          Discover our latest shoes designed for style, comfort, and durability.
        </Heading> */}
        <Heading level="h2" className='!text-[#64748B]'>Projects</Heading>
        <br />
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-[98%] mx-auto mb-[4rem]">
        {features.map((feature, index) => (
        <Card
  key={index}
  title=""
  className="relative p-6 bg-white rounded-lg shadow-md flex flex-col h-full"
>
  <img
    src={feature.image}
    alt={feature.title}
    className="w-full h-[350px] object-contain mb-4"
  />

  <div className="flex justify-between items-center w-full mb-2">
    <Heading level="h3">{feature.title}</Heading>
    <span className="text-teal-600 font-bold text-xl">{feature.price}</span>
  </div>

  <Paragraph className="text-md text-gray-600 mb-3">{feature.description}</Paragraph>

  <div className="mb-4">
    <Paragraph className="text-sm font-medium text-gray-700 mb-1">Project Features:</Paragraph>
    <div className="flex flex-wrap gap-2">
      {feature.colors.map((color, idx) => (
        <span
          key={idx}
          onClick={() => handleColorSelect(index, color)}
          className={`text-xs font-semibold px-2 py-1 rounded-full cursor-pointer transition ${
            selectedColors[index] === color
              ? "bg-teal-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {color}
        </span>
      ))}
    </div>
  </div>

  {/* Spacer to ensure content above doesn't overlap button */}
  <div className="h-12" />

  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
    <Button
      onClick={() => handleAddToCart(index)}
      className="w-4/5 rounded cursor-pointer"
    >
      View Project
    </Button>
  </div>
</Card>

        ))}
      </div>
    </section>
  );
};

export default FeatureSection;



