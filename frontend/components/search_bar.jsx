import React from 'react';
import { connect } from 'react-redux';

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
      console.log(pins);
      this.setState({ query: "" })
      e.target.value = "";
      this.querySearch = pins;
      }
    });
  }

  handleSearchClick(pin) {

  }

  handleChange(e){
    this.setState({ query: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    let queryPins;
    if (this.querySearch){
      queryPins = this.querySearch.map(pin => {
        return (<li key={pin.id} className="search-items-li" onClick={() => this.handleSearchClick(pin)}>
        <img className="user-pin-img" src={pin.picture_url} onClick={() => this.props.history.push(`/pins/${pin.id}`)}/>
          Name: {pin.name} Category: {pin.category}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
