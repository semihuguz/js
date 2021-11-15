import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import { UserService } from "../services/userService.js"

//console.log("User Component Loaded")
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Semih","UGUZ","Karaman")
let user2 = new User(2,"Ferdi","Tural","Kars")

userService.add(user1)
userService.add(user2)

console.log(userService.list())


userService.getById()
console.log(userService.getById(2))


//prototyping
let customer  = {id:1, firstName:"Semih"}
customer.lastName = "UGUZ"

//console.log(customer.lastName)