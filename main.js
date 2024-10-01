const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const toggleMenu = () => {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

// Modal Popup

const projects = [
  {
    name: 'IMT',
    
    details: ['Service', 'front End Dev', '2022'],
    smallDescription:
      'Inventory Management System (UX/UI & Mobile compatible)',
    bigDescription:
      "Designed and developed the front end for an Inventory Management System aimed at helping businesses efficiently track inventory levels, sales, and order management. The user interface is intuitive and responsive, allowing users to easily navigate through various features, such as adding and removing items, checking stock levels, and generating reports. Utilized HTML, CSS, and JavaScript to create a seamless user experience, focusing on functionality and aesthetic appeal to ensure that users can manage their inventory with ease and confidence.",
    imageUrlMobile: 'assets/103.png',
    imageUrlDesktop: 'assets/102.png',
    popupImageUrlMobile: 'assets/103.png',
    popupImageUrlDesktop: ['assets/104.png','assets/105.png','assets/106.png','assets/107.png'],

    technologiesPopup: [
      'html',
      'css',
      'javaScript',
      'github',
      'Ruby',
      'Bootstrap',
      
    ],
    technologies: ['React', 'css', 'javaScript'],
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Fattly LIver Classification',
    details: ['Liver', 'Machine Learning Dev', '2023'],
    smallDescription:
      'Machine Learning Research: Detecting hepatitis Diseases Using Images',
    bigDescription:
      "Developed a machine learning algorithm to detect hepatitis liver diseases using image recognition techniques. The project involved gathering a dataset of medical images related to liver conditions and preprocessing the data for analysis. Employed convolutional neural networks (CNNs), a type of deep learning model particularly effective for image classification tasks, to extract features from the images. The model was trained on a portion of the dataset, optimizing hyperparameters to enhance accuracy and reduce overfitting. Once trained, the algorithm was evaluated on a separate test dataset to measure its performance, demonstrating a promising accuracy rate in detecting different forms of hepatitis. This project showcases the potential of AI in improving medical diagnostics and aiding healthcare professionals in early disease detection.",
    imageUrlMobile: 'assets/202.png',
    imageUrlDesktop: 'assets/202.png',
    technologiesPopup: ['html', 'Python', 'Tensorflow', 'javaScript'],
    technologies: [ 'Python', 'Tensorflow'],
    popupImageUrlMobile: 'assets/202.png',
    
    popupImageUrlDesktop: ['assets/204.png','assets/205.png','assets/206.png'],
    linkLive: '',
    linkSource: '',
  },
  
  {
    name: 'Hance Cyber Security',
    details: ['Cyber', 'Front End Dev', '2023'],
    smallDescription:
      'Designed a modern and responsive landing page for CyberGuard, a cybersecurity company focused on providing robust security solutions. The landing page showcases their services, client testimonials, and key features to attract potential clients.',
    bigDescription:
      "Developed a visually engaging and user-friendly landing page for CyberGuard, a cybersecurity firm specializing in advanced protection solutions. The design prioritizes clarity and professionalism to instill trust in potential clients, featuring a responsive layout optimized for both desktop and mobile devices. Key elements include a showcase of core services such as threat detection and incident response, complemented by client testimonials that build credibility. Strategically placed call-to-action buttons encourage users to schedule consultations, while SEO optimization enhances visibility in search engine results. The project faced challenges in conveying complex cybersecurity information, which were addressed through user research and design iterations, resulting in a landing page that successfully increased user engagement and generated a significant rise in consultation requests within the first month post-launch.",
    imageUrlMobile: 'assets/302.jpg',
    imageUrlDesktop: 'assets/302.jpg',
    technologiesPopup: ['html', 'Css', 'Javascript', 'Bootstrap'],
    technologies: [ 'Css', 'Javascript', 'Bootstrap'],
    popupImageUrlMobile: 'assets/302.jpg',
    popupImageUrlDesktop: ['assets/304.jpg','assets/305.jpg'],
    linkLive: '',
    linkSource: '',
  },
  
];

function g(e, isClass = false) {
  if (isClass) {
    return document.getElementsByClassName(e)[0];
  }
  return document.getElementById(e);
}

// eslint-disable-next-line no-unused-vars
// function popup(projectIndex) {
//   const project = projects[projectIndex];
//   g('t').innerText = project.name;
//   g('mImage', true).src = project.imageUrlMobile;
//   g('mImageDsk', true).src = project.popupImageUrlDesktop;
  

//   g('modalText', true).innerText = project.bigDescription;
//   g('modalTextMobile', true).innerText = project.smallDescription;
 
//   // Clear existing items in both lists
//   const modalLangItems = document.querySelector('.LangInModal ul');
//   const modalLangItems2 = document.querySelector('.LangInModal2 ul');

//   // Clear both lists before adding new items
//   modalLangItems.innerHTML = ''; // Clear first list
//   modalLangItems2.innerHTML = ''; // Clear second list

//   // Populate both lists with technologiesPopup
//   project.technologiesPopup.forEach((tech, index) => {
//     const li = document.createElement('li');
//     li.className = 'langu2'; // Set the class for each item
//     li.innerText = tech; // Set the text for each item

//     // Append to the first list or second list based on index
//     if (index < 3) { // Assuming the first 3 go to the first list
//       modalLangItems.appendChild(li); // Append to the first list
//     } else {
//       modalLangItems2.appendChild(li); // Append to the second list
//     }
//   });


//   g('myModal').style.display = 'block';
// }
function popup(projectIndex) {
  const project = projects[projectIndex];
  g('t').innerText = project.name;
  g('mImage', true).src = project.imageUrlMobile;
  
  // Handling multiple desktop images
  const desktopImages = project.popupImageUrlDesktop;
  let currentImageIndex = 0;

  const desktopImageElement = g('desktopImage');
  desktopImageElement.src = desktopImages[currentImageIndex]; // Set the first image
  
  // Update modal text
  g('modalText', true).innerText = project.bigDescription;
  g('modalTextMobile', true).innerText = project.smallDescription;
  
  // Handle technologies list
  const modalLangItems = document.querySelector('.LangInModal ul');
  const modalLangItems2 = document.querySelector('.LangInModal2 ul');

  modalLangItems.innerHTML = ''; // Clear first list
  modalLangItems2.innerHTML = ''; // Clear second list

  project.technologiesPopup.forEach((tech, index) => {
    const li = document.createElement('li');
    li.className = 'langu2';
    li.innerText = tech;

    if (index < 3) {
      modalLangItems.appendChild(li);
    } else {
      modalLangItems2.appendChild(li);
    }
  });

  // Show modal
  g('myModal').style.display = 'block';

  // Add navigation functionality for Next and Previous buttons
  document.getElementById('nextBtn').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % desktopImages.length; // Loop to the first image after the last
    desktopImageElement.src = desktopImages[currentImageIndex];
  });

  document.getElementById('prevBtn').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + desktopImages.length) % desktopImages.length; // Loop to the last image if going back from the first
    desktopImageElement.src = desktopImages[currentImageIndex];
  });
}

