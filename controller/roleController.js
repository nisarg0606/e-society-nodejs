const RoleModel = require("../Model/roleModel")

//addRole
module.exports.addRole = function (req, res) {
    let roleName = req.body.roleName;

    let role = new RoleModel({
        "roleName": roleName
    })

    role.save(function (err, data) {
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
                "msg": "Role Added!!"
            })
        }
    })
}


//getAllRoles
module.exports.getAllRoles = function (req, res) {
    RoleModel.find(function (err, data) {
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
                "msg": "Roles Retrived!!"
            })
        }
    })
}



//updateRole
module.exports.updateRole = function (req, res) {
    let roleId = req.body.roleId
    let roleName = req.body.roleName

    RoleModel.updateOne({ _id: roleId }, { roleName: roleName }, function (err, data) {
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
                "msg": "Role Updated!!"
            })
        }
    })
}



//deleteRole
module.exports.deleteRole = function (req, res) {
    let roleId = req.body.roleId
    RoleModel.deleteOne({ _id: roleId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Somethong went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Role Deleted!!"
            })
        }
    })
}