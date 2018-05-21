import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class PinForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      category: "",
      description: "",
      picture: null,
      pictureUrl: "",
      userId: null,
      boardId: 1
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const file = this.state.picture;
    const formData = new FormData();
    formData.append("pin[name]", this.state.name)
    formData.append("pin[category]", this.state.category)
    formData.append("pin[description]", this.state.description)
    formData.append("pin[picture]", this.state.picture)
    formData.append("pin[user_id]", this.props.currentUser.id)
    formData.append("pin[board_id]", this.state.boardId)
    // debugger
    this.props.createPin(formData);
    this.setState({
      name: "", category: "", description: "",
      picture: null, pictureUrl: "", userId: null,
      boardId: 1
  })

    // this.props.history.push('/');
    // const pin = merge({}, this.state);
    // this.props.createPin(pin);
    // this.setState({name: "", category: "", description: "", picture: null, pictureUrl: null})


  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  updateFile(e){
    // debugger
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({picture: file, pictureUrl: fileReader.result});
    }
    if (file){
      fileReader.readAsDataURL(file);
    } else {
      this.setState({picture: null, pictureUrl: null})
    }
  };

  render() {
    return (
      <div className="pin-form rendered">
        <form onSubmit={this.handleSubmit.bind(this)}
          className="pin-form-box">
          <h3 className ="pin-form-labels pin-create">Create New Pin!</h3>
          <label className ="pin-form-labels">
            Name <br />
          <input type="text" className="pin-create-attr"
            placeholder="Enter Pin Name"
            onChange={this.update("name")} />
          </label>
          <br />
          <label className ="pin-form-labels">
            Category <br />
          <input type="text" className="pin-create-attr"
            placeholder="Enter Category Name"
            onChange={this.update("category")} />
          </label>
          <br />
          <label className ="pin-form-labels">
            Upload Picture <br />
          <input type="file" className="pin-upload-pic"
              onChange={this.updateFile.bind(this)}/>
          </label>
          <br />
          <label className ="pin-form-labels">
            Description <br />
          <textarea placeholder ="Enter Pin description"
            className="pin-description" onChange={this.update("description")} />
        </label>
        <br />
          <input type="submit" className="pin-submit-btn" value="Create Your New Pin!"/>
          <br />
          <br />
        <img src={this.state.pictureUrl} className="pin-preview"/>
        </form>
      </div>
    );
  }

}

export default withRouter(PinForm);
