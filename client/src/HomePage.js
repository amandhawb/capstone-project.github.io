import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>
          Visualizing Performance: A Tool for Understanding Data Structures and
          Benchmarking Brute Force Search and Binary Search
        </h1>
      </header>
      <section style={styles.section}>
        <h2>Project Justification</h2>
        <p>
          I am researching the lack of accessible tools and platforms to
          visualize the performance of different data structures and searching
          algorithms because I want to gain a deeper understanding of how
          choosing the right data structure impacts the performance and
          efficiency of different types of searching algorithms. I want to help
          readers appreciate the importance of choosing the right data structure
          for a specific search task and to make the concepts of algorithmic
          time and space complexity more intuitive through visualization.{" "}
        </p>
      </section>
      <section style={styles.section}>
        <h2>Project Description</h2>
        <p>
          This Algorithm Performance Analysis Tool is a user-friendly, web-based
          platform designed to evaluate and compare the performance of brute
          force search and binary search algorithms. Users, including students,
          educators, and software developers, can leverage this tool to
          understand the impact of different data structures on search
          algorithms, making the complex concepts of time and space complexity
          more intuitive. The tool includes the visualization for searching
          algorithms, performance metrics, and comprehensive benchmarks to
          facilitate learning, improve decision-making in software design, and
          assist in preparing for technical interviews.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Project Goals and Significance</h2>
        <p>
          My primary goals are to develop an educational resource for students,
          job applicants, and developers, to improve their understanding of
          search algorithms and data structures. By offering empirical data and
          visualizations, this tool will enhance decision-making in software
          design and support preparation for technical interviews. For the MVP,
          this tool will focus on the benchmarking of brutal force algorithm and
          binary search algorithm.
        </p>
      </section>
      <section>
        <ul>
          <li>
            <Link to="/data-structures">
              Data Structures and Big O Notation
            </Link>
          </li>
          <li>
            <Link to="/brute-force">Brute Force Visualizer</Link>
          </li>
          <li>
            <Link to="/binary-search">Binary Search Visualizer</Link>
          </li>
          <li>
            <Link to="/benchmarks">Benchmarks</Link>
          </li>
        </ul>
      </section>
      <footer style={styles.footer}>
        <p>
          Developed by: Amandha Wingert Barok, Master's in Information
          Technology, Atlantis University. 2024.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
  },
  header: {
    backgroundColor: "#FFC0CB",
    color: "white",
    padding: "3px 0",
    textAlign: "center",
  },
  section: {
    marginBottom: "20px",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
};

export default Home;
