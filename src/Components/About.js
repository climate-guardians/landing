import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const dapp = this.props.data.dapp;
    const resumeDownload = this.props.data.resumedownload;
    const dappLink = this.props.data.dapplink;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Curupiri Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Climate Warriors</h2>

              <p>{bio}</p>
              <div className="row">
                
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Game Design
                    </a>
                  </p>
                </div>
              </div>

              <p>{dapp}</p>
              <div className="row">
                
                <div className="columns download">
                  <p>
                    <a href={dappLink} className="button">
                      <i className="fa fa-download"></i>CW beta Dapp
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
