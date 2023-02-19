# VTB BENEFITS

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Environmets](#environments)
* [Installation](#installation)
* [Run_Test](#run_test)

## General info 
VTB Benefits корпоративный веб-сервис, позволяющий увеличить вовлеченность сотрудников
в рабочий процесс, внести в него игровой элемент и повысить мотивационные метрики.

## Technologies
* Ruby
* Rails
* JS/TS
* React

## Installation:
Use Docker and docker-compose
```bash
docker-compose build
docker-compose run --rm backend bash
rails db:create db:migrate db:seed
exit
docker-compose up
```

## Environments
* BLOCKCHAIN_URL - url для blockchain ВТБ
* BLOCKCHAIN_TEST_PUBLIC_KEY - публичный ключ
* BLOCKCHAIN_TEST_PRIVATE_KEY - приватный ключ
* DEVISE_JWT_SECRET_KEY - jwt ключ
* SKIP_STORAGE - пропустить запись в storage
* STORAGE_PATH - путь до storage nginx

## Run_Test
```bash
docker-compose build
docker-compose run --rm backend bash
rails db:test:prepare
rake spec
exit
```