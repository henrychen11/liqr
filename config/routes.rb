Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
  end

  resource :session, only: [:new, :create, :destroy]

end
