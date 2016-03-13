class TodosController < ApplicationController
  def index
    result = [{ title: 'My first todo', value: 10, option: 'dollars' },
    { title: 'My third todo', value: 100, option: 'pounds' }]

    render json: result, status: 200
  end

  def search
    result = [{ title: 'My first todo - sorted', value: 10, option: 'dollars' },
    { title: 'My second todo - sorted', value: 100, option: 'pounds' }]

    render json: result, status: 200
  end
end
