import React from 'react';
import './styles/float-grid.css';
import './styles/stack.css';

export default class Projects extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
        <section id="stack" className="row">
          <h1 className="col-12 label">Tech Skills</h1>
          <div className="col-12 logos">
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/javascript.svg" alt="JavaScript" title="JavaScript" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/ruby.svg" alt="Ruby" title="Ruby" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/html-5.svg" alt="HTML" title="HTML" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/css-3.svg" alt="CSS" title="CSS" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/react.svg" alt="React" title="React" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/redux.svg" alt="Redux" title="Redux" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/passport.svg" alt="Passport" title="Passport" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/travis-ci.svg" alt="Travis" title="Travis" />
          </div><div className="col-12 logos">
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/nodejs.svg" alt="NodeJs" title="NodeJs" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/express.svg" alt="Express" title="Express" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/rails.svg" alt="Rails" title="Rails" className="too-tall"/>
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/mongodb.svg" alt="MongoDb" title="MongoDb" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/postgresql.svg" alt="PostgreSQL" title="PostGreSQL" className="too-tall" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/knex.svg" alt="Knex" title="Knex" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/mocha.svg" alt="Mocha" title="Mocha" />
            <img src="https://s3.us-east-2.amazonaws.com/mg-icons/chai.svg" alt="Chai" title="Chai" />
          </div>
        </section>
    );
  }

}