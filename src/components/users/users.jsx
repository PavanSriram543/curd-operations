import axios from "axios";
import React, { Component } from "react";
import Modal from "./modal";
import ModalForm from "./modalForm";

import "./users.css";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      editUser: {},
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  deleteRow = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const deletedpost = this.state.users.filter((user) => user.id !== id);
        this.setState({ users: deletedpost });
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4>User Details</h4>
          </div>
          <table className="table table-striped table-dark">
            <thead>
              <tr className="table-primary text-dark">
                <th scope="col">Slno</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                <th scope="col">Address</th>
                <th scope="col">Company</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, id) => (
                <tr key={id} className="table-primary text-dark">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.address.street}</td>
                  <td>{user.company.bs}</td>
                  <td>
                    <span>
                      <i
                        className="fas fa-user-edit text-green fa-lg"
                        title="Edit user"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                      <ModalForm
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        address={user.address}
                        company={user.company}
                        website={user.website}
                      />
                      &nbsp;&nbsp;
                      <i
                        className="btn fas fa-trash-alt text-danger fa-lg"
                        title="Delete user"
                        onClick={() => this.deleteRow(user.id)}
                      />
                      {/* <Modal Click={this.deleteRow} userId={user.id} /> */}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserData;
