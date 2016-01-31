<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="weatherApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="weatherApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="weatherApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="weatherApp" class="no-js"> <!--<![endif]-->
  <head>
<meta charset="UTF-8">
<title>Weather Service </title>
<link rel="shortcut icon" href="favicon.png" />
<link rel="stylesheet" href="css/pure-min.css">
<link rel='stylesheet' href='css/main.css' />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<noscript>Your browser does not support JavaScript!</noscript>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</head>
<body>
  <%@ include file="header.jsp"%>
  <div id='content-main' ng-view></div>
  <%@ include file="footer.jsp"%>
  </body>
</html>
