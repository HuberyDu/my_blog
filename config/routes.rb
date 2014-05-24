Bancheng::Application.routes.draw do
  captcha_route

  resources :home, only: :index
  resources :leave_messages, only: :create
  resources :articles do
    resources :comments
  end
  namespace :admin do
    resources :users
    resources :home, only: :index
    resources :articles, except: :show 
  end

  devise_for :users, controllers: {sessions: "sessions"}

  root :to => 'home#index'

end
