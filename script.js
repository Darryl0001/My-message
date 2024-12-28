import { generateFlower, removeFlowers } from './flower.js';
import { showImage } from './image.js';

let currentIndex = 0

const Message = [
  // Case 0
  [
    { msg: "Hiii Jamaica/memet", extraClass: 'cursor typewriter-animation' },
    { msg: "I have something to tell you", extraClass: 'importantTxt' }
  ],
  // Case 1
  [
    { msg: "Asa ra gud ng kakapoy", extraClass: 'cursor typewriter-animation' },
    { msg: "Ug ikaw permi akong gipangandoy", extraClass: 'bigJoke a' },
    { msg: "Kabantay ka kusog kaayung ulan?", extraClass: 'b' },
    { msg: "Pero murag waka kabantay nga ikaw ang gipitik ning akong dughan", extraClass: 'bigJoke c' }
  ],
  // Case 2
  [
    { msg: "Sugot ka imoha nanang milo.", extraClass: '' },
    { msg: "Pero ako naka everyday.", extraClass: 'aa' },
    { msg: "Pero ayawg kabalaka kay ang akong gugma naa ra kanimo", extraClass: 'bb' }
  ],
  // Case 3
  [
    { msg: "Memet, unsaon ba nako pag-ingon nga lain kaayo ka?", extraClass: 'aaa' },
    { msg: "Kay bisan pa sa kalibutan nga puno sa kasamok, ikaw ang akong kalinaw, akong paglaom, akong gugma.", extraClass: 'bigJoke bbb' }
  ],
  // Case 4
  [
    { msg: "HAHAHA kalain, nilabaw pa's Ginoo.", extraClass: 'a4' },
    { msg: "Ang tinuod diay niana kay tungod ra diay sa gugma sa Ginoo maong anaa ka.", extraClass: 'b4' },
    { msg: "Ug tungod pud sa na Gugma ni papa Jojo ug ni mama Angely.", extraClass: 'c4' },
    { msg: "BWHAHAHA bagaa.", extraClass: 'bigJoke d4' }
  ],
  // Case 5
  [
    { msg: "You know what I like you the most?", extraClass: 'a5' },
    { msg: "Coz you're like Proverbs 31:30 that says,", extraClass: 'b5' },
    { msg: "Charm is deceptive, and beauty is fleeting, but a woman who fears the Lord is to be praised.", extraClass: 'bigJoke c5' },
    { msg: "And in verse 10 that says,", extraClass: 'd5' },
    { msg: "She is more precious than RUBIES.", extraClass: 'bigJoke e5' }
  ],
  // Case 6 (Final Case)
  [
    { msg: "My question is...", extraClass: '' },
    { msg: "Would it be okay if I started pursuing you with respect and intention?", extraClass: 'a6' },
    { msg: "Take your time to answer this... no pressure.", extraClass: 'b6' }
  ]
];

const container = document.querySelector(".container");
const txtContainer = document.querySelector(".text_container");
const nxtBtn = document.querySelector('.btn_next');

const handleSlides = () => {
  switch (currentIndex) {
    case 0:
      GenerateText('txt_message');
      InitialHide(['btn_next', 'importantTxt'], [2000, 2000]);
      break;
    case 1:
      removeFlowers();
      generateFlower();
      GenerateText('joke_txt');
      showImage('./img/image1.jpeg');
      NewBtn('Next');
      InitialHide(['a', 'b', 'c', 'image', 'btn_next'], [2000, 3000, 4000, 5000, 6000]);
      break;
    case 2:
      removeFlowers();
      generateFlower();
      GenerateText('joke_txt');
      showImage('./img/image2.jpeg');
      NewBtn('Next');
      InitialHide(['aa', 'bb', 'image', 'btn_next'], [1000, 2000, 3000, 5000]);
      break;
    case 3:
      removeFlowers();
      GenerateText('joke_txt');
      showImage('./img/Image3.jpg');
      NewBtn('Next');
      InitialHide(['aaa', 'bbb', 'image', 'btn_next'], [2000, 3000, 4000, 5000]);
      break;
    case 4:
      removeFlowers();
      GenerateText('joke_txt');
      NewBtn('Next');
      InitialHide(['a4', 'b4', 'c4', 'd4', 'btn_next', 'btn_next'], [2000, 3000, 4000, 5000, 6000]);
      break;
    case 5:
      removeFlowers();
      GenerateText('joke_txt');
      NewBtn('Next');
      InitialHide(['a5', 'b5', 'c5', 'd5', 'e5', 'btn_next'], [2000, 3000, 4000, 6500, 8000]);
      break;
    case 6: // New case for the final messages
      GenerateText('final_message');
      generateIframe(); // Call the iframe generation function
      NewBtn('Done');
      InitialHide(['a6','b6','iframe-container', 'btn_next'], [1500, 2500,3000, 3000000]);
      break;
    default:
      console.log("No more slides available.");
  }
};

