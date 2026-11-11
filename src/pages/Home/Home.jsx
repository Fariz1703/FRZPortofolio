import "./Home.css";


import Periodcare from "../../assets/icons/periodcarelogo.svg";
import Github from "../../assets/icons/github.svg";
import Paletio from "../../assets/icons/paletio.jpeg";
import ProjectCard from "./component/card.jsx";
import Hero from "./component/hero.jsx"

function Home() {
  const projects = [
    {
      id: 1,
      techStack: "dart, Flutter",
      title: "Period Care",
      category: "Front End",
      description: "Developed PeriodCare, a menstrual cycle tracking application where I implemented features for recording period start and end dates, managing menstrual history, and organizing cycle records to help users monitor their menstrual patterns more easily..",
      img: Periodcare,
      try: null,
      GitHubLink: "https://github.com/Fariz1703/periodcare"

    },
    {
      id: 2,
      techStack: "Python, fastApi",
      title: "Suka Kasir Backend",
      category: "Backend Developer",
      description: "Developed a backend REST API for SukaKasir, a cashier and transaction management application, using Python and FastAPI. The project focuses on building structured and maintainable APIs to support product management, category management, supplier management, and sales transaction processing.",
      img: Github,
      try: "https://suka-kasir-backend.vercel.app/web/docs#/",
      GitHubLink: "https://github.com/Fariz1703/periodcare"
    },
    {
      id: 3,
      techStack: "Python, Odoo",
      title: "Hospital System",
      category: "Odoo Developer",
      description: "A simple Hospital Management System built using Odoo 17 with custom modules to manage basic hospital operations such as patient registration, appointment scheduling, doctor assessments, prescriptions, and payment processing.This project demonstrates the implementation of custom Odoo modules using Python to support healthcare workflow management.",
      img: Github,
      try: null,
      GitHubLink: "https://github.com/Fariz1703/Hospital-System"
    },
    {
      id: 4,
      techStack: "SQL, PosgreSQL, Python",
      title: "SQL Job Analysis",
      category: "SQL Developer",
      description: "Conducted an end-to-end SQL analysis of the data job market using PostgreSQL. Explored salary trends, in-demand skills, and high-paying roles through advanced SQL techniques, including JOINs, CTEs, subqueries, window functions, and aggregations. Generated actionable insights to identify the most valuable skills for aspiring data professionals.",
      img: Github,
      try: null,
      GitHubLink: "https://github.com/Fariz1703/SQL_Project_Data_Job_Analysis"
    },
    {
      id: 5,
      techStack: "Swift, SwiftUI",
      title: "Paletio",
      category: "iOS Developer",
      description: "Paletio helps painters match and recreate colors from their inspiration using only five basic acrylic paints. Designed for beginners and hobbyist artists, Paletio offers precise color-mixing guidance that reduces guesswork, cuts down paint waste, and makes the painting process more efficient and predictable.",
      img: Paletio,
      try: "https://apps.apple.com/id/app/paletio/id6754882553",
      GitHubLink: null,
    }
  ];

  return (
    <div className="home">
      <div className="column">
        <div className="spacercolumn"></div>
        <Hero></Hero>
        <div className="invisible-container">
          <h1 className="bigtitle">My Projects</h1>
        </div>


        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}

export default Home;