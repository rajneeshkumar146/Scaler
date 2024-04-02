1. React Components :
    1. State Managment.
    2. Event Handlers.
    3. UI
    4. Bussiness Logic.

2. State Managment Library:
    a. State Managment
        * Set the state
        * update of the state
    b. If we have an given realife application.
        * 1000s of components
        * passing the props to required coponents.
    c Problem with complex apps 
        * Individual state managment.
        * Prop drilling (Internal component communication) -> 1000's of component if there is common state then to send that state, you need to pass the props to whole chain of components.
    d. We can have a state managment library(A thing which help us to audit all state for us)
        * Central state managment.
        * Avoid prop drilling.

3. Redux:
   1. Third party Js library for state managment(install it)
        * Link to install/read: https://redux-toolkit.js.org/introduction/getting-started
        * Command: npm install react-redux @reduxjs/toolkit
    2. It gives you feature know as 'store' -> where all the state are stored.
    3. It also provide a centralized state managment with the help of feature know as 'slice'
   
   slice:
       * Providing state to a component.