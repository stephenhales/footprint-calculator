import React from 'react';
import WorkCommute from './UserForm/WorkCommute';

class UserForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <WorkCommute/>                  
        </form>    
      </div>
    );
  }    
}

export default UserForm;