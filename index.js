
var employee = { name: "Sam", streetAddress: "11 Broadway" };


// Test 1 and 2
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  // Test 3
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Test 4 and 5
  function deleteFromEmployeeByKey(employee, key) {
    var clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
  }
  
  // Test 6 and 7
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  