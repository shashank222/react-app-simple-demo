import React, { Component } from 'react';
import style from './app.css';
import { SimpleHooks } from './topics/simpleHooks';
import { ImgHoverEffect } from './topics/useRefDemo';
import ScrollViewImage from './topics/useEffect';
import { ImgViewUseEffect } from './topics/imageScrollUseEffect';
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
      {/* <ul>
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
      </ul> */}

      {/* SetState */}
      {/* <SimpleHooks /> */}
      {/* Use Ref */}
      {/* <ImgHoverEffect /> */}
      {/* useEffect */}
      <ImgViewUseEffect />
    </div>
  }
}
export default App;
