class Api::V1::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      render json:{ token: create_token(user.id), status: created}
    end
  end

end
