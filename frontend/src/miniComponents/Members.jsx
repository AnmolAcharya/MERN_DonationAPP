import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/founder.jpg",
      title: "Founder",
    },
    {
      id: 2,
      image: "/alek.jpg",
      title: "Co-Founder",
    },
    {
      id: 3,
      image: "/beren.JPG",
      title: "CFO",
    },
    {
      id: 4,
      image: "/investor.JPG",
      title: "Investor",
    },
    {
      id: 5,
      image: "/niku.jpg",
      title: "StakeHolder",
    },
    {
      id: 6,
      image: "/Model.jpg",
      title: "COO",
    },
    // {
    //   id: 7,
    //   image: "/m7.jpg",
    //   title: "Jhon Wick",
    // },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">OUR (GENZ) FAM</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              accusamus aspernatur hic laboriosam blanditiis atque error eius
              dolorem fuga harum?
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
