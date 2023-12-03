import React from "react";
import Slider from "../components/slider";

const Home = () => {
  const cardData = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9r3ivUK1f8iNRku6Aoq0KyJ18FeBpQPeDg&usqp=CAU",
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl:
        "https://npr.brightspotcdn.com/d5/59/2f4b070d48c0a7977d3129af459b/img-0264.jpg",
    },
    // Add more objects for additional cards
  ];

  const Images = [
    "https://www.cityofmoore.com/sites/default/files/styles/1200x630/public/images/featured/city-moore-municipal-court-2.jpg?itok=5v2b3hRL",
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/6QP4ITIAOBHZXKAQO2WVA57D4M.jpg",
    "https://www.icrc.org/sites/default/files/styles/document_photo_gallery_detail_file/public/document/image_list/ethiopia-international-humanitarian-law-moot-court-competition-winners-02.jpg?itok=K8jfvEOc",
    // Add more image URLs as needed
  ];

  return (
    <>
      <div>
        <Slider images={Images} />
      </div>
      <div className="container" style={{ paddingTop: "60px" }}>
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className="card backgroundEffect"
                style={{ backgroundColor: "#ce8d3e" }}
              >
                <img
                  src={card.imageUrl}
                  className="card-img-top pic"
                  alt={`Image ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
