import React from 'react';
import './styles/float-grid.css';
import './styles/stack.css';

export default class Projects extends React.Component {
  render() {
    // Only render the log out button if we are logged in!
    return (
        <div id="stack" className="row">
          <h1 className="col-12 label">Tech Skills</h1>
          <div className="col-6 logos">
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/javascript.svg' alt='JavaScript' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/ruby.svg' alt='Ruby' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/html-5.svg' alt='HTML' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/css-3.svg' alt='CSS' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/react.svg' alt='React' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/redux.svg' alt='Redux' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/passport.svg' alt='Passport' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/travis-ci.svg' alt='Travis' />
          </div><div className="col-6 logos">
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/nodejs.svg' alt='Node' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/express.svg' alt='Express' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/rails.svg' alt='Rails' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/mongodb.svg' alt='MongoDb' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/postgresql.svg' alt='PostgreSQL' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/knex.svg' alt='Knex' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/mocha.svg' alt='Mocha' />
            <img src='https://s3.us-east-2.amazonaws.com/mg-icons/chai.svg' alt='Chai' />

          </div>
        </div>
    );
  }

}