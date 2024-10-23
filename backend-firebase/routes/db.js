const express =  require ("express");
const router = express.Router();
const {addEmployee, updateEmployee}  =  require('../controllers/db');
const {getEmployees} =  require('../controllers/db');
const {deleteEmployee} =  require('../controllers/db');

router.post('/addEmployee' , addEmployee),
router.get('/getEmployees', getEmployees),
router.delete('/deleteEmployee/:id', deleteEmployee);
router.put('/updateEmployee/:id', updateEmployee)

module.exports =  router ;

 