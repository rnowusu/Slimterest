import React from 'react';

class Click_Dropdown extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <ul className="dropdown-ul">
          <li className="dropdown-li"
            onClick={() => this.props.openPinForm('Pin Form')}>
            <i className="fas fa-plus fa-drop"></i>
              &nbsp;Create Pin
          </li>

          <li className="dropdown-li"
            onClick={() => this.props.openBoardForm('Board Form')}>
            <i className="fas fa-plus fa-drop"></i> &nbsp;Create Board
          </li>
        </ul>
    );
  }

}

export default Click_Dropdown;
