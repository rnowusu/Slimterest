Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create, :show] do
      resources :pins, only: [:create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index]
  end

  root to: "static_pages#root"
end
