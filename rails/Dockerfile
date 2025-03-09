FROM ruby:3.3.7
RUN apt-get update -qq && apt-get install -y vim

RUN mkdir /TradeRush
WORKDIR /TradeRush
COPY Gemfile /TradeRush/Gemfile
COPY Gemfile.lock /TradeRush/Gemfile.lock

RUN gem update --system
RUN bundle update --bundler

RUN bundle install
COPY . /TradeRush

COPY entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]