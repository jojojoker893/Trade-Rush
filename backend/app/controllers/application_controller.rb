class ApplicationController < ActionController::API

  def current_user
    @current_user
  end

  def authenticate_user
    authorization_header = request.headers[:Authorization]
    unless authorization_header
      return render_unauthorized("ログインが必要です")
    end

    token = authorization_header
    secret_key = Rails.application.credentials.secret_key_base

    begin
      decoded_token = JWT.decode(token, secret_key)[0]
      @current_user = User.find(decoded_token["user_id"])
    rescue ActiveRecord::RecordNotFound
      render_unauthorized("ユーザが見つかりません。")
    rescue JWT::DecodeError => e
      render_unauthorized("トークンエラー: #{e.message}")
    end
  end

  def create_token(user_id)
    payload = { user_id: user_id }
    secret_key = Rails.application.credentials.secret_key_base
    JWT.encode(payload, secret_key)
  end

  def render_unauthorized(message)
    render json: { error: message }, status: :unauthorized
  end

end
