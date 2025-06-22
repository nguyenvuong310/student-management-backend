
build:
	docker build -t vuong676/listvdt-backend-api:latest .

push:
	docker push vuong676/vdt:latest

up: 
	npm run start:dev

bootstrap:
	npm install --force or --legacy-peer-deps
	docker compose up -d
	npm run start:dev

