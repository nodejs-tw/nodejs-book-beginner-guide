build:
	@node_modules/.bin/giik source book

server:
	@node_modules/.bin/http-server book
