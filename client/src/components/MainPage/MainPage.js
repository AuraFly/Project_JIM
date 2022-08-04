import React from 'react';
import { Container } from 'rect-bootstrap';

const MainPage = ({title, children}) => {
  return (
    <div className='mainbackground'>
        <Container>
            <Row>
           <div className='page'>
            { title && (
            <>
            <h1 className='heading'>{ title }</h1>
            <hr />
            </>

           ) }
           {children}
            </div>     
            </Row>
        </Container>
        
    </div>
  )
}

export default MainPage