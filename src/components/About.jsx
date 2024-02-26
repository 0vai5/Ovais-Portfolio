import React from 'react'
import { experiences, skills } from "../constants/index";
import { Link } from 'react-router-dom';
import Button from './button';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SocialLinks from './socialLinks';
import LocomotiveScroll from 'locomotive-scroll';

const About = () => {
  const scroll = new LocomotiveScroll();
  return (
    <section className='max-container'>
      <div className='flex flex-col sm:flex-row items-center m-0 justify-between '>
        <div className='flex flex-col'>
          <h1 className="head-text text-[#ffffff]">
            Hello, I'm
            <span className="blue-gradient_text font-semibold drop-shadow">
              {" "}
              Ovais
            </span>
            <span role="img" aria-label="Waving Hand" style={{ marginLeft: '8px' }}>👋</span>
          </h1>
          <div className="text-slate-500 mt-5 flex flex-col items-start ">
            <p className='text-[#d0baba]'>
              I'm a full-stack developer from{" "}
              <span className="text-green-500">Pakistan</span> passionate about
              building innovative and user-friendly applications with a focus on
              scalability. As a full-stack developer, I excel in crafting scalable and user-friendly applications. Passionate about innovation, I blend creativity with technical prowess, ensuring a seamless and impactful user experience. Let's embark on this transformative journey together!
            </p>
        <SocialLinks />

          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-[#fdd]">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className=" rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
            <h3 className="subhead-text text-[#fdd]">Work Experience</h3>
            <div className="text-slate-500 mt-5 flex flex-col gap-3">
              <p>
                I've worked with companies, at different positions leveling up my
                skills and teaming up with smart people. Here's the rundown:
              </p>
            </div>
            <div className="mt-12 flex bg-transparent">
              <VerticalTimeline>
                {experiences.map((experience, index) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={
                      <div className="flex justify-center items-center bg-transparent w-full h-full">
                        <img
                          src={experience.icon}
                          alt={experience.company_name}
                          className="object-contain w-[60%] h-[60%]"
                        />
                      </div>
                    }
                    iconStyle={{background: experience.iconBg}}
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: experience.iconBg,
                      boxShadow: "none",
                    }}
                  >
                    <h3 className="text-black font-semibold font-poppins text-xl">
                      {experience.title}
                    </h3>
                    <p className="text-black font-medium font-base">
                      {experience.company_name}
                    </p>
                    <ul className="my-5 list-disc ml-5 space-y-2 text-slate-800">
                      {experience.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>

    </section>
  )
}

export default About