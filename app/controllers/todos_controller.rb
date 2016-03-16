class TodosController < ApplicationController
  def index
    result = [
      { title: 'My first todo', value: 10, option: 'dollars' },
      { title: 'My second todo', value: 100, option: 'pounds' },
      { title: 'My third todo', value: 1, option: 'pounds' },
      { title: 'My forth todo', value: 5, option: 'dollars' }
    ]

    render json: result, status: 200
  end

  def search
    result = [
      { id: 1, title: '[reloaded] My first todo', value: 10, option: 'dollars' },
      { id: 4, title: '[reloaded] My second todo', value: 100, option: 'pounds' },
      { id: 2, title: '[reloaded] My third todo', value: 1, option: 'pounds' },
      { id: 1, title: '[reloaded] My forth todo', value: 5, option: 'dollars' }
    ]

    render json: result, status: 200
  end
end
