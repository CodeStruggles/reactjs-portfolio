import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Niclas Deplazes Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
