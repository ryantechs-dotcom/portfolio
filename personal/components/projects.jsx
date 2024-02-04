import React from 'react';
import VideoGameImg from '../public/assets/projects/videogame.png';
import creditapproval from '../public/assets/projects/creditapproval.jpg';
import E_commerce from '../public/assets/projects/ecommerce.png';
import StockImg from '../public/assets/projects/stockimg.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title="Video Game Analysis" backgroundImg={VideoGameImg} projectUrl="https://jovian.com/ryanallandsouza/video-game-analysis" projectcode={'Python and Pandas'}   />
                <ProjectItem title="Credit Approval ML Model" backgroundImg={creditapproval} projectUrl="https://github.com/rajscams/CreditML" projectcode={'Python and Scikitlearn'} />
                <ProjectItem title="E_commerce" backgroundImg={E_commerce} projectUrl="https://vulcan-final-rajscams.vercel.app/" projectcode={'React.JS and Stripe API'} />
                <ProjectItem title="Stock Predictor" backgroundImg={StockImg} projectUrl="https://jovian.com/ryanallandsouza/video-game-analysis" projectcode={'Python and Pandas'} />

            </div> 
        </div>    
    </div>
  )
}

export default Projects