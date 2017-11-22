Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end
    resource :session, only: [:new, :create, :destroy]

    resources :photos, only: [:index, :create, :show, :update, :destroy]
    resources :albums, only: [:show, :create, :update, :destroy]

  end


end
