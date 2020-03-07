import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Post grad student from TJS - Anna University -Chennai with CSE as my major.I love exploring new technologies. 
                       I have started reflecting my ideas and thougths through real time application and the medium of words recently</p>
                    4+  years of IT Experience with expert in Software Automation Testing   
                    <ul>
                        <li>Developed various Test Automation Framework with different programming Lanuguage </li>
                        <li>Expertise in Mobile automation testing in both Android and iOS using APPIUM.</li>
                        <li>Performed Continuous Testing with Maven and Jenkins </li>
                        <li>Expertise in performance testing using Jmeter and its Report</li>
                        <li>Expertise in SEO testing using SEO Doctor, Screaming frog tool</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Automation Testing </h3>
                    <p>Developed frameworks like BDD, Specflow, Hybrid, KDD, Galen and Gatling</p>
                    <p>Developed Non Selenium Framework - CYPRESS using Javascript</p>
                    <p>Expertise in Mobile Automation Testing in both Android and iOS using APPIUM</p>
                 </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
          
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
