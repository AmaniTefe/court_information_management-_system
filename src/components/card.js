// import "../style/card.css";

// export default function Card() {
//   <div className="team-cards">
//     {/* Cards here */}
//     {/* Card 1 */}
//     <div className="card">
//       <div className="card-img">
//         <img
//           src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg"
//           alt="User 1"
//         />
//       </div>
//       <div className="card-info">
//         <h2 className="card-name">Jane</h2>
//         <p className="card-role">CEO and Founder</p>
//         <p className="card-email">jane@example.com</p>
//       </div>
//     </div>

//     {/* Card 2 */}
//     <div className="card">
//       <div className="card-img">
//         <img
//           src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg"
//           alt="User 2"
//         />
//       </div>
//       <div className="card-info">
//         <h2 className="card-name">Miller</h2>
//         <p className="card-role">Co-Founder</p>
//         <p className="card-email">Miller@example.com</p>
//       </div>
//     </div>
//     {/* Card 3 */}
//     <div className="card">
//       <div className="card-img">
//         <img
//           src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg"
//           alt="User 3"
//         />
//       </div>
//       <div className="card-info">
//         <h2 className="card-name">Joe</h2>
//         <p className="card-role">Co-Founder</p>
//         <p className="card-email">Joe@example.com</p>
//       </div>
//     </div>
//   </div>;
// }

import React from "react";
import Card from "react-bootstrap/Card";

export default function HomeCard({ title, text, buttonText, imageUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
