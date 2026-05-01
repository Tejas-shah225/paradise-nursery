import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Paradise Nursery 🌿</h1>

      <p style={styles.text}>
        Paradise Nursery is your trusted destination for high-quality indoor and outdoor plants.
        We believe that plants not only beautify your surroundings but also improve your overall
        well-being.
      </p>

      <p style={styles.text}>
        Our mission is to make greenery accessible to everyone by offering a wide variety of
        affordable and easy-to-maintain plants. Whether you're a beginner or a plant enthusiast,
        we have something for you.
      </p>

      <p style={styles.text}>
        At Paradise Nursery, we focus on sustainability, quality, and customer satisfaction.
        Let’s grow together 🌱
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px"
  },
  text: {
    fontSize: "18px",
    marginBottom: "15px",
    lineHeight: "1.6"
  }
};

export default AboutUs;
