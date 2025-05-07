module TradeLogs
  class CreateTradeLog
    def initialize(user:, params:)
      @user = user
      @params = params
    end

    def call 
      trade_log = @user.trade_logs.new(@params)
      if trade_log.save
        @user.found += trade_log.profitloss
        @user.save
        Result.new(success: true, capital: @user.found)
      else
        Result.new(success: false, errors: trade_log.errors.full_messages)
      end
    end


    class Result
      attr_reader :success, :capital, :errors

      def initialize(success:, capital: nil, errors: nil)
        @success = success
        @capital = capital
        @errors = errors
      end

      def success?
        @success
      end
    end
  end
end