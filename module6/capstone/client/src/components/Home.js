import React, { useState } from "react"

function Home() {
  const [searchValue, setSearchValue] = useState([])
  const [onInputValue, setOnInputValue] = useState("")
  const [inputs, setInputs] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))
  }
  return (
    <div>
      <h1>Welcome to Home Page!</h1>
      <div>
        <input
          type="text"
          placeholder="search drug name"
          value={searchValue}
          onChange={handleChange}
        />
        <button>Go!</button>
      </div>
    </div>
  )
}

export default Home
