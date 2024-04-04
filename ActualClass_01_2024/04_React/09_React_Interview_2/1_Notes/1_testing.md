# Testing 
## Defination
    Your code should match the required specification as per the xpectation.

## Types of testing
## Way to test
* Manual Testing: Without using any automated testing a person will check the flow manually and file bugs.
* Automated Testing: We suppose to write testcases.

### Areas of Testing
* Unit Test: Testing a smallest unit of the app/component.
* Functional/Integration test: How your all multiple coponent behvae in cohesion.
* End to End testing ->  How much closer your application is to the real world requirement.(You replicate a fake world example sandbox in this fake only one person try to test the servoce and its flow)

* stress Testing
* perforemance testing 
* security testing


### React: Unit testing
## Tech:(create-react-app) link: https://radixweb.com/blog/steps-to-build-react-project-with-create-react-app

* Jest
    * Test runner: It will find and excutes all the test.
    * It also provide you a feature of descibe, test and expect. 
    * snapshot testng
    * https://jestjs.io/

* React Testing Library
    * Emulate rendering.
    * Find element on the emulated UI.
    * Fire events.

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
