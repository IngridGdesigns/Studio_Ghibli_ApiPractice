import React, {Component} from 'react'

class ApiSG extends Component{
    constructor(props){
        super(props);

        this.state = {
            films: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films', {
            method: 'GET',
        })   
        .then(res => res.json()) //parsed
        .then(data => this.setState({ films: data }))
    }
   
   render() {
       
       console.log(this.state.films)
       return(
           <div>
              <h1>hello</h1>
           </div>
       )
   }
}

export default ApiSG