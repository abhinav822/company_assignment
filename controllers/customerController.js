const customerModel = require('../models/customerModel');

// 1. Get all customers List with status ACTIVE [GET]

exports.getAllCustomers = async (req, res) => {

    try {
        const customers = await customerModel.find({ status: 'ACTIVE' });
        res.status(200).json({
            status: 'success',
            data: {
                customers
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

// 2. Delete customer by id [DELETE]

exports.deleteCustomer = async (req, res) => {
    try {
      const customer = await customer.findById(req.params.id);
      if (customer) {
        await customer.deleteOne({_id:req.params.id});  // _id:req.params.id is used to delete the customer by id
        res.status(200).json({ message: "Customer deleted successfully" });
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//   3. Create new customer [POST]


exports.createCustomer = async (req, res) => {

    try {
        const newCustomer = await customerModel.create(req.body); //getting error customerModel.create is not a function so to fix this error we need to import our customerModel in our app.js file like this: const customerModel = require('./models/customerModel'); in line 3
        res.status(201).json({
            status: 'success',
            data: {newCustomer}
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}


