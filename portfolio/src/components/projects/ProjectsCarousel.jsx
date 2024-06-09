import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import holidaze from '../../assets/holidaze.png';
import metacorner from "../../assets/metacorner.png";
import noroffauction from '../../assets/noroffauction.png';
import reactca from "../../assets/reactca.png";

const ProjectsCarousel = () => {
  return (
    <div className="projects-carousel">
      <h2>Projects</h2>
      <Carousel indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={holidaze} alt="First project" />
          <div className="carousel-caption-custom">
            <h3>Holidaze</h3>
            <p>This is a School project where I was tasked to create a website for venue accommodations.</p>
            <a href="https://holidazeexamolekrr.netlify.app/" className="btn btn-primary">Visit this project</a>
            <a href="https://github.com/Olekrr/Project-Exam-2" className="btn btn-secondary">Github repository</a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={metacorner} alt="Second project" />
          <div className="carousel-caption-custom">
            <h3>Meta Corner</h3>
            <p>This is a school project where I was tasked to create a blog website.</p>
            <a href="https://metacorner.netlify.app/" className="btn btn-primary">Visit this project</a>
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-Olekrr" className="btn btn-secondary">Github repository</a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={noroffauction} alt="Third project" />
          <div className="carousel-caption-custom">
            <h3>Noroff Auctions</h3>
            <p>This is a school project where I was tasked to create a website for an auction house.</p>
            <a href="https://vocal-youtiao-27dc2c.netlify.app/" className="btn btn-primary">Visit this project</a>
            <a href="https://github.com/Olekrr/Semester-Project-2" className="btn btn-secondary">Github repository</a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={reactca} alt="Fourth project" />
          <div className="carousel-caption-custom">
            <h3>React CA</h3>
            <p>This is a school project where I was tasked to create a website using React for the first time.</p>
            <a href="https://olekristianreactca.netlify.app/" className="btn btn-primary">Visit this project</a>
            <a href="https://github.com/Olekrr/ReactCA" className="btn btn-secondary">Github repository</a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
