import React from "react";
import axios from "axios";
import './App.css';
class App extends React.Component{
  state={advice:""};
  componentDidMount(){
    this.fetchAdvice();
  }
   fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
          const{ advice } = response.data.slip;
          this.setState({ advice });
        
        })
        .catch((error) => {
        console.log(error);
        }); 
  }  
  render(){
    const { advice } = this.state;
    return(
      <div className="app">
      <div className="card">
      <h1 className="heading"><b>{advice}</b></h1>
      <button className='button'><a  href={`https://twitter.com/compose/tweet?hashtags=quotes&text=${advice}`} target='_blank'><span><i class="fa-brands fa-twitter"></i></span></a></button>
      <button className="button" onClick={this.fetchAdvice}>
      <span>ADVICE PLEASE!</span>
      </button>
      </div>
      </div>
    );
  }
}
export default App;