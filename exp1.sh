# add the STARDOG_HOME constant to your .bashrc and to the PATH 
export PATH=$STARDOG_HOME/bin
# start the stardog service
stardog-admin server start
# insert the OWL database of the game
stardog-admin db create -n game /var/www/rioultf/svn/m2dnr2i-systeme/ontology/data/game.owl
# query the current state
stardog query "game;reasoning=RL" "select ?o { <file:/var/www/rioultf/svn/m2dnr2i-systeme/ontology/data/maze-game#Cocheese> rdf:type ?o } "

