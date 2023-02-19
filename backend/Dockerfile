FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
ENV APP_APTH=/usr/src
WORKDIR $APP_APTH
ENV PIDFILE=/dev/null

ADD Gemfile $APP_APTH/Gemfile
ADD Gemfile.lock $APP_APTH/Gemfile.lock

RUN bundle install

COPY . .

