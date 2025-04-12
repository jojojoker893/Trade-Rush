class Api::V1::TradeLogsController < ApplicationController

  def create
    trade_log = authenticate_user.trade_logs.new(trade_params)
    if trade_log.save
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