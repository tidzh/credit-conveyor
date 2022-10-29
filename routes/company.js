const express = require('express');
const router = express.Router();
const { db } = require("../models");

// TODO:
// 1. Remove all employees from the tenth department
// 2. Find the employee with the highest salary range (max_salary) and minimum (min_salary)
// 3. Output information from the database about the employee with the role of "President"
// 4. Get all the employees who are in London

router.get('/', (request, response) => {
  
  db.query('SELECT * FROM countries', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
  
});

module.exports = router;
