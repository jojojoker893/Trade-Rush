class ApplicationController < ActionController::Base
  def index
    render json: { message: "Success Health Check!" }, status: :ok    
  end
end
