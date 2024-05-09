import React from 'react'
import { aboutskills } from '../../lists'

export default function AboutCompany() {
  return (
    <div className='about_company'>
        <h2>About Us</h2>
        <div className="about_content" data-aos="zoom-in-down">
            <div className="about_picture" style={{background : 'url(pictures/about/company.jpg) no-repeat center center / cover'}}></div>
            <div className="about_info">
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                <h2>Our Services</h2>
                <ul>
                  <li>Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in rep rehenderit.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>Duis aute irure dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>Ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor cididunt ut labore et dolore magna aliqua.</li>
                </ul>
            </div>
        </div>
        <div className="can_do_container" data-aos="zoom-in-down">
            <div className="can_do">
                <h2>What We Can Do</h2>
                <i>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellot voluptatem.</i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
            </div>
            <div className="skills" data-aos="zoom-in-down">
                <h2>Skills</h2>
                <div className="skills_container">
                    {aboutskills.map(skill => {
                        return <div className='skill' key={skill.id}>
                              <div className="skill_text">
                                  <span>{skill.name}</span>
                                  <span className='skill_percent' style={{left : skill.percent - 5 + '%'}}>{skill.percent}%</span>
                              </div>
                                  <div className="grayLine">
                                      <div className="colorLine" style={{ width : skill.percent + '%'}}></div>
                                  </div>
                          </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
