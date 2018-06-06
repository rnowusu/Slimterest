Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create, :show] do
      resources :pins, only: [:create, :update, :index, :update, :destroy]
      resources :boards, only: [:create, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :show]
    resources :boards, only: [:index]
  end

  root to: "static_pages#root"
end
# # user_pins = params[:user_id]
# if user_pins
#   get the user pins
#   render
# else
#   get all the pins
#   render
# end
#
# @pins = params[:user_id] ? Pins.where(user_pins) : Pins.all
# render
