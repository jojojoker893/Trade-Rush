Rails.application.routes.draw do
  get "trade_logs/create"
  namespace :api do
    namespace :v1 do
      get '/trade', to: 'users#capital'
      resources :trade_logs, only: [:create]
      resources :users, only: [:create]
      post "/login", to: "users#login"
    end
  end

end
