  'use strict';
  var app = angular.module('myApp.controllers', []);

  function AppCtrl($scope, $http) {
    }

  function HomeCtrl($scope, $http) {
    $scope.hideButton = false; 
    var fd = new FormData();
    $scope.uploadFile = function(files) {
      //Take the first selected file
      fd.append("file", files[0]);
      $http.post('/api/resumeUpload', fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    })
      .success(function(data) {
        $scope.myUploadedFile = data
       })
      .error();
    };
    $scope.unsent = false;
    $scope.sent = true;
    $scope.formError = false;
    $scope.postEmail = function(form, $files) {
       if (form.$valid == true && $scope.myUploadedFile.length > 1) {
      $scope.hideButton = true; 
      $scope.sent = false;
      $http.post('/api/emailInfo', 
        {"info": {
          Name  : $scope.nameModel,
          Phone : $scope.phoneModel,
          Email : $scope.emailModel,
          About : $scope.aboutModel,
          Resume: $scope.myUploadedFile
                 }})
        .success(function(data) {
          $scope.sent = true;
          $scope.unsent = true;
        })
        .error(function(err, data) {
          $scope.success = data;
        });

      } else {
        $scope.formError = true;
      }
    }

  }
