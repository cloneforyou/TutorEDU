import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: 230px;
  border: 2px solid #D9E2FF;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #1C3A9F;
  letter-spacing: 0;
  text-align: center;

  :hover {
    color: white;
    border: 0px;
    background-color: #1C3A9F;
  }
`;

class TutorProfile extends Component {

  clicked = () => {
    this.props.onPress(this.props);
  }

  render() {
    return (
      <div className="tutor-TutorProfile">
        <img  src={ "https://randomuser.me/api/portraits/med/men/4.jpg" }
              alt={ "TUTOR NAME" }
              className="tutor-profpic"
              onClick={ this.clicked }/>
        <h2 tutorYear="tutor-schoolYear">{this.props.school} {this.props.year}</h2>
        <h2 tutorRate="tutor-rate">{this.props.rate}</h2>
        <h1 className="tutor-name">{this.props.name}</h1>
        <p>{this.props.bio}</p>
        <h3 className="tutor-rating">RATING</h3>
        <p>{this.props.rating}</p>
        <h3 className="tutor-classes">CLASSES</h3>
        <p>{this.props.classes}</p>
        <h3 className="tutor-availabilities">AVAILABILITIES</h3>
        <p>{this.props.availabilities}</p>
        <h3 className="tutor-reportCard">{this.props.reportCard}</h3>
        <p>{this.props.reportCard}</p>

        <h1 className="tutor-appointment">SCHEDULE AN APPOINTMENT</h1>
        <p>Select a course</p>
        <p>Enter your availabilities</p>
        <p>Briefly describe the kind of help you need</p>
        <p>{this.props.availabilities}</p>
        <Button>Submit Request</Button>
        <p>{this.props.name} will get back to you within 24 hours.</p>
      </div>
    )
  }
}

export default TutorProfile;