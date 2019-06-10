import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ApiSG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films", {
      method: "GET"
    })
      .then(res => res.json()) //parsed
      .then(data => this.setState({ films: data }));
  }

  render() {
    console.log(this.state.films);
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.loading || !this.state.films ? (
            <h4>Loading Studio ghibli Api</h4>
          ) : (
            this.state.films.map(movie => (
              <Card
                border="success"
                key={movie.id}
                className="col-md-6 col-lg-4"
              >
                <h1>{movie.title}</h1>
                <Card.Body>
                  <p>{movie.description}</p>
                </Card.Body>
              </Card>
            ))
          )}
          <h3>loading...</h3>
        </div>
      </div>
    );
  }
}

export default ApiSG;
