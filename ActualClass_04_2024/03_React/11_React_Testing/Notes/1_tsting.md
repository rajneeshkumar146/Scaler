# Testing
## Defination:
       Your code matches the required specification.


# Types of testing
### Way to you test.
* Maual Testing.
* Automated testing.

### Areas of testing.
* Unit Test:  Testing a small unit of the app -> component.
* Functional/Integration Test:  How your multiple component behave in cohesion.
* End To end testing: How much closer your application is to the requiement
                    -> Sandbox testing.

* Stress Testing:
* Performance Testing:
* Security Testing:

## Generic Level:
1. Arrange.
2. Act -> run your app in a kind of virtual/real environment.
3. assert your expectation. 


### React : unit testing  
## Tech:(create-react-app) 
* JEST 
    * test runner : it finds and excutes all the tests
    * It also provides you feature of describe , test and expect
    * snapshot testing
    *  https://jestjs.io/

    * Test a particular file: npm test -- SomeTestFileToRun 

* React Testing Library
    * Emulate rendering.
    * Find element on the emulated UI.
    * Fire events.

Testing Redux files: https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components
    
### What is required to test a react component???
* Initial State
* Multiples Update to that initial state  
* Snapshot test  -> snapshot will created automatically when you run your test file. `expect(asFragment()).toMatchSnapshot();`

