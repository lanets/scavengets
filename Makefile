# Find the current user id so that we can use it in our containers. Otherwise,
# the files we create (and map on our disk) will be owned by root.
export DOCKER_USER = $(shell id -u)

# Install the node modules for the angular client
# They will be installed directly in angular-client/node_modules, NOT in a
# container. This is done by mapping $$(pwd/angular-client) to
# /opt/angular-client
angular-client/node_modules:
	docker run --rm -t -v $$(pwd)/angular-client:/opt/angular-client -u $(DOCKER_USER) -w /opt/angular-client node:7 npm install

# Also install node_modules for express-server
express-server/node_modules:
	docker run --rm -t -v $$(pwd)/express-server:/opt/express-server -u $(DOCKER_USER) -w /opt/express-server node:7 npm install

.PHONY: nglint
nglint: angular-client/node_modules
	docker run --rm -t -v $$(pwd)/angular-client:/opt/angular-client -u $(DOCKER_USER) -w /opt/angular-client node:7 node_modules/angular-cli/bin/ng lint

.PHONY: docker-run
docker-run: angular-client/node_modules express-server/node_modules
	docker-compose up

.PHONY: clean
clean:
	rm -rf angular-client/node_modules
	rm -rf express-server/node_modules
	- docker-compose kill
	- docker-compose rm -v -f
