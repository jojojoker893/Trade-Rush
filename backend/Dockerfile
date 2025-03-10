FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y vim

WORKDIR /traderush

COPY Gemfile /TradeRush/Gemfile
COPY Gemfile.lock  /TradeRush/Gemfile.lock

RUN gem update --system
RUN bundle update --bundler

RUN bundle install
COPY . /traderush

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]