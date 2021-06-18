import React, {Component} from "react"
import Badge from "./Badge"
import "./styles.css"


class App extends Component {
    constructor() {
        super()
        this.state = {
            badge: "Badge",
            firstName: "",
            lastName: "",
            eMail: "",
            pob: "",
            phone: "",
            favFood: "",
            about: "",
            badges: [ 
                { 
                    badge: "Badge", 
                    firstName: "Beaudreaux",
                    lastName: "Smith",
                    eMail: "bob@mail.com",
                    pob: "Memphis",
                    phone: "180012345",
                    favFood: "fried chicken",
                    about: "I'm bob, hello..."
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        }

        handleChange(e) {
            console.log("name values ", e.target.value)
            console.log("name target ", e.target.name)
            console.log("input field", e.target)
            const {name, value} = e.target
            this.setState(prevState => ({
                    ...prevState,
                    [name]: value
                }))
        }
        handleSubmit(e) {
            e.preventDefault()
            const {firstName, lastName, pob, about, eMail, favFood, phone, badge} = this.state
            const newBadge = {
                badge: badge,
                firstName: firstName,
                lastName: lastName,
                pob: pob,
                about: about,
                favFood: favFood,
                phone: phone,
                eMail: eMail
            }
            this.setState(prevState => ({
                ...prevState,
                badges: [...prevState.badges, newBadge]
            }))
            this.setState(
                {
                    badge: "Badge",
                    firstName: "",
                    lastName: "",
                    pob: "",
                    about: "",
                    favFood: "",
                    phone: "",
                    eMail: ""
                })
        }

    render() {
        const {firstName, lastName, pob, about, eMail, favFood, phone, badges} = this.state
        const badgeComponent = badges.map((badge, index) => <Badge key={badge.eMail} index={index} badgeItems={badge}/>)
        
        const {handleChange, handleSubmit} = this
        return (
            <main>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            minLength="3"
                            onChange={handleChange}
                        />
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            minLength="3"
                            onChange={handleChange}
                        />
                        <br/>
                        <input
                            name="eMail"
                            placeholder="Email"
                            value={eMail}
                            minLength="3"
                            onChange={handleChange}
                        />
                        <input
                            name="pob"
                            placeholder="Place of Birth"
                            value={pob}
                            minLength="3"
                            onChange={handleChange}
                        />
                        <br/>
                        <input
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            minLength="3"
                            type="tel"
                            pattern="[0-9]{10}"
                            onChange={handleChange}
                        />
                        <input
                            name="favFood"
                            placeholder="Favorite Food"
                            value={favFood}
                            minLength="3"
                            onChange={handleChange}
                        />
                        <br />
                        <textarea
                            name="about"
                            placeholder="Tell us about yourself"
                            value={about}
                            minLength="3"
                            onChange={handleChange}
                        />
                        <button 
                        disabled=
                        {!firstName||!lastName||!eMail||!pob||!phone||!favFood||!about}
                        >
                        Submit
                        </button>
                    </form>
                    <hr/>
                        <ul className="ul">
                        {badgeComponent}
                        </ul>
                          
                </div>
            </main>
        )
    }
}

export default App