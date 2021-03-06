Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :new, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :photos
  end


  root "static_pages#root"
end
