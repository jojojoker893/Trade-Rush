FROM ruby:3.4.2

RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    libmysqlclient-dev \
    vim \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /traderush

COPY Gemfile Gemfile.lock /TradeRush/

RUN gem update --system && bundle install

COPY . /traderush

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]