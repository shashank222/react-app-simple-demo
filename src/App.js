import React, { Component } from 'react';
import style from './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      DOB: '',
      mobile: '',
    }
  }


  componentDidMount() {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiURL).then((res) => {
      return res.json();
    })
      .then(result => {
        const photos = result;

        this.setState({ photos });

      })
      .catch(err => {
        console.error('exception:', err);
      })
  }

  render() {
    // console.log('photos from state:', this.state.photos);
    const { photos } = this.state;
    return <div>
      <ul>
        {photos.map((item, index) => {
          return <li key={item.id}>
            <div className="cardName">
              <h4>{item.name || ''}</h4>
              <h5>{item.email || ''}</h5>
              <h5>{item.phone || ''}</h5>
              <h5>{item.website || ''}</h5>
            </div>
          </li>;
        })}
        {/* <li>
          <div className="cardName">
            <h4>Rahul Rawal</h4>
            <h5>Backend Developer</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum magni nostrum nam deserunt reprehenderit exercitationem veniam</p>
          </div>
        </li> */}
      </ul>
    </div>
  }
}
export default App;
