Problem Statement:
Create two API’s which can perform the specified CRUD operations.The project structure should
have models, middlewares, controllers and services. Write MongoDB queries to fetch, update,
add or delete data from the specified collections. You can assume that the collections already
exist in the database and just define the project structure.
Customer API
1. Get all customers List with status ACTIVE [GET]
2. Delete customer. [DELETE]
3. Create new customer [POST]
Card API
1. Get all Card List[GET]
2. Create new card [POST]


Customer collection field:
Field Type Description
firstName string
lastName string
mobileNumber string 10 digits long
DOB date
emailID string abc@xyz.com
address string
customerID string UUID
status string ACTIVE / INACTIVE


Card collection field:
Field Type Description
cardNumber string Auto_increment e.g: C001
cardType String [REGULAR/SPECIAL]
customerName string
status string [ACTIVE/INACTIVE] Default: ACTIVE
vision string
customerID string Reference from customer  


