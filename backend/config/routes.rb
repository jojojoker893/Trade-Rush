Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/trade', to: 'users#capital'
      resources :users, only: [:create]
      post "/login", to: "users#login"
    end
  end

end
