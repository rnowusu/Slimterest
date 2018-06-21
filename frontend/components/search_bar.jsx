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
      // let pins = Object.values(this.props.pins).filter(pin => pin.name.toLowerCase().includes(this.state.query.toLowerCase()) || pin.category.includes(this.state.query.toLowerCase()));
      // debugger
      // let pins = Object.values(this.props.pins).filter(pin => this.state.query.toLowerCase().split(" ").some(splitQueryEl => pin.name.toLowerCase() === splitQueryEl || pin.description.toLowerCase() === splitQueryEl || pin.category.toLowerCase() === splitQueryEl));
      // console.log(Object.values(this.props.pins));
      console.log(pins);
      this.setState({ query: "" })
      e.target.value = "";
      // e.target.setState({query:""});

      }
    });
  }

  handleChange(e){
    this.setState({ query: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (<input id="search-input" type="text" className="header-search-box"
      placeholder="Search" onChange={ this.handleChange.bind(this) } />
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
