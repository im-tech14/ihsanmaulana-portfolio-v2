import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
// import ProjectItem from '../components/ProjectItem';
// import Button from '../components/Button';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;

    .btn__link {
      width: auto;
      height: auto;
      margin-top: 2rem;

      display: inline-block;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      color: #16bb92;
      outline: none;
      border-radius: 10px;
      background-color: var(--white-alpha-25);

      box-shadow: var(--outer-shadow);
      transition: all 0.3s ease;

      &:hover {
        color: var(--gary-1);
        /* background: linear-gradient(45deg, #16bb92, #1f7c91); */
        box-shadow: var(--inner-shadow);
        transition: all 0.4s ease;
      }
    }
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
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
    background-color: var(--white-alpha-25);
    padding: 1rem;
    border-radius: 12px;
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
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    .btn__link {
      font-size: 2rem;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <motion.div
            className="projects__searchBar"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.4 }}
          >
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </motion.div>
          <motion.div
            className="projects__allItems"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
          >
            {projectsData.map((item) => (
              <>
                <div className="project__item">
                  <Link to="#" className="projectItem__img">
                    <img src={item.img} alt="project img" />
                  </Link>
                  <div className="projectItem__info">
                    <Link to="#" target="_blank" rel="noreferrer">
                      <h3 className="projectItem__title">{item.name}</h3>
                    </Link>
                    <p className="projectItem__desc">{item.desc}</p>
                  </div>
                  <a
                    className="btn__link"
                    href={item.projectLink}
                    alt="linkproject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                  </a>
                </div>
              </>
            ))}
          </motion.div>
        </div>
      </ProjectStyle>
    </>
  );
}
