# VTB BENEFITS

### Проект создан в рамках хакатона MORE.Tech 2022

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
* Redux

## Installation:
```shell
git clone --recursive git@gitlab.com:vtb-benefits/vtb-benefits.git
cd vtb-benefits
docker-compose build # Сборка контейнеров приложения
docker-compose run --rm backend rails db:create db:migrate db:seed # создание таблицы, выполнение миграций и сидов
docker-compose up # Старт приложения
```

Затем необходимо перейти на `localhost` и проверить работу приложения

## Environments
* BLOCKCHAIN_URL - url для blockchain ВТБ
* BLOCKCHAIN_TEST_PUBLIC_KEY - тестовый публичный ключ
* BLOCKCHAIN_TEST_PRIVATE_KEY - тестовый приватный ключ
* DEVISE_JWT_SECRET_KEY - секрет для jwt токена
* SKIP_STORAGE - пропустить запись в storage
* STORAGE_PATH - путь до storage

## Run_Test
```bash
docker-compose build
docker-compose run --rm backend bash
rails db:test:prepare
rake spec
exit
```

## Backend workflow

Приложение реализует API для общения с фронтэндом и служит прослойкой между API блокчейна ВТБ.

В папке `app` содержится:
- реализация эндпоинтов на базе Grape API фреймворка
- сервисные объекты (`app/services`) 
- хэлперы для авторизации. 

Общение с БД построенно скозь ORM ActiveRecord, модели которой лежат в папке `app/models`

Схема БД, сиды и миграции расположены в папке `db`


### "Killer" features
- EventCostPredictionSerivce - сервис предикта стоимости мероприятия, ориентированный на баланс пользователей с заранее определенным спредом
- NftGenerationService - сервис генерации NFT-сертификата и создания к нему коллекции
- NftTransferService - сервис трансфера сертификатов между сотрудниками

## Frontend workflow

Монолитный фронтэнд, использующий компоненты на базе material_ui. Стэк гибкий, позволяет легко перекоординироваться в разных ситуациях, повсеместно используется

### "Killer" features
Верстка компонентов модального окна
"Блочная" структура фронтэнда
