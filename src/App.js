import React, { Component } from 'react';
import style from './App.css';
import { SimpleHooks } from './topics/simpleHooks';
import { ImgHoverEffect } from './topics/useRefDemo';
import ScrollViewImage from './topics/useEffect';
import { ImgViewUseEffect } from './topics/imageScrollUseEffect';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Card, { Lifafa, Lifafa2 } from './topics/card';
class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: undefined,
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
    const { photos = [] } = this.state;
    return <div>
      <ul>
        {photos.map((item, index) => {
          return <li key={item.id}>
            {/* <div className="cardName">
              <h4>{item.name || ''}</h4>
              <h5>{item.email || ''}</h5>
              <h5>{item.phone || ''}</h5>
              <h5>{item.website || ''}</h5>
              <Button type="primary">Click me</Button>
            </div> */}
            {/* <Lifafa name={item.name}
            email={item.email}
            phone={item.phone}
            website={item.website} /> */}
            <Card data={item} />
            {/* <Lifafa2 name={item.name}
              email={item.email}
              phone={item.phone}
              ewebsite={item.website} /> */}
          </li>;
        })}
      </ul>

      {/* SetState */}
      {/* <SimpleHooks /> */}
      {/* Use Ref */}
      {/* <ImgHoverEffect /> */}
      {/* useEffect */}
      {/* <ImgViewUseEffect /> */}
    </div>
  }
}
export default App;
