import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'

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
           
           <div className='App'>
                {this.state.loading || !this.state.films ? <h4>hello Api</h4> : 
               this.state.films.map((movie ) => 
               <div className='row'  key={movie.id}>
                   <div className='column'>
                   <h2>{movie.title}</h2>
                   <p>{movie.description}</p>
                   </div>
               </div>)}
              <h1>hello  now</h1>
           </div>
       )
   }
}

export default ApiSG