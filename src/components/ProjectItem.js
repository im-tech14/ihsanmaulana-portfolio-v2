import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import projects from '../assets/data/projects';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--white-alpha-40);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    /* background-color: var(--deep-dark); */
    padding: 1rem;
    border-radius: 12px;
    background-color: var(--white-alpha-25);
    border: 1.5px solid var(--white-alpha-40);
    -webkit-backdrop-filter: var(--backdrop-filter-blur);
    backdrop-filter: var(--backdrop-filter-blur);
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
