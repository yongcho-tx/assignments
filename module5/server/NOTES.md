# Intro to Express
    * Initialize a new node project
        - npm init -y
        - npm install <dependencies>
            - npm install express
            - npm install -g nodemon
            - npm install uuid

# Vocabulary
    # Route
     * An event listener for http requests

    # Endpoint
        * "/item" "/user" (these are what the routes will listen for)

    # Port
    *localhost:9000/

# Nodemon
    * npm install -g nodemon


# Intro to REST API architecture
    # REST - Representational State Transfer

    # Resource - Single item (object) / single instance of object in a database
        /user/98ejf9fe98 (get a single user)

    # Collection - A collection of similar items in a database
        /users (collection of users) / mountain bikes

    # Base (root) URL - http://amazon.com/

    # API Endpoint - http://amazon.com/movies => movies is the endpoint
        - nouns are greater than verbs

    # Parameters - /movies/:movieId

    # Query (query string) - /movies?genre=action&year=1999
            return genre that is action and from year 1999
    # Client - Frontend

    # Server - Intermediary
        -receives request form the client and performs an action

    # Request Method - CRUD  - GET POST PUT DELETE


# Middleware - a function that fires on the inbetween
    # What is it?
        * app.use()
            1. (optional) - Mount Path (endpoint)
            2. Callback function - receives the request, response objects, also the 'next' function

    # The "next" function
        * Moves on to the middleware in line on our server

        example: app.use("/items", (req. res, next) => {
            console.log("The items Middleware was executed")
            next()
        })

# Request Body (req.body)



# URL Parameters

    # Parts of a URL
        * Base - http://amazon.com
        * Endpoint - http://amazon.com/images
        * Parameter - http://amazon.com/images/85783904sfv (the lst part being an ID)
        * Query


# URL Queries

    # Query string - (typically to filter results)
        * Begins with the "?"
        * Built of key=value pairs
        * Multiple queries separate by the "&"

# Console errors in Express
    # User A Logger
        * npm install morgan (per project, not global)