const GenerateText = (classname) => {
  txtContainer.innerHTML = ``;
  for (let i = 0; i < Message[currentIndex].length; i++) {
    const text = document.createElement("p");
    text.textContent = Message[currentIndex][i].msg;

    text.classList.add(classname);

    if (Message[currentIndex][i].extraClass) {
      Message[currentIndex][i].extraClass.split(' ').forEach(className => {
        text.classList.add(className);
      });
    }
    
    txtContainer.appendChild(text);
    
    // Handle timing for case 6 based on the extra value
    if (currentIndex === 6) {
      const delay = Message[currentIndex][i][1] * 1000; // converting to milliseconds
      setTimeout(() => {
        text.classList.add('visible'); // Make the text appear after the delay
      }, delay);
    }
  }
};

// Function to generate the iframe for Google Forms
const generateIframe = () => {
  const iframeContainer = document.createElement('div');
  iframeContainer.classList.add('iframe-container');

  // Add CSS to center the iframe container
  iframeContainer.style.display = 'flex';
  iframeContainer.style.justifyContent = 'center';
  iframeContainer.style.alignItems = 'center';
  iframeContainer.style.width = '100%';
  iframeContainer.style.height = '100%';

  const iframe = document.createElement('iframe');
  iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSdxQxpXDdn9DnyHbmwSlnMe9UzxcsCyyjL_ebEaLsLNGFdl_A/viewform?embedded=true";
  iframe.width = "280";  
  iframe.height = "466";  
  iframe.frameborder = "0";
  iframe.marginheight = "0";
  iframe.marginwidth = "0";
  iframe.textContent = "Loading…";

  iframeContainer.appendChild(iframe);
  container.appendChild(iframeContainer);
};

const InitialHide = (classNames, durations) => {
  classNames.forEach((className, index) => {
    const elements = document.querySelectorAll(`.${className}`);
    const duration = durations[index];
    elements.forEach(element => {
      element.classList.add('hidden');
      setTimeout(() => {
        element.classList.remove('hidden');
        element.classList.add('visible');
      }, duration);
    });
  });
};

const NewBtn = (buttonText) => {
  const oldBtnContainer = document.querySelector('.btn_container');
  if (oldBtnContainer) {
    oldBtnContainer.remove();
  }

  const newBtnContainer = document.createElement('div');
  newBtnContainer.classList.add('btn_container');

  const newBtn = document.createElement('button');
  newBtn.classList.add('btn_next');
  newBtn.textContent = buttonText;

  newBtnContainer.appendChild(newBtn);
  container.appendChild(newBtnContainer);

  newBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= Message.length) {
        currentIndex = 0;
    }
    
    handleSlides();
    toggleBackButtonVisibility()
});
};
nxtBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= Message.length) {
        currentIndex = 0;
    }
    handleSlides();
    toggleBackButtonVisibility()
});

// Event listener for the 'back_btn'
const backBtn = document.querySelector('.back_btn'); // Make sure you have a button with class 'back_btn'

backBtn.addEventListener('click', () => {
    currentIndex--;

    // Check if currentIndex is less than 0
    if (currentIndex < 0) {
        currentIndex = Message.length - 1; // Reset to the last case (Message.length - 1)
    }

    handleSlides(); // Call to update the slides with the new currentIndex
    toggleBackButtonVisibility()
});

const toggleBackButtonVisibility = () => {
  if (currentIndex === 0) {
    backBtn.style.display = 'none'; // Hide the back button at the first slide
  } else {
    backBtn.style.display = 'inline-block'; // Show it for other slides
  }
};

// Call the function to ensure correct visibility when initializing
toggleBackButtonVisibility();

handleSlides();

