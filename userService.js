//'use strict';

angular.module('jasmedApp')
.service('userService', UserService);

function UserService($q){
	var users = [
		{
			name : "Fakhri Shahab",
			avatar : "message",
			content : "Hello My Name is Fakhri Shahab "
		},
		{
			name : "Fakhri Shahab 2",
			avatar : "message",
			content : "Hello My Name is Fakhri Shahab 2"
		},
		{
			name : "Fakhri Shahab 3",
			avatar : "message",
			content : "Hello My Name is Fakhri Shahab 3"
		}
	]	
}

