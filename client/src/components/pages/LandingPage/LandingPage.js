import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import "./LandingPage.css";
// import { useEffect } from 'react';

const LandingPage = () => {
    
    //use effect for history was taken out
    //noon 8/3 not useing the usereffect

  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='welcome'>
                    <div>
                        <h1 className='title'>Welcome Let JIM Handle It! </h1>
                        <p className='subtitle'> Keep track of classes you teach and make your invoice</p>
                    </div>
                    <div className='buttonContainer'>
                    <a href='/login'>
                        <Button size='large' className="landingbutton">
                            Login
                        </Button>
                    </a>

                    <a href='/register'>
                        <Button size='large' className="landingbutton">
                            Register
                        </Button>
                    </a>

                    </div>


                </div>
                
            </Row>
        </Container>

    </div>
  )
};

export default LandingPage