import data from "../Components/data.json";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from 'react-icons/md';

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a href="https://github.com/yogesh1510-ux" target="_blank">

         
          <button className="btn btn-github">
           <FaGithub style={{ width: '25px', height: '25px' }} />
            Visit My GitHub
          </button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <a href={item.websiteSrc} target="_blank" >

          
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                <MdOpenInNew style={{ width: '25px', height: '25px',paddingTop:"15px" }} />
              </div>
             
            </div>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
}
