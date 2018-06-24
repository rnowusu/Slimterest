import React from 'react';
import { connect, withRouter } from 'react-redux';
import ItemModals from './item_modal';

class UserBoardIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){

  }

  render(){

    const userBoards = Object.values(this.props.boards).filter(board => board.user_id === this.props.currentUserId);
    const pins = Object.values(this.props.pins);
    const boardsWithPins = userBoards.map(board => pins.filter(pin => pin.board_id === board.id))
    const boardComponent = boardsWithPins.slice(0,2).map((board, idx) => {
      const boardImgs = board.slice(1,6).map(pin => {return (<img className="user-board-img" src={pin.picture_url}/>);})
      return (
        <div key={idx} className="user-board-div">
          <li className="user-board-li">
            <img className="user-board-img" src={board[0].picture_url}/>
            {boardImgs}
        </li>
      </div>
      );
    })
    console.log(boardsWithPins);
    console.log("before render");
    return(
      <div className="user-boards-div">
        <br /> Your Boards
        <ul className="user-board-ul">
          <div className="user-board-div">
          <li className="user-board-li">
            <span className="user-board-span">
            Create Board
            <br /> <i className="fas fa-plus fa-drop user-board-fa-plus"></i> <br />
            </span>
          </li>
        </div>
        {boardComponent}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    boards: state.entities.boards,
    pins: state.entities.pins,
    currentUserId: state.session.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)((UserBoardIndex))
