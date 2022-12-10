### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
    a JSON web token, delivers a payload of info that is signed with a secret key that allows for easy validation

- What is the signature portion of the JWT?  What does it do?
    the part that has the secret key that allows for the actual validation

- If a JWT is intercepted, can the attacker see what's inside the payload?
    yes.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
    using an authentication middlware that examines the JWT's secret key 

- Compare and contrast unit, integration and end-to-end tests.
    Unit tests are simple tests of a single function, integration tests test how different parts work together,
    and end-to-end tests test a full user flow of actions

- What is a mock? What are some things you would mock?
    a simulated object that mimics the behavior of the smallest testable parts of an app

- What is continuous integration?
    a practice where devs regularly merge their code changes to a central repository

- What is an environment variable and what are they used for?
    a variable that exists at a high level and influence how certain processes may run

- What is TDD? What are some benefits and drawbacks?
    test-driven development. benefit is that you test as you go and make sure that your app is functional at all 
    stages, but drawbacks include the slower pace of development and writing tests for trivial bits of code that
    don't necesarily need them

- What is the value of using JSONSchema for validation?
    Makes sure that invalid data doesn't get put into a database

- What are some ways to decide which code to test?
    the more moving parts a given section of code has, the more likely it is that it'll help to test it

- What does `RETURNING` do in SQL? When would you use it?
    returns values after a query, very useful when confirming that the correct information was inserted/removed/whatever from the database

- What are some differences between Web Sockets and HTTP?
    http is stateless and wordy/long. websockets are smaller and are useful to tell a browser that something has changed

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    Flask definitely. javascript's syntax is just more clunky and annoying to work with in my opinion, where Flask/Python felt much
    more streamlined
