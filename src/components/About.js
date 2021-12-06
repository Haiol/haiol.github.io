import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javaIcon from "@iconify/icons-logos/java";
import androidIcon from "@iconify/icons-logos/android-icon";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import Lottie from 'lottie-web';
import animate from 'lottie-web';


class About extends Component {
  constructor(props){
    super(props);
    this.state = { width: 0,height: 0};
    this.container = React.createRef();
  }
  componentDidMount(){
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    console.log(height, width)
    this.setState({height, width});
    Lottie.loadAnimation({
      container: this.container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./thinking.json'),
    });
    animate.setSpeed(0.5);

  }

  render() {


    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var about1 = this.props.resumeBasicInfo.description_sub1;
      var about2 = this.props.resumeBasicInfo.description_sub2;
    }

    return (
      
      <section id="about">
       
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="280px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
             
                  <Icon
                    icon={javaIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={androidIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodejsIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10" >
              <span className='container' ref={this.container} style={{
                      position:"absolute",
                       top:"-50%",
                       left:"-10%",
                       width:"500px",
                       height:"500px"
                       }}/>
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%"
                    }}
                    ref={(divElement) => { this.divElement = divElement}}
                  >
                 
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br />
                    {about1}
                    <br />
                    {about2}                   
                  </div>
                  
                      
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
