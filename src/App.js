import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: [

      ]
    }
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      //get callback
      .then((data) => {
        this.setState({
          flats: data
        });
      })
  };

  render() {
    return (
      
      <div className="container"><br/>
        <div className="App">               
          <div className="main">
            <div className="input-group search">
              <input className="form-control" placeholder="search..."/>
            </div>
            
            <div className="flats">            
                {this.state.flats.map((flat) => {
                  return <Flat flat={flat} />
                })}
            </div>
          </div>

          <div className="map">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
