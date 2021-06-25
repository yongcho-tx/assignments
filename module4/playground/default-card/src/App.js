import React from "react"
import Card from "./components/Card"
import './App.css';


class App extends React.Component {

    render() {
      let randomColor = () => {
          
         let randomString = Math.floor(Math.random()*16777215).toString(16)
        //  console.log(randomString.length)
          if(randomString.length !== undefined) {
            
            if(randomString.length < 6) {
              return "blue"
            } 
            else {
              return "#" + randomString
            }
         }

         
        }
    
  

      return (
        
        <div className="container">
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          <Card cardColor={randomColor()} />
          
        </div>

  );
    }
}

export default App;
