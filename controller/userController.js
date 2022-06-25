const UserModel = require("../model/userModel")

//Add User
module.exports.addUser = function (req, res) {
    let flatNo = req.body.flatNo
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let dateOfBirth = req.body.dateOfBirth
    let age = req.body.age
    let gender = req.body.gender
    let contactNo = req.body.contactNo
    let email = req.body.email
    let occupation = req.body.occupation

    let user = new UserModel({
        "flatNo": flatNo,
        "firstName": firstName,
        "lastName": lastName,
        "dateOfBirth": dateOfBirth,
        "age": age,
        "gender": gender,
        "contactNo": contactNo,
        "email": email,
        "occupation": occupation
    })

    user.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "User Added!!"
            })
        }
    })
}

//Update User
module.exports.updateUser = function (req, res) {
    let userId = req.body.userId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let dateOfBirth = req.body.dateOfBirth
    let age = req.body.age
    let gender = req.body.gender
    let contactNo = req.body.contactNo
    let email = req.body.email
    let occupation = req.body.occupation

    UserModel.updateOne({ _id: userId }, { firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, age: age, gender: gender, contactNo: contactNo, email: email, occupation: occupation }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "User Information Updated!!"
            })
        }
    })

}

//Delete User
module.exports.deleteUser = function (req, res) {
    let userId = req.body.userId

    UserModel.deleteOne({ _id: userId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "User Information Deleted!!"
            })
        }
    })
}

//List Mmebers
module.exports.getAllUsers = function (req, res) {
    UserModel.find(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        } 
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Users Retrived!!"
            })
        }
    })
}