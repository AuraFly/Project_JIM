import React from 'react';
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Let J.I.M. handle it!</h1>
        <p className='py-4'>This project was created by Natalya Colburn, Jordan Covarrubias, David Irving, and Jesus Rodriguez. Links to each of their profiles and bodies of work can be seen to the right.</p>
        
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='text-2xl text-[#00df9a]'>Natalya Colburn</h6>
        <ul>
            {/* <li className='py-2 text-sm'>Facebook<FaFacebookSquare size={25} /></li> */}
            <li className='py-2 text-sm'><a href="https://github.com/NatalyaCo">Github</a><FaGithub size={25} /></li>
            <li className='py-2 text-sm'><a href="https://www.linkedin.com/in/natalya-colburn-46bb2b1b2/">LinkedIn</a><FaLinkedin size={25} /></li>
            <li className='py-2 text-sm'><a href="https://natalyaco.github.io/Updated-Portfolio-wk16/">Portfolio</a><FaReact size={25} /></li>
        </ul>
    </div>
    <div>
        <h6 className='text-2xl text-[#00df9a]'>Jordan Covarrubias</h6>
        <ul>
            {/* <li className='py-2 text-sm'>Facebook<FaFacebookSquare size={25} /></li> */}
            <li className='py-2 text-sm'><a href="https://github.com/AuraFly">Github</a><FaGithub size={25} /></li>
            <li className='py-2 text-sm'><a href="https://www.linkedin.com/in/jcov/">LinkedIn</a><FaLinkedin size={25} /></li>
            <li className='py-2 text-sm'><a href="https://aurafly.github.io/Portfolio/">Portfolio</a><FaReact size={25} /></li>
        </ul>
    </div>
    <div>
        <h6 className='text-2xl text-[#00df9a]'>David Irving</h6>
        <ul>
            {/* <li className='py-2 text-sm'><a href="https://www.facebook.com/david.irving.3701/">Facebook</a><FaFacebookSquare size={25} /></li> */}
            <li className='py-2 text-sm'><a href="https://github.com/David-Irving">Github</a><FaGithub size={25} /></li>
            <li className='py-2 text-sm'><a href="https://www.linkedin.com/in/david-j-irving/">LinkedIn</a><FaLinkedin size={25} /></li>
            <li className='py-2 text-sm'><a href="https://david-irving.github.io/react-portfolio/">Portfolio</a><FaReact size={25} /></li>
        </ul>
    </div>
    <div>
        <h6 className='text-2xl text-[#00df9a]'>Jesus Rodriguez</h6>
        <ul>
            {/* <li className='py-2 text-sm'>Facebook<FaFacebookSquare size={25} /></li> */}
            <li className='py-2 text-sm'><a href="https://github.com/JesusRodriguezDev">Github</a><FaGithub size={25} /></li>
            <li className='py-2 text-sm'>LinkedIn<FaLinkedin size={25} /></li>
            <li className='py-2 text-sm'><a href="https://jesusrodriguezdev.github.io/portfolio_react_version/">Portfolio</a><FaReact size={25} /></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;