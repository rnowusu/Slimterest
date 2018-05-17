import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class PinForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      category: "",
      uploadPicture: null,
      description: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const pin = merge({}, this.state);
    this.props.createPin(pin);
    this.setState({username: "", password: ""})
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <div className="pin-form">
        <form onSubmit={this.handleSubmit.bind(this)}
          className="pin-form-box">
          <h3>Create New Pin!</h3>
          <label>
            Name <br />
          <input type="text" className="pin-create-attr"
            placeholder="Enter Pin Name"
            onChange={this.update("name")} />
          </label>
          <br />
          <label>
            Category <br />
          <input type="text" className="pin-create-attr"
            placeholder="Enter Category Name"
            onChange={this.update("category")} />
          </label>
          <br />
          <label>
            Upload Picture <br />
          <input type="file" className="pin-upload-pic"
              onChange={this.update("uploadPicture")}/>
          </label>
          <br />
          <label>
            Description <br />
          <textarea placeholder ="Enter Pin description"
            className="pin-description" onChange={this.update("description")} />
        </label>
        <br />
          <input type="submit" className="pin-submit-btn" value="Create Your New Pin!"/>
        </form>
      </div>
    );
  }

}

export default withRouter(PinForm);
