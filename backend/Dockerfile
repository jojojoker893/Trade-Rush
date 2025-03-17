# ref: https://hub.docker.com/_/ruby
# ruby 3.4.2 version release page: https://www.ruby-lang.org/ja/news/2025/02/14/ruby-3-4-2-released/
FROM ruby:3.4.2

WORKDIR /usr/src/app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential \
        git \
        libmariadb-dev-compat \
        mariadb-client \
        less \
        vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY backend/Gemfile backend/Gemfile.lock ./
RUN bundle install
