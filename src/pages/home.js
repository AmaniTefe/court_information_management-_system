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
            "data:image/jpeg;base64,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",
        },
        // Add more card objects as needed
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
