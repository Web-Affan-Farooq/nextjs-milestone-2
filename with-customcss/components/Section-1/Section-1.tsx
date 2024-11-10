import React from 'react';
import Button from '../Button/Button';
import "./style.css";

const Section_1 = () => {
  return (
    <div>
        <br />
        <br /><br />
        <section className='section-1' id='section-1'>
            <div className='s-1-content'>
            <h1>Rapidly build modern websites without ever leaving your HTML.</h1>
            <br />
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minima ex molestiae quidem repellendus veniam quo quas dolorum. Vel fugiat tenetur perspiciatis tempore qui, veritatis similique corrupti? Pariatur, laborum labore.</p>
            </div>
            <br />
            <Button type='small'/>
        </section>
    </div>
  )
}

export default Section_1;