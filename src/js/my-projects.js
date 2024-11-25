import managerFinanceImg from '/img/my-projects/proj1@1x.jpg';
import managerFinanceImg2x from '/img/my-projects/proj1@2x.jpg';

import vegetablesImg from '/img/my-projects/proj2@1x.jpg';
import vegetablesImg2x from '/img/my-projects/proj2@2x.jpg';

import discoverImg from '/img/my-projects/proj3@1x.jpg';
import discoverImg2x from '/img/my-projects/proj3@2x.jpg';

import transformYourImg from '/img/my-projects/proj4@1x.jpg';
import transformYourImg2x from '/img/my-projects/proj4@2x.jpg';

import traditionsUkraineImg from '/img/my-projects/proj5@1x.jpg';
import traditionsUkraineImg2x from '/img/my-projects/proj5@2x.jpg';

import getBodyImg from '/img/my-projects/proj6@1x.jpg';
import getBodyImg2x from '/img/my-projects/proj6@2x.jpg';

import miminoImg from '/img/my-projects/proj7@1x.jpg';
import miminoImg2x from '/img/my-projects/proj7@2x.jpg';

import brandImg from '/img/my-projects/proj8@1x.jpg';
import brandImg2x from '/img/my-projects/proj8@2x.jpg';

import freshImg from '/img/my-projects/proj9@1x.jpg';
import freshImg2x from '/img/my-projects/proj9@2x.jpg';

import turnYourImg from '/img/my-projects/proj10@1x.jpg';
import turnYourImg2x from '/img/my-projects/proj10@2x.jpg';

import urlSprite from '/img/icons.svg';

const projects = [
  {
    title: 'Wallet Webservice',
    image: managerFinanceImg,
    image2x: managerFinanceImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Wallet Webservice Project',
  },
  {
    title: 'Green harvest webservice',
    image: vegetablesImg,
    image2x: vegetablesImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Green harvest',
  },
  {
    title: 'English Exellence webservice',
    image: discoverImg,
    image2x: discoverImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'English Exellence',
  },
  {
    title: 'Transform your webservice',
    image: transformYourImg,
    image2x: transformYourImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Transform your',
  },
  {
    title: 'Ukraine traditions webservice',
    image: traditionsUkraineImg,
    image2x: traditionsUkraineImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Ukraine traditions',
  },
  {
    title: 'Stay Healthy webservice',
    image: getBodyImg,
    image2x: getBodyImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Stay Healthy',
  },
  {
    title: 'Mimino webservice',
    image: miminoImg,
    image2x: miminoImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Mimino',
  },
  {
    title: 'Transformation with a Touch of the Brush webservice',
    image: brandImg,
    image2x: brandImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Transformation with a Touch of the Brush',
  },
  {
    title: 'Fresh harvest box webservice',
    image: freshImg,
    image2x: freshImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Fresh harvest box',
  },
  {
    title: 'Transform your business webservice',
    image: turnYourImg,
    image2x: turnYourImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/AnnnaOs/codeCreators-project',
    alt: 'Transform your business',
  },
];

let currentIndex = 0;
const projectsPerPage = 3;

function loadProjects() {
  const projectListEl = document.querySelector('.project-list');
  const projectsToLoad = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  const projectsItems = projectsToLoad
    .map(({ image, image2x, alt, techStack, title, link, svg }, index) => {
      return `
            <li class="project-item">
                <img  srcset="${image} 1x, ${image2x} 2x" src="${image}"  alt="${alt}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${techStack}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${title}</h3>
                        <div class="centered">
                                <a href="${link}" class="project-link" target="_blank">VISIT
                                 <svg class="project-icon" width="15" height="15">
                                        <use href="${urlSprite}#arrow-projects"></use>
                                    </svg>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </li>
            `;
    })
    .join('');

  projectListEl.innerHTML += projectsItems;

  const newlyAddedItems = document.querySelectorAll('.project-item:not(.show)');
  newlyAddedItems.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('show');
    }, i * 200);  
  });
  
  currentIndex += projectsPerPage;

  if (currentIndex >= projects.length) {
    document.querySelector('.load-more').style.display = 'none';
  }
}

document.querySelector('.load-more').addEventListener('click', loadProjects);
loadProjects();
