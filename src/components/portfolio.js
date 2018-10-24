import React from 'react';
import Project from './project.js';
import './styles/portfolio.css';
import './styles/float-grid.css';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project1: { 
        title: 'Deckbuilder',
        alt: 'Deckbuilder - Hearthstone deckbuilding app',
        screenshot: 'https://s3.us-east-2.amazonaws.com/mg-icons/deckbuilder.png',
        description: 'An app created to enable users to save extra Hearthstone decks, as the game itself limits you to 18. This way users can keep their favorite decks as they transition from Standard format to Wild and recall old decks with ease.',
        techStack: 'React, Redux, Node, Express, PostgreSQL, Passport',
        repo: 'https://github.com/MitchGianoni/hsdeckbuilder-client',
        liveLink: 'https://hs-deckbuilder-mg.herokuapp.com/'
      },
      project2: { 
        title: 'Data Structures',
        alt: 'Data Structures Learning Tool',
        screenshot: 'https://s3.us-east-2.amazonaws.com/mg-icons/datastructures.png',
        description: 'This application helps to solve the problem of learning new terminology by using a spaced-repetition algorithm learning technique that incorporates increasing intervals of time between subsequent review of previously learned material in order to exploit the psychological spacing effect.',
        techStack: 'React, Redux, Node, Express, MongoDB, Passport',
        repo: 'https://chasen-mitch-spacedrep-client.herokuapp.com/',
        liveLink: 'https://chasen-mitch-spacedrep-client.herokuapp.com/'
      },
      project3: { 
        title: 'GO!',
        alt: 'GO! - An app for reviewing and finding parks and nature spots',
        screenshot: 'https://s3.us-east-2.amazonaws.com/mg-icons/GO.png',
        description: 'GO! is an app made to encourage people to go outside. The app makes it easy to explore your natural surroundings, allowing users to register and comment on locations. With GO!, you can easily find locations near you, or ones that you\'re interested in using our filtration system. You can also help raise community awareness about the beautiful locales right outside their front doors by adding your own locations.',
        techStack: 'React, Redux, React-Notify-Toast, Thunk, Node, Express, MongoDB, Axios',
        repo: 'https://github.com/thinkful-ei22/yelp-for-parks-capstone-frontend',
        liveLink: 'https://dry-waters-99312.herokuapp.com/'
      },
      project4: { 
        title: 'Hockey Doctor',
        alt: 'Hockey Doctor - Compare fantasy hockey players',
        screenshot: 'https://s3.us-east-2.amazonaws.com/mg-icons/hockeydoctor.png',
        description: 'This app exists so you can beat your friends in fantasy hockey. It is not inended to be used as a betting or gambling website. We do not endorse betting or gambling on fantasy hockey or any other fantasy sporting league. Instead, we seek to provide specified hockey statistics based on a proprietary algorithm. We hope that you will use the info on this website as intended to beat your friends in fantasy hockey and earn the kind of victory that no dollar amount can match: bragging rights.',
        techStack: 'React, Rails, PostgreSQL',
        repo: 'https://github.com/fantasy-draft-assist/back-end',
        liveLink: 'https://hockeydoctor.surge.sh/'
      }
    }
  }
  render() {
    return (
      <div className="portfolio row">
          <h1 className="label">Portfolio Projects</h1>
        <div className="project-list">
          <Project project={this.state.project1} />
          <Project project={this.state.project2} />
          <Project project={this.state.project3} />
          <Project project={this.state.project4} />
        </div>
      </div>
    );
  }

}