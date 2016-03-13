Rails.application.routes.draw do
  get 'vue', controller: :demos, action: 'vue'

  resources :todos
end
