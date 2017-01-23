////// Data //////
//////////////////

// Image data
var IMAGES = [
  {
    url: "https://techtalentsouth.com/",
    src: "images/tech-talent-south.png",
    alt: "Tech Talent South"
  },
  {
    url: "http://www.up.co/communities/usa/charlotte/startup-weekend",
    src: "images/csw.png",
    alt: "Charlotte Startup Weekend"
  },
  {
    url: "http://www.codeforcharlotte.org/",
    src: "images/cfc.png",
    alt: "Code For Charlotte"
  },
  {
    url: "http://www.1millioncups.com/charlotte",
    src: "images/1mc.png",
    alt: "1 Million Cups"
  }
]

// Button Data
var BUTTONS = [
  {
    tip: "Home",
    url: "/",
    material: true,
    iconWord: "home"
  },
  {
    tip: "Email",
    url: "mailto:zacharykirchin@gmail.com?Subject=Saying%20Hey!",
    material: true,
    iconWord: "email"
  },
  {
    tip: "LinkedIn",
    url: "https://www.linkedin.com/in/zkirchin",
    material: false,
    iconWord: "linkedin"
  },
  {
    tip: "Twitter",
    url: "https://twitter.com/zkirchin",
    material: false,
    iconWord: "twitter"
  },
  {
    tip: "Instagram",
    url: "https://www.instagram.com/zkirchin/",
    material: false,
    iconWord: "instagram"
  },
  {
    tip: "Github",
    url: "https://github.com/zkirchin",
    material: false,
    iconWord: "github-alt"
  }
]

////// Components //////
////////////////////////

// button component -- two types
function Button(props) {
  if (props.material == true) {
    return (
      <li>
        <a className="btn-floating white tooltipped" data-position="bottom" data-delay="50" data-tooltip={props.tip} href={props.url}>
          <i className="material-icons">{props.iconWord}</i>
        </a>
      </li>
    );
  } else {
    return (
      <li>
        <a className="btn-floating white tooltipped" data-position="bottom" data-delay="50" data-tooltip={props.tip} target="_blank" href={props.url}>
          <i className={`fa fa-${props.iconWord}`} aria-hidden="true"></i>
        </a>
      </li>
    );
  }
}

// navbar component -- cycles through buttons
function NavBar(props) {
  return (
    <div className="fixed-action-btn horizontal">
      <a className="waves-effect waves-circle waves-light btn-floating btn-large black">
        <i className="material-icons">menu</i>
      </a>
      <ul>
        {props.buttons.map(function(button) {
          return <Button tip={button.tip} url={button.url} material={button.material} iconWord={button.iconWord} />
        })}
      </ul>
    </div>
  );
}


// Introduction compoment - static
function Introduction() {
  return (
    // introduction stuff
    <div>
      <h1 className="name turq">// Zack Kirchin</h1>
      <h2 className="title">Web Developer. Instructor. Tarheel.</h2>
      <div className="divisor"></div>
      <p>I'm the CTO for <a href="https://techtalentsouth.com" target="blank">Tech Talent South</a>, a startup dedicated to raising the technical talent throughout the US. Through TTS I get to play developer, teacher, and mentor all while meeting the best people in the tech/startup community in Charlotte, NC and the rest of the US.</p>
      <p>Ever want to meet up and chat? <a href="http://snackwithzack.com/" target="blank">Grab a snack with me!</a></p>
    </div>
  );
}

// image component
function Image(props) {
  return (
    <li>
      <a href={props.url} target="blank">
        <img width="100px" src={props.src} alt={props.alt} />
      </a>
    </li>
  );
}

// where to find me component, cycles through images
function FindMe(props) {
  return (
    // where to find me
    <div>
      <h4 className="hide-on-small-only title turq">Where you can find me:</h4>
      <ul className="hide-on-small-only">
        {props.images.map(function(image) {
          return <Image url={image.url} alt={image.alt} src={image.src} />
        })}
      </ul>
    </div>
  );
}

// main container -- includes introduction and where to find me
function MainContainer(props) {
  return (
    // both introduction and where you can find me
    <div className="main-container">
      <div className="container">
        <div className="row introduction">
          <div className="col s12">
            <Introduction />
            <FindMe images={props.images}/>
        </div>
      </div>
    </div>
  </div>
  );
}

// main application component
function Application(props) {
  return (
    <div>
      <NavBar buttons={props.buttons}/>
      <MainContainer images={props.images}/>
    </div>
  );
}

// type checking
Application.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  })).isRequired,
  buttons: React.PropTypes.arrayOf(React.PropTypes.shape({
    tip: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    material: React.PropTypes.bool.isRequired,
    iconWord: React.PropTypes.string.isRequired
  })).isRequired
};

// mounting
ReactDOM.render(<Application images={IMAGES} buttons={BUTTONS}/>, document.getElementById('container'));
