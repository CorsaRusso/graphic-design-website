// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedin from "./images/linkedin.svg"
import leroi from "./images/leroi.png"
import sixbits from "./images/6ixBits.png"
import about from "./images/about.png"
import infocus from"./images/infocus.png"
import isometric from"./images/isometric.jpg"
import intel from"./images/intel.png"
import global from"./images/Global_dev.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Justin Gu",
  headerTagline: [
    //Line 1 For Header
    "I make branding,",
    //Line 2 For Header
    "graphic design,",
    //Line 3 For Header
    "and cool projects.",
  ],
  //   Header Paragraph
  headerParagraph:
    "Check out some of my work below:",

  //Contact Email
  contactEmail: "itsjustingu@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "6ixBits Hackathon", //Project Title - Add Your Project Title Here
      para:
        "Designed and branded the Hackathon 6ixBits by the Toronto Youth Network. Created branding, sponsorship packages, and social media posts using Illustrator, Indesign, and Photoshop.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: sixbits,
      //Project URL - Add Your Project Url Here
      url: "https://torontoyouthnetwork.com/6ixbits",
    },
    {
      title: "LeRoi Robotics", //Project Title - Add Your Project Title Here
      para:
        "Edited and created an infographic video for my robotics team. Used Illustrator to create the designs, and animatedthe animations with After Effects.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: leroi,
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=53xpT4EiF6M&ab_channel=LeoXie",
    },
    {
      title: "Global Development Engineering Club", //Project Title - Add Your Project Title Here
      para:
        "Created social media posts for specific weekly design challenges using Photoshop. New designs were created every week.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        global,
      //Project URL - Add Your Project Url Here
      url: "https://www.instagram.com/str.globaldev/",
    },
    {
      title: "Intel Inspires Design Contest", //Project Title - Add Your Project Title Here
      para:
        "I was the winner of Intel Inspires: a contest hosted by AVGL and sponsored by Intel and MSI. I created a design for a T-Shirt using Photoshop and send several mock-ups to the judges.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: intel,
      //Project URL - Add Your Project Url Here
      url: "https://avgl.org/intel-inspires",
    },
    {
      title: "In Focus Contest Design Contest", //Project Title - Add Your Project Title Here
      para:
        "I designed a poster on Adobe Illustrator raising awareness for ocean and water pollution. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: infocus,
      //Project URL - Add Your Project Url Here
      url: "https://www.worldinfocus.ca/in-focus-contest-2021",
    },
    {
      title: "Exploring Isometric Art", //Project Title - Add Your Project Title Here
      para:
        "I used a combination of Google Earth, Adobe Illustrator and Adobe Photoshop to create an Isometric model of my school, St. Robert CHS.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: isometric,
      //Project URL - Add Your Project Url Here
      url: "https://avgl.org/highschoolesports/27149/events/rules",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hey there, I’m Justin Gu. I love crafting meaningful yet elegant designs. Creating something is all about making an impact— my approach to graphic design has consistently revolved around this state-of-mind. ",
  aboutParaTwo:
    "My interest in web development began in 2017 when I learned Photoshop and started creating various side projects, and it has since then become a full-blown passion. I have won numerous graphic design competitions sponsored by companies such as Intel, MSI, AMD, and AVGL. Notably, my design has even been featured on a MSCHF billboard.",
  aboutParaThree:
    "Fast-forwarding to my latest projects, I served as lead designer for LeRoi Robotics team 81208x, the 2021 VEX Robotics Skills Champion. As a director of the Toronto Youth Network, I launched the 6ixBits hackathon, attracting 300 participants globally. As the past president of Global Development, I have had the privilege of partnering with the University of Toronto as well as Engineers without borders, pushing forward numerous initiatives that I hope have done their part in inspiring youths like me towards careers in STEM. ",
  aboutParaFour:
  "Currently, I would like to work on impact-driven projects, interacting with like-minded people to expand my graphic design skill set. Through my designs, I hope to one day have an impact on the global community. ",
  aboutImage: about,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "I've been using Adobe Illustrator since 2019 and now choose to create most of my designs on it because of the various applications of vector graphics. A side effect of working on Illustrator is my efficiency in using the Pen Tool which is widely used in a variety of applications outside of Adobe Suite.",
    },
    {
      img: cssIcon,
      para:
        "I've been using Adobe Photoshop since 2017 and now use it to create mockups and paintings. It's also an extremely powerful tool for finishing touches on my works done in Illustrator.",
    },
    {
      img: jsIcon,
      para:
        "I've been using Adobe After Effects since 2019 and now use it to create motion graphics and animations for my vector. It has allowed me to be quite proficient in keyframe animations, a skill I found useful in CSS animations and game engines as well.",
    },

  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/CorsaRusso" },
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/j-gu/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/juust_juustin/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
