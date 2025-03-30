class ApplicationController < ActionController::Base
  def index
    render json: { message: "Success Health Ceck!" }, status: :ok    
  end
end
