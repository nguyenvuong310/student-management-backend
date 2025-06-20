
build:
	docker buildx build --platform linux/amd64 -t vuong676/vdt:latest .

push:
	docker push vuong676/vdt:latest

up: 
	npm run start:dev

bootstrap:
	npm install --force or --legacy-peer-deps
	docker compose up -d
	npm run start:dev

