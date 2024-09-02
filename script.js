function playAnimation(image_id, spinner_id, filepath)
{
  let img_element = document.getElementById(image_id);
  let spinner_element = document.getElementById(spinner_id);

  spinner_element.style.display = "flex";

  let new_image = new Image();

  new_image.addEventListener("load", () => {
    spinner_element.style.display = "none";
    img_element.style.display = "inline";
  });

  new_image.src = filepath;
  img_element.src = new_image.src;
}

function showStatic(image_id, spinner_id, filepath)
{
  let img_element = document.getElementById(image_id);
  img_element.src = filepath;
}

function displayCards()
{
  const projectsContainer = document.querySelector("#js-projects-container");

  const data = [
    {
      date: "August 2023",
      image: "docs/assets/ppe-for-construction-safety-detection.png",
      anim: "",
      title: "Multiple Personal Protective Equipment for Construction Safety Monitoring System",
      description: "A cloud-based software application that monitors compliance with multiple personal protective equipment for construction safety and delivers reports to safety officers' mobile applications via a lightweight messaging protocol called MQTT.",
      link: "https://github.com/zEuS0390/ppe-for-construction-safety-detection",
    },
    {
      date: "June 2022",
      image: "docs/assets/kaizen-faculty-evaluation-by-zEuS0390.png",
      anim: "docs/assets/kaizen-faculty-evaluation-by-zEuS0390.gif",
      title: "Kaizen Faculty Evaluation",
      description: "A web application that manages the evaluation of faculty members in the computer engineering department at Technological Institute of the Philippines - Quezon City. It was conducted for the faculty members to see their performance based on the requirements provided by the head of the department.",
      link: "https://github.com/zEuS0390/kaizen-faculty-eval",
    },
    {
      date: "August 2021",
      image: "docs/assets/voice-assisted-traffic-sign-detection.png",
      anim: "docs/assets/voice-assisted-traffic-sign-detection.gif",
      title: "AI-Aided Traffic Regulatory and Warning Signs Detection for Driver Awareness",
      description: "A python-based software application that uses state-of-the-art object detection algorithm (YOLO) to detect regulatory and warning traffic signs with automated voice notification system.",
      link: "https://github.com/zEuS0390/python-voice-assisted-traffic-sign-detection",
    },
    {
      date: "May 2020",
      image: "docs/assets/sfml-snake-game-by-zEuS0390.jpg",
      anim: "docs/assets/sfml-snake-game-by-zEuS0390.gif",
      title: "Cyber Serpent",
      description: "Developed a neon-lit snake game project using the SFML library to understand its mechanics and functionalities with data structures and algorithms.",
      link: "https://github.com/zEuS0390/cyber-serpent",
    },
    {
      date: "May 2020",
      image: "docs/assets/sfml-pong-game-by-zEuS0390.png",
      anim: "docs/assets/sfml-pong-game-by-zEuS0390.gif",
      title: "Paddle Dash",
      description: "Developed a pong game project using the SFML library to understand and apply 2D collision detection, movement, and trigonometry for the ball's bounce.",
      link: "https://github.com/zEuS0390/paddle-dash",
    },
    {
      date: "June 2021",
      image: "docs/assets/simple-astar-pathfinding-algorithm-simulation.png",
      anim: "docs/assets/simple-astar-pathfinding-algorithm-simulation.gif",
      title: "A* Pathfinding Algorithm Simulation",
      description: "An A* star pathfinding algorithm simulation in a tilemap scrolling environment made in Python with PyGame Library.",
      link: "https://github.com/zEuS0390/python-simple-astar-simulation",
    },
    {
      date: "August 2019",
      image: "docs/assets/pyqt5-meat-shop-management-system.png",
      anim: "docs/assets/pyqt5-meat-shop-management-system.gif",
      title: "PyQt5 Meat Shop Management System",
      description: "A GUI desktop application for meat shop management that handles the sales and storage of various types of meat products. It performs operations similar to CRUD from scratch without relying on a database management system such as SQLite or MySQL.",
      link: "https://github.com/zEuS0390/python-meat-shop-management-system",
    },
    {
      date: "June 2018",
      image: "docs/assets/pygame-tic-tac-toe-by-zEuS0390.png",
      anim: "docs/assets/pygame-tic-tac-toe-by-zEuS0390.gif",
      title: "PyGame Tic-Tac-Toe Game",
      description: "A simple tic-tac-toe game project made with PyGame in Python that follows the same mechanics of the actual game. It was one of my earliest projects when I started learning programming.",
      link: "https://github.com/zEuS0390/python-tic-tac-toe",
    },
    {
      date: "February 2023",
      image: "docs/assets/batch-script-cpp-tests.png",
      anim: "docs/assets/batch-script-cpp-tests.gif",
      title: "Automating Simple C++ Tests with Batch Script",
      description: "A Windows-based batch testing script designed to execute various test cases on small C++ programs, particularly valuable for instructors and learners. For instance, it can be employed to evaluate homework assignments submitted by students in a classroom setting.",
      link: "https://github.com/zEuS0390/batch-script-cpp-tests",
    },
  ];

  for (let i = 0; i < data.length; ++i)
  {
    // Column
    const columnItem = document.createElement("div");
    columnItem.classList.add(
      "col-lg-4",
      "col-md-6",
      "col-sm-12",
      "d-flex",
      "align-items-stretch",
      "projects-card-anim"
    );

    // Card
    const card = document.createElement("div");
    card.classList.add("card", "bg-dark", "text-white", "my-2", "shadow");

    const cardData = data[i];

    card.innerHTML = `
      <div id="projects-card-header-${i + 1}"
           class="card-header d-flex justify-content-between">
        <div>
          <i class="fas fa-calendar mx-1"></i>
          ${cardData.date}
        </div>
        <div>
          <a href="#"><i class="fa fa-ellipsis-v mx-1 text-white"></i></a>
        </div>
      </div>
      <div class="projects-card-image-group">
        <div id="projects-card-spinner-item-${
          i + 1
        }" class="projects-card-spinner">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <img id="projects-card-${i + 1}"
            src="${cardData.image}"
            class="card-img-top"
            alt="..."
            ondragstart="return false;"
            oncontextmenu="return false;"
            onmouseenter="playAnimation(
              'projects-card-${i + 1}',
              'projects-card-spinner-item-${i + 1}', '${cardData.anim}'
             )"
             onmouseout="showStatic(
              'projects-card-${i + 1}',
              'projects-card-spinner-item-${i + 1}',
              '${cardData.image}'
             )">
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">${cardData.title}</h5>
        <hr>
        <p class="card-text"
           style="text-indent: 25px; text-align: justify; text-justify: inter-word;">
          ${cardData.description}
        </p>
      </div>
      <a href="${cardData.link}"
         target="_blank"
         rel="noopener noreferrer"
         class="btn btn-secondary m-3 shadow card-btn">
        See More
      </a>
    `;

    columnItem.appendChild(card);
    projectsContainer.appendChild(columnItem);
  }
}

displayCards();
