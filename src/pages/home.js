import React from "react";
import Slider from "../components/slider";
import HomeCard from "../components/card";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const Images = [
    "https://www.cityofmoore.com/sites/default/files/styles/1200x630/public/images/featured/city-moore-municipal-court-2.jpg?itok=5v2b3hRL",
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/6QP4ITIAOBHZXKAQO2WVA57D4M.jpg",
    "https://www.icrc.org/sites/default/files/styles/document_photo_gallery_detail_file/public/document/image_list/ethiopia-international-humanitarian-law-moot-court-competition-winners-02.jpg?itok=K8jfvEOc",
    // Add more image URLs as needed
  ];

  const cardData = [
    {
      title: "Card 1",
      text: "Some text for Card 1",
      imageUrl:
        "https://www.fanabc.com/english/wp-content/uploads/2023/04/339644686_6103905509698517_6982952298817912763_n.jpg",
    },
    {
      title: "Card 2",
      text: "Some text for Card 2",
      imageUrl:
        "https://www.ethiopia-insight.com/wp-content/uploads/2021/02/66165607_622479451576575_1682532899674390528_n.jpg",
    },
    {
      title: "Card 3",
      text: "Some text for Card 3",
      imageUrl:
        "https://storage.googleapis.com/hippostcard/p/ba36c365e0de539efd64fd3bbb354cb0-800.jpg",
    },
    {
      title: "Card 4",
      text: "Some text for Card 4",
      imageUrl:
        "https://enspseedethiopia.files.wordpress.com/2023/07/eprdf-parlama.jpg",
    },
    // Add more card objects as needed
  ];

  return (
    <>
      <Slider images={Images} />
      <div>
        <Container>
          <Row>
            {cardData.map((card, index) => (
              <Col
                key={index}
                lg={4}
                md={6}
                style={{ marginBottom: "1.5rem", paddingTop: "10px" }}
              >
                <HomeCard {...card} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
