import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsItem from './newsimage.jpg'

const News = () => {
  return (
    <div class="profiles">
        <div class="profile bg-light">
          <img
            src={NewsItem}
            alt=""
            width="300px"
          />
          <div>
            <p>TECHNOLOGY MAY, 4 2021</p>
            <h2>Pushing Computing to the Edge With Innovative Microchip Design to Make AI Accessible in Real-Time</h2>
            <p>Computing experts thought they had developed adequate security patches after the major worldwide Spectre flaw of 2018, but UVA’s discovery shows processors are open to…</p>
          </div>

         <ul>
           <Link to="spectre-strikes-back-new-hacking-vulnerability-affecting-billions-of-computers-worldwide">Test News Link</Link>
         </ul>
        </div>

        <div class="profile bg-light">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <div>
            <h2>John Doe</h2>
            <p>Developer at Microsoft</p>
            <p>Seattle, WA</p>
          </div>

          <ul>
            <li class="text-primary">
              <i class="fas fa-check"></i> HTML
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> CSS
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> JavaScript
            </li>
          </ul>
        </div>
      </div>
  );
};

export default News;