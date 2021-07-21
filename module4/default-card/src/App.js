import React from "react"
import Card from "./components/Card"
import './App.css';


class App extends React.Component {


    render() {
      
      const randomColor = () => { 
        const randomString = Math.floor(Math.random()*16777215).toString(16)
        return randomString.length === 6 ? "#" + randomString : randomColor()
      }

      const handleClick = () => {
        this.setState({
         cardColor: randomColor()
        })
      }
    
      return (
        
        <div className="container">
          <Card  />
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
          <button onClick={handleClick}>Change Colors</button>
        </div>

      )
    }
}

export default App;
