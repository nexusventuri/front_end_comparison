Rails.application.routes.draw do
  get 'vue', controller: :demos, action: 'vue'

  resources :todos do
    collection do
      get :search
    end
  end
end
