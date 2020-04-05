import React, { Component } from "react";
import { Button } from "antd";


export default class Card extends Component{
  render(){
    // const val1= this.props;
    console.log('props',this.props);
    const { data } = this.props;
    const  {name,email,phone,website}=data;
    return(
      <div className="cardName">
        <h4>{name || ''}</h4>
        <h5>{email || ''}</h5>
        <h5>{phone || ''}</h5>
        <h5>{website || ''}</h5>
        <Button type="primary">Click me</Button>
        <p>card data</p>
      </div>
    )
  }
}
export class Lifafa extends Component {
  render() {
    // const val1 = this.props;
    // console.log('data',val1);
    console.log('props',this.props);
    const {name,email,phone,website}=this.props;
    return (
      <div className="cardLifafa">
        <h4>{name || ''}</h4>
        <h5>{email || ''}</h5>
        <h5>{phone || ''}</h5>
        <h5>{website || ''}</h5>
        <Button type="primary">Click me</Button>
        {/* <p>card data</p> */}
      </div>
    )
  }

}
// export {Lifafa};
// export default Card;

export function Lifafa2(props) {
  console.log('value',props);
    return (
      <div className="cardLifafa">
        <h4>{props.name || ''}</h4>
        <h5>{props.email || ''}</h5>
        <h5>{props.phone || ''}</h5>
        <h5>{props.website || ''}</h5>
        <Button type="primary">Click me</Button>
        {/* <p>card data</p> */}
      </div>
    )
    }
