1. React Components
  1. State managment
  2. Event Handler
  3. UI
  4. Bussiness Logic

2. State Managment Library:
  a. State Managment
    * Set the state
    * Update of the state

  b. If we have an given realife application
    * 1000s of coponents
    * passing the props to required coponents.

  c. Problem with complex apps.
    * Individual state managment.
    * Prop drilling(Internal component communication) -> 1000s of component if there is common state then to send that state , you need to pass props to whole chain of component.

  d. We have a state mangment library(A thing which help us to audit all the state for us)  
    * centeral state mangemnet
    * Avoid prop drilling

3. Redux
   1. Third party js library for state mangment(install it)
      * Link to install/read: https://redux-toolkit.js.org/introduction/getting-started
      * npm install react-redux @reduxjs/toolkit

   2. It give you feature known as 'store' -> where all the state are stored.
   3. It also provide a centralized state managment withthe help of feature known as 'slice'.

   