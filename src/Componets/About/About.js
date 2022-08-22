import React from 'react';
import Container from 'react-bootstrap/Container';
import './About.css'


const About = () => {
 
  return (
    <div >
      <Container className='my-5'>
      <h2 class="pb-2 border-bottom my-5 display-5">About Us</h2>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 ">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button className="btn btn-primary btn-lg" type="button">Example button</button>
          </div>
        </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2 className='display-6'>Change the background</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <button className="btn btn-outline-light" type="button">Example button</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2 className='display-6'>Add borders</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button className="btn btn-outline-secondary" type="button">Example button</button>
          </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default About