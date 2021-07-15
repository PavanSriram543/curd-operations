import React, { Component } from "react";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      address: { street, suite, city, zipcode },
      company: { bs, catchPhrase },
      company,
    } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update user information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="form-group pb-2">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.props.name}
                    />
                  </div>
                  <div className="form-group pb-2">
                    <label>User name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.props.username}
                    />
                  </div>
                  <div className="form-group pb-2">
                    <label>email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.props.email}
                    />
                  </div>
                  <div className="form-group pb-2">
                    <label>Website</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.props.website}
                    />
                  </div>
                  <div className="form-group pb-2">
                    <label>address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={street}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="suite"
                      value={suite}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city"
                      value={city}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="zipcode"
                      value={zipcode}
                    />
                  </div>
                  <div className="form-group pb-2">
                    <label>Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value={company.name}
                    />
                    <input type="text" className="form-control" value={bs} />
                    <input
                      type="text"
                      className="form-control"
                      value={catchPhrase}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block "
                    //   data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalForm;
