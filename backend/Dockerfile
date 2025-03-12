FROM ruby:3.1.2

RUN apt-get update -qq &&\
  apt-get install -y build-essential libpq-dev libmysqlcilent-dev vim &&\
  rm -rf /var/lib/apt/lists/*

WORKDIR /backend

COPY Gemfile /backend/Gemfile
COPY Gemfile.lock /backend/Gemfile.lock

RUN gem update --system
RUN bundle update --bundler
RUN bundle install

COPY . /backend

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]
