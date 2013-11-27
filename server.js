var stardog = require("stardog");

var conn = new stardog.Connection();

conn.setEndpoint("http://localhost:5820/");
conn.setCredentials("admin", "admin");
conn.setReasoning("RL"); // set to QL for no reasoning
conn.query({ 
    database: "game", 
    query: "select ?o { <file:/var/www/rioultf/svn/m2dnr2i-systeme/ontology/data/maze-game#Cocheese> rdf:type ?o } ",
    limit: 10, 
    offset: 0 
},
	   function (data) {
               console.log(data.results.bindings);
	   });