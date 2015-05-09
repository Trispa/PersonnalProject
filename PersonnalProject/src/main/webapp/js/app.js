requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app/build",
	  "components" : "../app/build/components",
	  "entities" : "../app/build/entities"

    }
});

// Load the main app module to start the app
requirejs(["app/index"]);