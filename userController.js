angular.module('jasmedApp')
.controller('userController', UserController);

function UserController(userService){
	// console.log('controller run')

	userService
		.loadAllUsers()
		.then( function(users){
			console.log(users)
		})
}