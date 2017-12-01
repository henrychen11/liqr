Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]

    resources :users, only: [:create, :show] do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end

    resources :photos, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:index, :create]
      resources :tags, only: [:index, :create]
    end

    resources :albums, only: [:show, :create, :update, :destroy]
    resources :comments, only: [:show, :update, :destroy]
    resources :tags, only: [:show, :destroy]
    resources :photo_albums, only: [:show, :create, :destroy]

  end


end
