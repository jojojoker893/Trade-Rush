require 'rails_helper'

RSpec.describe "TradeLogs", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/trade_logs/create"
      expect(response).to have_http_status(:success)
    end
  end

end