function init() {
  for (let k = 0; k < projects.length; k += 1) {
    const project = projects[k];
    const template = document.createElement('template');
    const technologies = project.technologies.map(
      (t) => `<li class="langu">${t}</li>`,
    );

    template.innerHTML = `<div class="project-card desktop">
      <div class="mobile-image">
        <img src="${project.imageUrlMobile}" alt="First Card" />
      </div>
      <div class="desktop-image">
        <img src="${project.imageUrlDesktop}" style="width: 544px; height: 448px;" alt="First card-desktop" />
      </div>
      <div class="contents-two">
        <h2 class="head">${project.name}</h2>
        <h4 class="desktop_show">${project.name}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            
            <li class="card-detail dcanopy2_face"> ${project.details[0]}</li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              ${project.details[1]}
            </li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
               ${project.details[2]}
            </li>
          </ul>
          <p class="instruction">${project.smallDescription}</p>
          <p class="instruction-show">${project.smallDescription}</p>
          <div class="language1 inline">
            <ul> ${unescape(technologies.join(''))}</ul>
          </div>
        </div>
        <button type="button" class="btn-one see-project" onclick="popup(${k})">
          See project
        </button>
      </div>
      
    </div>`;

    g('projects').appendChild(template.content.firstChild);
  }
}

const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

// eslint-disable-next-line func-names
span.onclick = function () {
  modal.style.display = 'none';
};

// eslint-disable-next-line func-names
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

window.onload = init();

// Form Validation

const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.contact-form');
const formElement = form.querySelectorAll('input, textarea');

formElement.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
  });
});

document.getElementById('submit').addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const emailValidation = /[A-Z]/.test(email);

  if (emailValidation) {
    errorMessage.style.display = 'block';
    e.preventDefault();
  }
});

// Local-Storage
const clientName = document.getElementById('fname');
const clientEmail = document.getElementById('email');
const clientMessage = document.getElementById('textarea');

function useLocalStorage() {
  const contactFormData = {
    name: clientName.value,
    email: clientEmail.value,
    message: clientMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
}

const formInputs = document.querySelectorAll('input , textarea');
for (let j = 0; j < formInputs.length; j += 1) {
  formInputs[j].addEventListener('change', () => {
    useLocalStorage();
  });
}

const formData = JSON.parse(localStorage.getItem('contactFormData'));
if (formData !== null) {
  clientName.value = formData.name;
  clientEmail.value = formData.email;
  clientMessage.value = formData.message;
}
