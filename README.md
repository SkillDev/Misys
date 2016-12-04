# Misys
Version 1.0
Required : npm, bower 

To add our package to your project:

1 : Download the package
    To download the package you have to run this commande : "bower install misys-etna-skilldev"
    
2 : Inject "misys" to your Angular module.
    ex : var app = angular.module("json", ["misys"]);
    
3 : Link Javascript files and CSS to your index.html page:
    
    CSS : <link rel="stylesheet" type="text/css" href="bower_components/jsoneditor/jsoneditor.css">
    
    JS (add them before your own js files):  
          <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
          <script type="text/javascript" src="bower_components/jsoneditor/jsoneditor.min.js"></script>
          <script type="text/javascript" src="bower_components/angular-jsoneditor/angular-jsoneditor.js"></script>
          <script type="text/javascript" src="bower_components/Misys/app.js"></script>

4: Add the directive to your page :
    <my-input></my-input>
