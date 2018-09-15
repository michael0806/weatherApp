import * as React from 'react';
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import { render } from 'react-dom';



export default class App extends React.Component <{},IState>{
  interface IState{
    retrieveWeather
  };

  constructor(props:any){
    super(props)
    this.state{
      retrieveWeather:
      this.getWeather.bind(this)
    }
  };

  
  public getWeather= async() => {
      // tslint:disable-next-line:variable-name
      const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=a674836665107b13795b8b3c460b787c&units=metric');
      const data = await api_call.json();
      // tslint:disable-next-line:no-console
      console.log(data);
  }


  public render(){
    return (
      <div> 

        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }

}
