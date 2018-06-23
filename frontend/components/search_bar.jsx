import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { query: "" };
  }

  componentDidMount(){
    document.getElementById("search-input").addEventListener("keydown", e => {
      if (e.keyCode === 13){
      console.log(this.state);
      // let pins = Object.values(this.props.pins).filter(pin => this.state.query.toLowerCase().split(" ").includes(pin.name.toLowerCase() || pin.description.toLowerCase() || pin.category.toLowerCase()));
      let pins = Object.values(this.props.pins).filter(pin => this.state.query.toLowerCase().split(" ").includes(pin.name.toLowerCase()) || this.state.query.toLowerCase().split(" ").includes(pin.category.toLowerCase()));
      this.querySearch = pins;
      console.log(pins);
      this.setState({ query: "" })
      e.target.value = "";
    } else if (e.keyCode === 27){
      e.target.value = "";
      this.querySearch = undefined;
      this.setState({ query: "" })
      console.log(this.state);
    }
    });
  }

  handleSearchClick(pin) {
    this.props.history.push(`/pins/${pin.id}`);

  }

  handleChange(e){
    this.setState({ query: e.target.value });
    // let pins = Object.values(this.props.pins).filter(pin => this.state.query.toLowerCase().split(" ").includes(pin.name.toLowerCase()) || this.state.query.toLowerCase().split(" ").includes(pin.category.toLowerCase()));
    // this.querySearch = pins;
    // console.log(this.state);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    let queryPins;
    if (this.querySearch){
      queryPins = this.querySearch.map(pin => {
        return (<li key={pin.id} className="search-items-li" onClick={() => this.handleSearchClick(pin)}>
        &nbsp; <img className="user-pin-img img-height" src={pin.picture_url} onClick={() => this.props.history.push(`/pins/${pin.id}`)}/>
          &nbsp;
          <span className="search-result-text">
            {pin.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category: {pin.category}
          </span>
          &nbsp;
      </li>);
      })
    }

    return (
      <div className="search-div">
        <input id="search-input" type="text" className="header-search-box"
          placeholder="Search" onChange={ this.handleChange.bind(this) } />
        <ul className="search-items">{queryPins}</ul>
      </div>

    );
  }

}

const mapStateToProps = state => {
  return {
    pins: state.entities.pins,
    boards: state.entities.boards,
    users: state.entities.users
  };
};

const mapDispatchToProps = mapDispatchToProps => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));
