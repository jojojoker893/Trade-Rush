class Api::V1::TradeLogsController < ApplicationController
  before_action :authenticate_user

  def create
    trade_log = current_user.trade_logs.new(trade_params)

    if trade_log.save
      current_user.found += trade_log.profitloss
      current_user.save

      render json: { capital: current_user.found}, status: :ok
    else
      render json: { errors: trade_log.errors.full_messages }, status: :unprocessable_entity
    end
  end

end

private

def trade_params
  params.permit(:profitloss)
end