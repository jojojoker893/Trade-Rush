class Api::V1::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      render json:{ token: create_token(user.id), status: :created }
    else
      render json: { 
        user: user,
        errors: user.errors.full_messages
      },
      status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      render json: { token: create_token(user.id), status: :ok }
    else
      render json: {
        user: user,
        errors: "名前またはパスワードが違います。",
        status: :unauthorized
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

end
