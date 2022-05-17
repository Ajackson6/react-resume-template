import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Artis Jackson Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Highly technical Cloud Engineer with 2+ years of experience in cloud computing, creating private networks, IaC, and system administrations. Dedicated and self-motivated AWS Engineer that is always looking to push the environment in the most optimal way. Strong experience operating globally distributed, mission critical systems, and designing for high availability and performance. Excellent communication skills with the ability to adapt to new technologies and learn quickly. Active Top Secret / SCI Security Clearance.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>
						   <span>Artis Jackson</span><br />
                     
						         Melissa, Texas, 75454 
                   </span><br />
						   <span>386-308-9745</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
