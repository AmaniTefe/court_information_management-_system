import React, { useEffect, useState } from "react";
import Slider from "../components/slider";
import HomeCard from "../components/card";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

const Home = () => {
  const Images = [
    "https://www.thereporterethiopia.com/wp-content/uploads/2018/06/House-awakens.gif",
    "https://t3.ftcdn.net/jpg/02/90/60/12/360_F_290601202_Q6e785uvhWCxqCYPFTvoAAYjFN0m9cZP.jpg",
    "https://www.icrc.org/sites/default/files/styles/document_photo_gallery_detail_file/public/document/image_list/ethiopia-international-humanitarian-law-moot-court-competition-winners-02.jpg?itok=K8jfvEOc",
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Haile_Selassie_and_group.jpg",
    // Add more image URLs as needed
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Define the thresholds for each layer
      const firstLayerThreshold = 500; // Adjust as needed
      const secondLayerThreshold = 1000; // Adjust as needed

      // Move cardData inside the useEffect callback
      const cardData = [
        {
          title: "Card 1",
          text: "Some text for Card 1",
          imageUrl:
            "https://static.euronews.com/articles/580709/900x506_580709.jpg",
        },
        {
          title: "Card 2",
          text: "Some text for Card 2",
          imageUrl:
            "https://www.icrc.org/sites/default/files/styles/document_photo_gallery_detail_file/public/document/image_list/ethiopia-moot-court-ihl-2018-competition-01.jpg?itok=LF7epIOs",
        },
        {
          title: "Card 3",
          text: "Some text for Card 3",
          imageUrl:
            "https://ethiopianmonitor.com/wp-content/uploads/2020/12/court-800x445.jpg",
        },
        {
          title: "Card 4",
          text: "Some text for Card 3",
          imageUrl: "https://www.101lasttribes.com/images/gurage.jpg",
        },
        {
          title: "Card 5",
          text: "Some text for Card 3",
          imageUrl:
            "https://www.ethiopia-insight.com/wp-content/uploads/2020/08/HoPR.jpg",
        },
        {
          title: "Card 6",
          text: "Some text for Card 3",
          imageUrl:
            "https://borkena.com/wp-content/uploads/2018/07/High-court-judges.jpg",
          // Add more card objects as needed
        },
      ];

      const visibleCards = cardData.map((card, index) => {
        const cardTop = index * 300; // Adjust the distance between cards
        const cardBottom = cardTop + 300; // Adjust the height of each card

        if (scrollY > cardTop - firstLayerThreshold && scrollY < cardBottom) {
          return { ...card, layer: 1 };
        } else if (
          scrollY > cardTop - secondLayerThreshold &&
          scrollY < cardBottom
        ) {
          return { ...card, layer: 2 };
        } else {
          return { ...card, layer: 0 };
        }
      });

      setVisibleCards(visibleCards);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array because we only want to run this effect once on mount

  return (
    <>
      <Slider images={Images} />
      <div>
        <Container>
          <Row>
            {visibleCards.map((card, index) => (
              <Col
                key={index}
                lg={4}
                md={6}
                style={{
                  marginBottom: "1.5rem",
                  paddingTop: "10px",
                  paddingLeft: "1rem",
                }}
              >
                <HomeCard {...card} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
