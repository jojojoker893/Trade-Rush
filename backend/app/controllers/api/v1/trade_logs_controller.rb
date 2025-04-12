class Api::V1::TradeLogsController < ApplicationController
  before_action :authenticate_user

  def create
    trade_log = current_user.trade_logs.new(trade_params)

    if trade_log.save
      puts "profitloss: #{trade_log.profitloss}"
      puts "before found: #{current_user.found}"

      current_user.found += trade_log.profitloss

      puts "after found: #{current_user.found}"

      if current_user.save
        puts "成功"
      else
        puts "失敗"
        puts current_user.errors.full_messages

      end

      render json: { message: "Log created"}, status: :ok
    else
      render json: { errors: trade_log.errors.full_messages }, status: :unprocessable_entity
    end
  end

end

private

def trade_params
  params.permit(:profitloss)
end