# Testing Functions with TDD

Review core JavaScript syntax and context through testing functions

## QUnit built-ins

The `tests.js` file has access to the built-in, `QUnit`.

Use the `QUnit.test` method, which will be assigned to a `test` variable.

Pass `expect` to the testing function

## Functions & Tests

Write sound functions with test coverage by following these steps:

1. Identify what the input and output will be of the function
2. Pseudocode through the steps of what need to happen at a granular level
3. Deconstruct the steps into multiple sections within the function if possible
4. Name the test(s) and the function
5. Add an empty test in `tests.js`
6. Create and `export` an empty function in `file.js` and import into `tests.js`
7. Write the test:
    - translate inputs and outputs into the "Arrange" variables
    - write the "Act" function call
    - modify the "Assert" as needed
8. Add any parameters to the function that will be needed based on step 1
9. Write function body line by line with care and thinking critically
10. Check for any successful, passing tests
