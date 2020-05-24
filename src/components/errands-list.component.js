import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Errands = props => (
  <tr>
    <td>{props.errands.username}</td>
    <td>{props.errands.description}</td>
    <td>{props.errands.duration}</td>
    <td>{props.errands.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.errands._id}>edit</Link> | <a href="#" onClick={() => { props.deleteErrands(props.errands._id) }}>delete</a>
    </td>
  </tr>
)

export default class ErrandsList extends Component {
  constructor(props) {
    super(props);

    this.deleteErrands = this.deleteErrands.bind(this)

    this.state = {errands: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/errands/')
      .then(response => {
        this.setState({ errands: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteErrands(id) {
    axios.delete('http://localhost:5001/errands/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      errands: this.state.errands.filter(el => el._id !== id)
    })
  }

  errandsList() {
    return this.state.errands.map(currenterrands => {
      return <Errands errands={currenterrands} deleteErrands={this.deleteErrands} key={currenterrands._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Errands</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.errandsList() }
          </tbody>
        </table>
      </div>
    )
  }
}