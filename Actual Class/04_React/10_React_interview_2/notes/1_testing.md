# Testing
## Defination:
    You code match the required specification.


## Types of Testing
## Way to test
* Maual Testing
* Automated Testing

### Areas of Testing
* Unit Test: Testing a smallest unit of the app/component.
* Functional/Itegration test: How you multiple component behave in cohesion.
* End to end Testing -> how much closer yopur application is to the requirement.

* Stress Testing
* performance Testing
* Security Testing. 

### React : Unit testing
## Tech:(create-react-app) link: https://radixweb.com/blog/steps-to-build-react-project-with-create-react-app
* Jest
    * Test Runner : It find and excutes all the test.
    * It also provoide you feature of describe, test and expect.
    * Snapshot testing
    * https://jestjs.io/

* React Testing Library
    * Emulate Rendering
    * Find elment on the emulated UI.
    * Fire Events  


Testing Redux files: https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components

### What is required to test a react component???
* Snapshot test
* initial State
* Update to that initial state   

### When to write a unit testcase(Recommendation)
* only those component which critical/complex

## TDD: Test driven Development (red-green)
`Usecase`: requirements are stable
* first write all the testcases -> write the component
* rfractor all your testcases -> optimize your component

