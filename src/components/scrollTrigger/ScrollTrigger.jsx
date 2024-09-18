import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

// Sample data for the cards
const cardData = [
  {
    id: 1,
    count: 100,
    title: "Card 1",
    description: "This is the first card.",
  },
  {
    id: 2,
    count: 200,
    title: "Card 2",
    description: "This is the second card.",
  },
  {
    id: 3,
    count: 300,
    title: "Card 3",
    description: "This is the third card.",
  },
  {
    id: 4,
    count: 400,
    title: "Card 4",
    description: "This is the fourth card.",
  },
];

const ScrollTriggeredCountUp = () => {
  return (
    <div className="p-4">
      {/* Parent container with grid layout */}
      <div className="grid grid-cols-4 gap-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            count={card.count}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ count, title, description }) => {
  const [startCount, setStartCount] = useState(false);
  const [resetCount, setResetCount] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
          setResetCount(false);
        } else {
          setStartCount(false);
          setResetCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={countRef}
      className="w-full h-48 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:translate-y-[-10px]"
    >
      <div className="text-center">
        {/* Dynamic Text */}
        <div className="text-xl font-semibold mb-4">{title}</div>

        {/* CountUp Component */}
        <div className="text-4xl font-bold text-gray-900">
          {startCount && !resetCount ? (
            <CountUp start={0} end={count} duration={2} />
          ) : (
            <CountUp start={0} end={0} duration={0.1} />
          )}
        </div>

        {/* More Dynamic Text */}
        <div className="text-sm text-gray-600 mt-2">{description}</div>
      </div>
    </div>
  );
};

export default ScrollTriggeredCountUp;
