knexfile = ./src/database/knexfile.ts

migrate:
	npx knex migrate:make init --knexfile $(knexfile)

migrate-latest:
	npx knex migrate:latest --knexfile $(knexfile)

migrate-down:
	npx knex migrate:down --knexfile $(knexfile)

seed:
	npx knex seed:make index --knexfile $(knexfile)

seed-run: 
	npx knex seed:run --knexfile $(knexfile)

up:
	docker-compose up -d

down:
	docker-compose down