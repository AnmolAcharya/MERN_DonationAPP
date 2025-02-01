import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/finburden.png",
      title: "Remove Financial Burden",
      description:
        "Your donations help remove the financial burden for students struggling to make ends meet, empowering them to focus on their studies and achieve their dreams. Every contribution directly supports students in need, making a lasting impact on their education and future!",
    },
    {
      id: 2,
      image: "/fin.png",
      title: "FINANCE 101",
      description:
        "Finance 101 is here to help you master the art of managing your money, from budgeting to saving and investing. We’ll guide you through essential financial skills to set you up for success and financial independence.",
    },
    {
      id: 3,
      image: "/grad.jpg",
      title: "HUSTLE",
      description:
        "Hustle is all about supporting you every step of the way. Our team is here to help you excel at uni with creative ideas, career advice, and the guidance you need to turn your goals into reality.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR VISION</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
