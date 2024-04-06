class UserInterface {
  constructor(player, coinSpawner) {
    this.player = player;
    this.coinSpawner = coinSpawner;
    this.isOptionsOpen = false;
    // Elements **************************************************************************************************************
    this.introScreen;
    this.nameText;
    this.options;
    this.accLabel;
    this.decelLabel;
    this.turnSpeedLabel;
    this.particleCountLabel;
    this.accInput;
    this.decelInput;
    this.turnSpeedInput;
    this.particleCountInput;
    this.optionsContainer;
    this.optionsIconWrapper;
    this.optionsIconTop;
    this.optionsIconBottom;
    this.scoreContainer;
    this.scoreWrapper;
    this.scoreTextTitle;
    this.highScoreTextTitle;
    this.scoreTextResults;
    this.highScoreTextResults;
    this.highScoreRecordWrapper;
    this.highScoreRecordTitle;
    this.isNewHighScore = false;
    this.init();
    this.menuHandler(this.isOptionsOpen);
  }
  init() {
    this.initHeader();
    this.initElements();
    this.initScreenOptions();
    this.initEvents();
  }
  initHeader() {
    document.title =
      "Luca Novello | Seneca College of Applied Arts & Technology";
    let head = document.querySelector("head");
    let style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "./style.css");
    head.appendChild(style);
    let favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    favicon.setAttribute("href", "favicon.png");
    favicon.setAttribute("type", "image/x-icon");
    head.appendChild(favicon);
  }
  initElements() {
    // Create Intro Fade In Screen element **************************************************************************************************************
    this.addElement("div", document.body, ``, "intro-screen", "intro-screen");
    // Create Main Text element **************************************************************************************************************
    this.addElement(
      "div",
      document.body,
      `<h1 class="seneca-text">Seneca College of Applied Arts & Technology</h1>
      <h2 class="name-text">Welcome to <span class="name-wrapper"><span class="name" id="name">lucaNovello</span>'s</span> Website</h2>`,
      "text-container",
      "text-container"
    );
    // Create Scoreboard element **************************************************************************************************************
    this.addElement(
      "div",
      document.body,
      `<div class="score-wrapper" id="score-wrapper">
        <div class="score-text-wrapper" id="score-text-wrapper">
          <p class="score-text-title" id="score-text-title">Score:</p>
          <span class="score-text-results" id="score-text-results">0</span>
        </div>
        <div class="high-score-text-wrapper">
          <p class="high-score-text-title" id="high-score-text-title" title="Click to reset high score">Record:</p>
          <p class="high-score-text-results" id="high-score-text-results">0</p>
        </div>
      </div>
      <div class="high-score-record-wrapper" id="high-score-record-wrapper">
        <p class="high-score-record-title" id="high-score-record-title" >New Record</p>
      </div>`,
      "score-container",
      "score-container"
    );
    // Create Options Button element **************************************************************************************************************
    this.addElement(
      "button",
      document.body,
      `<span class="options-icon-top" id="options-icon-top" data-group="options"></span>
      <span class="options-icon-bottom" id="options-icon-bottom" data-group="options"></span>`,
      "options-icon-wrapper",
      "options-icon-wrapper",
      "options"
    );
    // Create Option Menu element **************************************************************************************************************
    this.addElement(
      "div",
      document.body,
      `<div class="option-settings-wrapper" data-group="options">
      <div class="form-row" data-group="options">
        <label for="acc" id="acc-label" data-group="options">Acceleration: </label>
        <input type="range" name="acc" id="acc-input" data-group="options" />
      </div>
      <div class="form-row" data-group="options">
        <label for="decel" id="decel-label" data-group="options">Deceleration: </label>
        <input type="range" name="decel" id="decel-input" data-group="options" />
      </div>
      <div class="form-row" data-group="options">
        <label for="turnspeed" id="turnspeed-label" data-group="options">TurnSpeed: </label>
        <input type="range" name="turnspeed" id="turnspeed-input" data-group="options" />
      </div>
      <div class="form-row" data-group="options">
        <label for="particle-count" id="particle-count-label" data-group="options">Particles: </label>
        <input type="range" name="particle-count" id="particle-count-input" min="1" max="50" step="1" value="5" data-group="options" />
      </div>
    </div>
    <div class="option-controls-wrapper" data-group="options">
        <p class="controls-title" data-group="options">Controls</p>
        <ul class="controls-list" data-group="options">
          <li class="controls-list-item" data-group="options">
            <span class="controls-list-left-wrapper" data-group="options">
              <p class="controls-list-left-char" data-group="options">W</p>
              or
              <p class="controls-list-left-char" data-group="options">&#8593;</p>
            </span>
            <span class="controls-list-right-wrapper" data-group="options">
              <p data-group="options">Forward</p>
            </span>
          </li>
          <li class="controls-list-item" data-group="options">
            <span class="controls-list-left-wrapper" data-group="options">
              <p class="controls-list-left-char" data-group="options">S</p>
              or
              <p class="controls-list-left-char" data-group="options">&#8595;</p>
            </span>
            <span class="controls-list-right-wrapper" data-group="options">
              <p data-group="options">Reverse</p>
            </span>
          </li>
          <li class="controls-list-item" data-group="options">
            <span class="controls-list-left-wrapper" data-group="options">
              <p class="controls-list-left-char" data-group="options">A</p>
              or
              <p class="controls-list-left-char" data-group="options">&#8592;</p>
            </span>
            <span class="controls-list-right-wrapper" data-group="options">
              <p data-group="options">Rotate &#8634;</p>
            </span>
          </li>
          <li class="controls-list-item" data-group="options">
            <span class="controls-list-left-wrapper" data-group="options">
              <p class="controls-list-left-char" data-group="options">D</p>
              or
              <p class="controls-list-left-char" data-group="options">&#8594;</p>
            </span>
            <span class="controls-list-right-wrapper" data-group="options">
              <p data-group="options">Rotate &#8635;</p>
            </span>
          </li>
          <li class="controls-list-item" data-group="options">
            <span class="controls-list-left-wrapper" data-group="options">
              <p class="controls-list-left-word" data-group="options">Shift</p>
            </span>
            <span class="controls-list-right-wrapper" data-group="options">
              <p data-group="options">Turbo</p>
            </span>
          </li>
          <li class="controls-list-item" data-group="options">
            <span class="controls-list-left-wrapper" data-group="options">
              <p class="controls-list-left-word" data-group="options">Space</p>
            </span>
            <span class="controls-list-right-wrapper" data-group="options">
              <p data-group="options">Dash</p>
            </span>
          </li>
        </ul>
    </div>`,
      "options-container",
      "options-container",
      "options"
    );
    this.introScreen = document.getElementById("intro-screen");
    this.nameText = document.getElementById("name");
    this.options = document.getElementById("options");
    this.accLabel = document.getElementById("acc-label");
    this.decelLabel = document.getElementById("decel-label");
    this.turnSpeedLabel = document.getElementById("turnspeed-label");
    this.particleCountLabel = document.getElementById("particle-count-label");
    this.accInput = document.getElementById("acc-input");
    this.decelInput = document.getElementById("decel-input");
    this.turnSpeedInput = document.getElementById("turnspeed-input");
    this.particleCountInput = document.getElementById("particle-count-input");
    this.optionsContainer = document.getElementById("options-container");
    this.optionsIconWrapper = document.getElementById("options-icon-wrapper");
    this.optionsIconTop = document.getElementById("options-icon-top");
    this.optionsIconBottom = document.getElementById("options-icon-bottom");
    this.scoreContainer = document.getElementById("score-container");
    this.scoreWrapper = document.getElementById("score-wrapper");
    this.scoreTextTitle = document.getElementById("score-text-title");
    this.highScoreTextTitle = document.getElementById("high-score-text-title");
    this.scoreTextResults = document.getElementById("score-text-results");
    this.highScoreTextResults = document.getElementById(
      "high-score-text-results"
    );
    this.highScoreRecordWrapper = document.getElementById(
      "high-score-record-wrapper"
    );
    this.highScoreRecordTitle = document.getElementById(
      "high-score-record-title"
    );
  }
  initScreenOptions() {
    // Acceleration option **************************************************************************************************************
    this.accInput.min = this.player.acc.min * this.player.acc.normMultiplier;
    this.accInput.max = this.player.acc.max * this.player.acc.normMultiplier;
    this.accInput.step = this.player.acc.step * this.player.acc.normMultiplier;
    this.accInput.value =
      this.player.acc.value * this.player.acc.normMultiplier;
    // Deceleration option **************************************************************************************************************
    this.decelInput.min =
      this.player.decel.min * this.player.decel.normMultiplier;
    this.decelInput.max =
      this.player.decel.max * this.player.decel.normMultiplier;
    this.decelInput.step =
      this.player.decel.step * this.player.decel.normMultiplier;
    this.decelInput.value =
      this.player.decel.value * this.player.decel.normMultiplier;
    // Turn Speed option **************************************************************************************************************
    this.turnSpeedInput.min =
      this.player.turnSpeed.min * this.player.turnSpeed.normMultiplier;
    this.turnSpeedInput.max =
      this.player.turnSpeed.max * this.player.turnSpeed.normMultiplier;
    this.turnSpeedInput.step =
      this.player.turnSpeed.step * this.player.turnSpeed.normMultiplier;
    this.turnSpeedInput.value =
      this.player.turnSpeed.value * this.player.turnSpeed.normMultiplier;
    // Particle Count option **************************************************************************************************************
    this.particleCountInput.value = this.player.particleCountDefaultValue;
  }
  initEvents() {
    // Window Event **************************************************************************************************************
    window.addEventListener("load", (e) => {
      this.player.isParticleOn = true;
      this.player.createParticle(this.player.particleCount);
      this.player.isEngineOn = true;
      this.introScreenFade();
    });
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    // Touch Events **************************************************************************************************************
    window.addEventListener("touchmove", (e) => {
      mouse.isMobileControl = true;
      if (e.target.dataset.group != "options") {
        mouse.touchendX = e.changedTouches[0].clientX;
        mouse.touchendY = e.changedTouches[0].clientY;
        mouse.touchDiffX = mouse.touchendX - mouse.touchstartX;
        mouse.touchDiffY = mouse.touchendY - mouse.touchstartY;
        mouse.update(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    });
    window.addEventListener("touchstart", (e) => {
      if (e.target.dataset.group != "options") {
        mouse.shouldDraw = true;
      }
      mouse.isMobileControl = true;
      if (e.target.dataset.group != "options") {
        mouse.touchstartX = e.changedTouches[0].clientX;
        mouse.touchstartY = e.changedTouches[0].clientY;
        mouse.update(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    });
    window.addEventListener("touchend", (e) => {
      mouse.shouldDraw = false;
      mouse.context.clearRect(0, 0, mouse.canvas.width, mouse.canvas.height);
      mouse.isMobileControl = false;
      mouse.touchendX = e.changedTouches[0].clientX;
      mouse.touchendY = e.changedTouches[0].clientY;
      mouse.touchstartX = undefined;
      mouse.touchstartY = undefined;
      if (e.target.dataset.group != "options") {
        mouse.touchDiffX = 0;
        mouse.touchDiffY = 0;
        mouse.update(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    });
    this.accInput.addEventListener("wheel", (e) => {
      this.onWheelHandler(e, this.accInput, 1);
    });
    this.decelInput.addEventListener("wheel", (e) => {
      this.onWheelHandler(e, this.decelInput, 1);
    });
    this.turnSpeedInput.addEventListener("wheel", (e) => {
      this.onWheelHandler(e, this.turnSpeedInput, 1);
    });
    this.particleCountInput.addEventListener("wheel", (e) => {
      this.onWheelHandler(e, this.particleCountInput, 1);
    });
    this.optionsIconWrapper.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.menuHandler(!this.isOptionsOpen);
    });
    this.optionsIconWrapper.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.menuHandler(!this.isOptionsOpen);
    });
    this.highScoreTextTitle.addEventListener("mousedown", () => {
      this.player.updateHighScore(this.player.score);
    });
    window.addEventListener("mousedown", (e) => {
      if (e.target.dataset.group != "options") {
        this.menuHandler(false);
      }
    });
  }
  update() {
    this.updateText();
    this.updateOptions();
  }
  updateText() {
    const backdropFilter = `blur(7px) saturate(0.2) opacity(1)`;
    const border = `2px ridge hsl(${this.player.hue},
      ${this.player.saturation}%,
      ${this.player.brightness + 20}%)`;
    const background = `hsla(${this.player.hue}, ${this.player.saturation}%, ${
      this.player.brightness + 30
    }%, 0.1)`;
    // Change name color **************************************************************************************************************
    this.nameText.style.color = `hsl(${this.player.hue}, 100%, 50%)`;
    // update score and record **************************************************************************************************************
    this.scoreTextResults.innerText = this.player.score;
    this.highScoreTextResults.innerHTML = `${this.player.highScore}`;
    // update name color **************************************************************************************************************
    // this.scoreTextTitle.style.color = `hsl(${this.player.hue}, 100%, 50%)`;
    // this.highScoreTextTitle.style.color = `hsl(${this.player.hue}, 100%, 50%)`;
    // update scoreboard border and bg colors **************************************************************************************************************
    this.scoreWrapper.style.border = border;
    this.scoreWrapper.style.borderRadius = `6px`;
    this.scoreWrapper.style.background = background;
    this.scoreWrapper.style.backdropFilter = backdropFilter;
    this.scoreWrapper.style["-webkit-backdrop-filter"] = backdropFilter;
    // update highscoreboard border and bg colors **************************************************************************************************************
    this.highScoreRecordWrapper.style.border = border;
    this.highScoreRecordWrapper.style.borderRadius = `6px`;
    this.highScoreRecordWrapper.style.background = background;
    this.highScoreRecordWrapper.style.filter = `opacity(0)`;
    this.highScoreRecordWrapper.style.backdropFilter = backdropFilter;
    this.highScoreRecordWrapper.style["-webkit-backdrop-filter"] =
      backdropFilter;
    // Display New Record Handler **************************************************************************************************************
    if (this.player.score > 0 && this.isNewHighScore) {
      this.highScoreRecordWrapper.style.filter = `opacity(1)`;
      // this.scoreWrapper.style.borderBottom = `none`;
      // this.scoreWrapper.style.borderRadius = `6px 6px 0 0`;
      this.highScoreRecordWrapper.style.animation =
        "flash 0.3s linear infinite alternate";
    }
  }
  updateOptions() {
    this.accLabel.innerHTML = `Acceleration: <span>${this.accInput.value}</span>`;
    this.decelLabel.innerHTML = `Deceleration: <span>${this.decelInput.value}</span>`;
    this.turnSpeedLabel.innerHTML = `TurnSpeed: <span>${this.turnSpeedInput.value}</span>`;
    this.particleCountLabel.innerHTML = `Particles: <span>${this.particleCountInput.value}</span>`;
  }
  addElement(
    type = "div",
    parent = document.body,
    innerHTML = null,
    className = null,
    id = className,
    dataGroup = null
  ) {
    const newDiv = document.createElement(type);
    className != null && (newDiv.className = className);
    id != null && (newDiv.id = id);
    dataGroup != null && newDiv.setAttribute("data-group", dataGroup);
    innerHTML != null && (newDiv.innerHTML = innerHTML);
    parent.appendChild(newDiv);
  }
  menuHandler(isOptionsOpen) {
    this.isOptionsOpen = isOptionsOpen;
    if (!this.isOptionsOpen) {
      this.optionsIconTop.classList.remove("options-icon-top-close");
      this.optionsIconBottom.classList.remove("options-icon-bottom-close");
      this.optionsContainer.classList.remove("options-container-closed");
    } else {
      this.optionsIconTop.classList.add("options-icon-top-close");
      this.optionsIconBottom.classList.add("options-icon-bottom-close");
      this.optionsContainer.classList.add("options-container-closed");
    }
  }
  onWheelHandler(e, element, increment) {
    if (e.wheelDeltaY > 0)
      element.value = parseFloat(element.value) + increment;
    if (e.wheelDeltaY < 0)
      element.value = parseFloat(element.value) - increment;
  }
  introScreenFade() {
    this.introScreen.style.backgroundColor = `black`;
    this.introScreen.style.backdropFilter = `blur(20px)`;
    this.introScreen.style["-webkit-backdrop-filter"] = `blur(20px)`;
    this.introScreen.style.animation = `fade-blur 3s ease-in-out 1 forwards,
    fade-bg 2.5s ease-in-out 1 forwards`;
    this.player.isEngineOn = false;
    const timeout =
      parseInt(getComputedStyle(this.introScreen).animationDuration) * 1000;
    this.player.isParticleOn = false;
    setTimeout(() => {
      this.player.isParticleOn = true;
      setTimeout(() => {
        this.player.isParticleOn = false;
      }, timeout * 0.05);
      setTimeout(() => {
        this.player.isParticleOn = true;
      }, timeout * 0.1);
      setTimeout(() => {
        this.player.isParticleOn = false;
      }, timeout * 0.15);
      setTimeout(() => {
        this.player.isParticleOn = true;
      }, timeout * 0.2);
      setTimeout(() => {
        this.player.isParticleOn = false;
      }, timeout * 0.25);
      setTimeout(() => {
        this.player.isParticleOn = true;
      }, timeout * 0.4);
    }, timeout * 0.8);
    setTimeout(() => {
      this.introScreen.remove();
    }, timeout);
    setTimeout(() => {
      this.player.createParticle(this.player.particleCount);
      this.player.isEngineOn = true;
      this.coinSpawner.createCoins();
    }, timeout * 1.3);
  }
}
class Player {
  constructor(x, y) {
    // Canvases & Contexts **************************************************************************************************************
    this.canvas;
    this.context;
    this.particleCanvas;
    this.particleContext;
    // Movement, Speed & Size **************************************************************************************************************
    this.x = x;
    this.y = y;
    this.radius = 9;
    this.vel = { x: 0, y: 0 };
    this.acc = {
      min: 0.1,
      max: 10,
      step: 0.1,
      value: 0.6,
      normMultiplier: 10,
    };
    this.decel = {
      min: 0.01,
      max: 1,
      step: 0.01,
      value: 0.1,
      normMultiplier: 100,
    };
    this.turnSpeed = {
      min: 0.005,
      max: 0.5,
      step: 0.005,
      value: 0.08,
      normMultiplier: 200,
    };
    this.moves = {
      dashRate: 30,
      dash: 1,
      isDashing: false,
      dashTime: 10,
      dashDelay: 200,
      brake: 1,
      turboRate: 2,
      turbo: 1,
    };
    this.angle = 0;
    this.up = 0;
    this.down = 0;
    this.left = 0;
    this.right = 0;
    this.direction = { x: 0, y: 0 };
    this.particleCountDefaultValue = 20;
    this.particleArr = [];
    this.particleCount = this.particleCountDefaultValue;
    this.isEngineOn = false;
    this.isParticleOn = false;
    // Stats **************************************************************************************************************
    this.score = 0;
    this.highScore = 0;
    // Color & Style **************************************************************************************************************
    this.hue = Math.random() * 359;
    this.hueAdjust = 10;
    this.saturation = getRandomRange(75, 90);
    this.brightness = getRandomRange(35, 50);
    this.alpha = 1;
    this.lineWidth = 1;
    this.hueIncrement = 0.05;
    this.init();
  }
  init() {
    this.initCanvas();
    this.initEvents();
  }
  initCanvas() {
    // Initialize Particle Canvas **************************************************************************************************************
    const particleCanvas = document.createElement("canvas");
    const particlectx = particleCanvas.getContext("2d");
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    particleCanvas.id = "canvas-particles";
    document.body.appendChild(particleCanvas);
    this.particleCanvas = particleCanvas;
    this.particleContext = particlectx;
    // Initialize Player Canvas **************************************************************************************************************
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = "canvas-player";
    document.body.appendChild(canvas);
    this.canvas = canvas;
    this.context = ctx;
    // Get highscore from local storage **************************************************************************************************************
    if (localStorage.getItem("highScore") > this.highScore) {
      this.highScore = localStorage.getItem("highScore");
    } else {
      localStorage.setItem("highScore", `${this.highScore}`);
    }
  }
  initEvents() {
    // Window Event **************************************************************************************************************
    window.addEventListener("resize", () => {
      this.resize(window.innerWidth, window.innerHeight);
    });
    // Key Events **************************************************************************************************************
    window.addEventListener("keydown", (e) => {
      // e.preventDefault();
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          this.up = 1;
          break;
        case "KeyS":
        case "ArrowDown":
          this.down = 1;
          break;
        case "KeyA":
        case "ArrowLeft":
          this.left = 1;
          break;
        case "KeyD":
        case "ArrowRight":
          this.right = 1;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.moves.turbo = this.moves.turboRate;
          break;
        case "Space":
          this.dashHandler(e);
          break;
        default:
          break;
      }
    });
    window.addEventListener("keyup", (e) => {
      // e.preventDefault();
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          this.up = 0;
          break;
        case "KeyS":
        case "ArrowDown":
          this.down = 0;
          break;
        case "KeyA":
        case "ArrowLeft":
          this.left = 0;
          break;
        case "KeyD":
        case "ArrowRight":
          this.right = 0;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.moves.turbo = 1;
          break;
        // case "Space":
        //   this.moves.brake = 1;
        //   break;
        default:
          break;
      }
    });
  }
  update(mouse, userInterface, coinSpawner) {
    this.updateAttributes(userInterface);
    if (this.isEngineOn) {
      this.updateMovement(mouse);
    } else {
    }
    if (this.isParticleOn) {
      this.createParticle(this.particleCount);
    }
    if (coinSpawner.coinArr.length > 0) {
      this.checkCollision(coinSpawner);
    }
    this.screenWrap();
  }
  updateAttributes(userInterface) {
    this.acc.value = userInterface.accInput.value / this.acc.normMultiplier;
    this.decel.value =
      userInterface.decelInput.value / this.decel.normMultiplier;
    this.turnSpeed.value =
      userInterface.turnSpeedInput.value / this.turnSpeed.normMultiplier;
    this.particleCount = userInterface.particleCountInput.value;
  }
  updateMovement(mouse) {
    if (mouse.isMobileControl === true) {
      if (
        mouse.touchDiffX < -mouse.touchDeadzoneX ||
        mouse.touchDiffX > mouse.touchDeadzoneX ||
        mouse.touchDiffY < -mouse.touchDeadzoneY ||
        mouse.touchDiffY > mouse.touchDeadzoneY
      ) {
        this.angle = Math.atan2(
          mouse.touchendY - mouse.touchstartY,
          mouse.touchendX - mouse.touchstartX
        );
        this.direction.x =
          Math.abs(mouse.touchDiffX) / (this.canvas.height * 0.1);
        this.direction.y =
          Math.abs(mouse.touchDiffY) / (this.canvas.height * 0.1);
      }
      this.direction.x > 1 && (this.direction.x = 1);
      this.direction.x < -1 && (this.direction.x = -1);
      this.direction.y > 1 && (this.direction.y = 1);
      this.direction.y < -1 && (this.direction.y = -1);
      this.vel.x +=
        Math.cos(this.angle) *
          this.direction.x *
          this.acc.value *
          this.moves.turbo *
          this.moves.brake -
        this.vel.x * this.decel.value;
      this.vel.y +=
        Math.sin(this.angle) *
          this.direction.y *
          this.acc.value *
          this.moves.turbo *
          this.moves.brake -
        this.vel.y * this.decel.value;
    } else {
      this.direction.x = this.right - this.left;
      this.direction.y = this.up - this.down;
      this.angle += this.direction.x * this.turnSpeed.value;
      this.vel.x +=
        Math.cos(this.angle) *
          this.direction.y *
          this.acc.value *
          this.moves.turbo *
          this.moves.brake -
        this.vel.x * this.decel.value;
      this.vel.y +=
        Math.sin(this.angle) *
          this.direction.y *
          this.acc.value *
          this.moves.turbo *
          this.moves.brake -
        this.vel.y * this.decel.value;
    }
    this.x += this.vel.x / this.canvas.width;
    this.y += this.vel.y / this.canvas.height;
  }
  checkCollision(object, isSquare = false) {
    for (let i = 0; i < object.coinArr.length; i++) {
      const coin = object.coinArr[i];
      if (isSquare) {
        // Square collision
        if (
          this.x * object.canvas.width - this.radius >
            coin.x * object.canvas.width - coin.radius &&
          this.x * object.canvas.width + this.radius <
            coin.x * object.canvas.width + coin.radius &&
          this.y * object.canvas.height - this.radius >
            coin.y * object.canvas.height - coin.radius &&
          this.y * object.canvas.height + this.radius <
            coin.y * object.canvas.height + coin.radius
        ) {
          if (!coin.isDestroyed && distance < coin.radius * 0.5 + this.radius) {
            this.updateScore(coin.points);
            coin.destroy();
          }
        }
      } else {
        // Circle collision
        const dx = (coin.x - this.x) * object.canvas.width;
        const dy = (coin.y - this.y) * object.canvas.height;
        const distance = Math.hypot(dx, dy);
        if (!coin.isDestroyed && distance < coin.radius * 0.5 + this.radius) {
          this.updateScore(coin.points);
          coin.destroy();
        }
      }
    }
  }
  updateScore(scoreIncrement) {
    this.score += scoreIncrement;
    if (this.score > this.highScore) {
      this.updateHighScore(this.score);
    }
  }
  updateHighScore(score) {
    this.highScore = score;
    localStorage.setItem("highScore", `${this.highScore}`);
    userInterface.isNewHighScore = true;
  }
  dashHandler(e) {
    if (!e.repeat && !this.moves.isDashing) {
      // this.moves.dash = this.moves.dashRate;
      this.moves.isDashing = true;
      this.vel.x += Math.cos(this.angle) * this.moves.dashRate;
      this.vel.y += Math.sin(this.angle) * this.moves.dashRate;
      setTimeout(() => {
        this.moves.isDashing = false;
      }, this.moves.dashDelay);
    }
  }
  draw() {
    this.drawParticles();
    this.drawPlayer();
  }
  drawPlayer() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const finalHue = this.hue - this.hueAdjust;
    this.context.save();
    this.context.translate(
      this.x * this.canvas.width,
      this.y * this.canvas.height
    );
    this.context.rotate(this.angle);
    this.context.fillStyle = `hsl(${finalHue},${this.saturation}%,${this.brightness}%)`;
    this.context.strokeStyle = `hsl(${finalHue},${this.saturation * 0.7}%,${
      this.brightness * 1.7
    }%)`;
    this.context.lineWidth = this.lineWidth;
    this.context.beginPath();
    // Nose point **************************************************************************************************************
    this.context.moveTo(this.radius, 0);
    // Bottom right point **************************************************************************************************************
    this.context.lineTo(-this.radius, this.radius * 0.9);
    // Bottom middle **************************************************************************************************************
    this.context.lineTo(-this.radius * 0.618, 0);
    // Bottom left point **************************************************************************************************************
    this.context.lineTo(-this.radius, -this.radius * 0.9);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();
    this.context.restore();
    // change hue **************************************************************************************************************
    this.hue += this.hueIncrement;
  }
  createParticle(particleCount) {
    for (let i = 0; i < particleCount; i++) {
      this.particleArr.push(
        new Particle(
          this,
          this.x * this.canvas.width,
          this.y * this.canvas.height,
          getRandomRange(this.radius * 0.2, this.radius * 0.45),
          getRandomRange(this.radius * 0.15, this.radius * 0.2),
          this.angle,
          this.vel.x,
          this.vel.y
        )
      );
    }
  }
  drawParticles() {
    this.particleContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particleArr.length; i++) {
      const particle = this.particleArr[i];
      particle.draw(this.hue);
      particle.update();
    }
  }
  screenWrap() {
    const radius = {
      x: this.radius / this.canvas.width,
      y: this.radius / this.canvas.height,
    };
    if (this.x < -radius.x) {
      this.x = 1.0 + radius.x;
    }
    if (this.x > 1.0 + radius.x) {
      this.x = -radius.x;
    }
    if (this.y < -radius.y) {
      this.y = 1.0 + radius.y;
    }
    if (this.y > 1.0 + radius.y) {
      this.y = -radius.y;
    }
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.particleCanvas.width = width;
    this.particleCanvas.height = height;
  }
}
class Particle {
  constructor(player, x, y, radius, accel, angle, velX, velY) {
    this.player = player;
    this.context = this.player.particleContext;
    this.x = x;
    this.y = y;
    this.vel = { x: velX, y: velY };
    this.normVel = this.vel.x * this.vel.x + this.vel.y * this.vel.y;
    this.accel = accel;
    this.decel = this.accel * 3;
    this.jiggle = 1.5;
    this.minThrottle = 0.1;
    this.radius = radius;
    this.hueAdjust = getRandomRange(-20, 20);
    this.saturation = getRandomRange(90, 100);
    this.brightness = getRandomRange(40, 55);
    this.alpha = 1;
    this.angle = angle;
    this.angleAdjust = Math.PI;
  }
  update() {
    if (this.alpha <= 0.001 || this.radius < 0.001) {
      this.player.particleArr.splice(this, 1);
    } else {
      this.x +=
        Math.cos(this.angle + this.angleAdjust) * this.accel +
        getRandomRange(-this.jiggle, this.jiggle);
      this.y +=
        Math.sin(this.angle + this.angleAdjust) * this.accel +
        getRandomRange(-this.jiggle, this.jiggle);
      this.radius *=
        this.radius >= this.player.radius * 2
          ? 1
          : getRandomRange(1.015, 1.025);
      this.alpha *=
        this.radius >= this.player.radius * 1.5
          ? getRandomRange(0.001, 0.99)
          : getRandomRange(0.8, 0.99);
      this.saturation *= getRandomRange(0.8, 0.99);
      this.accel *= getRandomRange(0.97, 0.99);
    }
  }
  draw(mainHue) {
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.angle);
    this.context.fillStyle = `hsla(${mainHue + this.hueAdjust}, ${
      this.saturation
    }%, ${this.brightness}%, ${this.alpha})`;
    this.context.beginPath();
    this.context.arc(
      -this.player.radius,
      0,
      this.radius * 0.618,
      0,
      Math.PI * 2
    );
    this.context.fill();
    this.context.closePath();
    this.context.restore();
  }
}
class Coin {
  constructor(coinSpawner, x, y, points = 1) {
    this.coinSpawner = coinSpawner;
    this.canvas = this.coinSpawner.canvas;
    this.context = this.coinSpawner.context;
    this.x = x;
    this.y = y;
    this.radius = this.coinSpawner.player.radius * 5;
    this.radiusX = this.radius * 0.25;
    this.hue = this.coinSpawner.player.hue;
    this.saturation = this.coinSpawner.player.saturation;
    this.brightness = this.coinSpawner.player.brightness;
    this.alpha = 1;
    this.lineWidth = 2;
    this.isShadowOn = window.innerWidth > 1000 ? true : false;
    this.shadowBlur = 60;
    this.counter = 0;
    this.spinSpeed = 0.1;
    this.isDestroyed = false;
    this.particleArr = [];
    this.particleCount = 10;
    this.particleAcc = 5;
    this.particleVel = { x: 0, y: 0 };
    this.points = points;
  }
  draw() {
    if (this.isDestroyed) {
      this.drawParticles();
    } else {
      this.drawCoin();
    }
  }
  drawCoin() {
    const x = this.x * this.canvas.width;
    const y = this.y * this.canvas.height;
    const osc = Math.sin(this.counter);
    const normOsc = (1 + osc) * 0.5;
    this.context.fillStyle = `hsla(${this.coinSpawner.player.hue}, 
      ${this.coinSpawner.player.saturation - normOsc * 30}%,
      ${this.coinSpawner.player.brightness - normOsc * 50}%,
      ${this.alpha})`;
    this.context.strokeStyle = `hsla(${this.coinSpawner.player.hue},
      ${this.coinSpawner.player.saturation}%,
      ${this.coinSpawner.player.brightness + 20}%,
      ${this.alpha})`;
    if (this.isShadowOn) {
      this.context.shadowColor = `hsla(${this.coinSpawner.player.hue},
            ${this.coinSpawner.player.saturation}%,
            ${70}%,
            ${0.8})`;
      this.context.shadowBlur = this.shadowBlur;
    }
    this.context.beginPath();
    // Diamond Shape **************************************************************************************************************
    // this.context.moveTo(x - this.radiusX + this.radiusX * osc, y);
    // this.context.quadraticCurveTo(
    //   x - this.radiusX + this.radiusX * osc,
    //   y - this.radius,
    //   x,
    //   y - this.radius
    // );
    // this.context.quadraticCurveTo(
    //   x + this.radiusX + this.radiusX * -osc,
    //   y - this.radius,
    //   x + this.radiusX + this.radiusX * -osc,
    //   y
    // );
    // this.context.quadraticCurveTo(
    //   x + this.radiusX + this.radiusX * -osc,
    //   y + this.radius,
    //   x,
    //   y + this.radius
    // );
    // this.context.quadraticCurveTo(
    //   x - this.radiusX + this.radiusX * osc,
    //   y + this.radius,
    //   x - this.radiusX + this.radiusX * osc,
    //   y
    // );
    // DIAMOND SHAPE **************************************************************************************************************
    this.context.moveTo(x - this.radiusX + this.radiusX * osc, y);
    this.context.lineTo(x, y - this.radius * 0.5);
    this.context.lineTo(x + this.radiusX + this.radiusX * -osc, y);
    this.context.lineTo(x, y + this.radius * 0.5);
    this.context.lineTo(x - this.radiusX + this.radiusX * osc, y);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
    this.counter += this.spinSpeed;
  }
  createParticles(x, y, particleCount) {
    this.radius *= 0.3;
    for (let i = 0; i < particleCount; i++) {
      const angle = i * ((Math.PI * 2) / particleCount);
      this.particleArr.push({
        x: this.x * this.canvas.width,
        y: this.y * this.canvas.height,
        angle: angle,
        vel: {
          x: Math.cos(angle) * this.particleAcc,
          y: Math.sin(angle) * this.particleAcc,
        },
      });
    }
    if (this.isShadowOn) {
      this.context.shadowColor = null;
      this.context.shadowBlur = 0;
    }
  }
  drawParticles() {
    for (let i = 0; i < this.particleArr.length; i++) {
      const particle = this.particleArr[i];
      if (this.radius <= 0.1) {
        this.particleArr.splice(particle, 1);
      } else {
        this.context.fillStyle = `hsla(${this.coinSpawner.player.hue}, 
        ${this.coinSpawner.player.saturation * 0.6}%,
        ${this.coinSpawner.player.brightness}%,
        ${this.alpha * 0.7})`;
        this.context.strokeStyle = `hsla(${this.coinSpawner.player.hue},
        ${this.coinSpawner.player.saturation * 0.6}%,
        ${this.coinSpawner.player.brightness + 20}%,
        ${this.alpha * 0.9})`;
        this.context.beginPath();
        this.context.arc(particle.x, particle.y, this.radius, 0, Math.PI * 2);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
        particle.vel.x = Math.cos(particle.angle) * this.particleAcc;
        particle.vel.y = Math.sin(particle.angle) * this.particleAcc;
        particle.x += particle.vel.x;
        particle.y += particle.vel.y;
      }
    }
    if (this.particleArr.length <= 0) {
      setTimeout(() => {
        this.coinSpawner.createCoins();
      }, this.spawnTime);
      this.coinSpawner.coinArr.splice(this, 1);
    }
    this.radius *= 0.85;
    this.particleAcc *= 0.88;
  }
  destroy() {
    this.createParticles(this.x, this.y, this.particleCount);
    this.isDestroyed = true;
  }
}
class CoinSpawner {
  constructor(player) {
    this.player = player;
    this.canvas;
    this.context;
    this.coinArr = [];
    this.spawnTime = 500;
    this.isReady = false;
    this.init();
  }
  init() {
    this.initCanvas();
    this.initEvents();
  }
  initCanvas() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = "canvas-coins";
    document.body.appendChild(canvas);
    this.canvas = canvas;
    this.context = ctx;
  }
  initEvents() {
    window.addEventListener("resize", () => {
      this.resize(window.innerWidth, window.innerHeight);
    });
  }
  createCoins(coinCount = 1) {
    for (let i = 0; i < coinCount; i++) {
      this.coinArr.push(
        new Coin(
          this,
          getRandomRange(0.05, 0.95),
          getRandomRange(0.05, 0.95),
          1
        )
      );
    }
  }
  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.coinArr.length; i++) {
      const coin = this.coinArr[i];
      coin.draw();
    }
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}
class Star {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.x = (Math.random() * this.canvas.width) / this.canvas.width;
    this.y = (Math.random() * this.canvas.height) / this.canvas.height;
    this.radius =
      Math.random() > 0.3 ? getRandomRange(0.5, 0.8) : getRandomRange(0.5, 1.3);
    this.isShining = Math.random() > 0.9 || this.radius > 0.8 ? true : false;
    this.hue =
      Math.random() > 0.6 ? getRandomRange(0, 30) : getRandomRange(190, 220);
    this.saturation = this.isShining
      ? getRandomRange(30, 70)
      : getRandomRange(10, 40);
    this.brightness = getRandomRange(60, 90);
    this.alpha = getRandomRange(0.4, 0.95);
    this.counter = Math.random() * 10;
    this.counterIncrement = Math.random() * 0.05;
  }
  draw() {
    const osc = Math.sin(this.counter) * 0.7;
    this.context.fillStyle = `hsla(${this.hue}, ${
      this.saturation + osc * 50
    }%, ${this.brightness}%, ${this.isShining ? 1 + osc : this.alpha})`;
    this.context.beginPath();
    this.context.rect(
      this.x * this.canvas.width,
      this.y * this.canvas.height,
      this.radius,
      this.radius
    );
    this.context.fill();
    this.context.closePath();
    this.counter += this.counterIncrement;
  }
  resize(canvas) {
    this.canvas = canvas;
  }
}
class Stars {
  constructor() {
    this.canvas;
    this.context;
    this.starArr = [];
    this.starCount;
    this.init();
    this.createStars();
  }
  init() {
    this.initCanvas();
    this.initEvents();
  }
  initCanvas() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = "canvas-stars";
    document.body.appendChild(canvas);
    this.canvas = canvas;
    this.context = ctx;
  }
  initEvents() {
    window.addEventListener("resize", () => {
      this.resize(window.innerWidth, window.innerHeight);
    });
  }
  createStars() {
    this.starArr = [];
    this.starCount = this.canvas.width * 1.5;
    for (let i = 0; i < this.starCount; i++) {
      this.starArr.push(new Star(this.canvas, this.context));
    }
  }
  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.starArr.length; i++) {
      const star = this.starArr[i];
      star.draw();
    }
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.createStars();
  }
}
class Mouse {
  constructor(x, y, radius) {
    this.canvas;
    this.context;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.touchstartX;
    this.touchstartY;
    this.touchendX;
    this.touchendY;
    this.touchDiffX = 0;
    this.touchDiffY = 0;
    this.touchDeadzoneX = 15;
    this.touchDeadzoneY = 10;
    this.isMobileControl = false;
    // color & style **************************************************************************************************************
    this.hue = 0;
    this.saturation = 80;
    this.brightness = 50;
    this.alpha = 1;
    this.shouldDraw = false;
    this.init();
  }
  init() {
    this.initCanvas();
    this.initEvents();
  }
  initCanvas() {
    const mouseCanvas = document.createElement("canvas");
    const mouseCtx = mouseCanvas.getContext("2d");
    mouseCanvas.width = window.innerWidth;
    mouseCanvas.height = window.innerHeight;
    mouseCanvas.id = "canvas-mouse";
    document.body.appendChild(mouseCanvas);
    this.canvas = mouseCanvas;
    this.context = mouseCtx;
  }
  initEvents() {
    window.addEventListener("resize", () => {
      this.resize(window.innerWidth, window.innerHeight);
    });
  }
  update(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // current position **************************************************************************************************************
    if (this.shouldDraw) {
      this.context.fillStyle = `hsla(180,0%,0%,0.5)`;
      this.context.strokeStyle = `hsla(180,0%,100%,0.5)`;
      this.context.lineWidth = 1.5;
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.context.stroke();
      this.context.fill();
      this.context.closePath();
      // start position **************************************************************************************************************
      if (this.touchstartX != this.x || this.touchstartY != this.y) {
        this.context.fillStyle = `hsla(180,0%,100%,0.05)`;
        this.context.strokeStyle = `hsla(180,0%,100%,0.1)`;
        this.context.lineWidth = 1.5;
        this.context.beginPath();
        this.context.arc(
          this.touchstartX,
          this.touchstartY,
          this.radius * 1.1,
          0,
          Math.PI * 2
        );
        this.context.stroke();
        this.context.fill();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(this.touchstartX, this.touchstartY);
        this.context.lineTo(this.x, this.y);
        this.context.stroke();
        this.context.closePath();
      }
    }
  }
  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}
// Get random number from range
function getRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}
// Instantiate objects **************************************************************************************************************
const player = new Player(0.5, 0.5);
const stars = new Stars();
const coinSpawner = new CoinSpawner(player);
const mouse = new Mouse(0, 0, 30);
const userInterface = new UserInterface(player, coinSpawner);
// MAIN FUNCTION **********************************************************************************************************************************
function animate() {
  userInterface.update(player);
  player.update(mouse, userInterface, coinSpawner);
  stars.draw();
  if (mouse.shouldDraw) {
    mouse.draw();
  }
  coinSpawner.draw();
  player.draw();
  requestAnimationFrame(animate);
}
animate();
