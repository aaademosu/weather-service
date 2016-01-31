weather-service: Prognostore weather service
========================
Author: Ayodele Ademosu

Technologies: AngularJS, JSP, Wildfly, Maven



Build and Deploy the Quickstart
-------------------------

1. Type this command to build and deploy the archive:

        mvn clean package wildfly:deploy

2. This will deploy `target/weather-service.war` to the running instance of the server.
 

Access the application 
---------------------

The application will be running at the following URL: <http://localhost:8080/weather-service/>.


