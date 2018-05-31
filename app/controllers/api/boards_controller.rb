class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where(user_id: params[:user_id])
    render 'api/boards/index'
  end

  def create
    @board = Board.new(board_params)
    #board.user_id = current_user.id
    if @board.save
      render 'api/boards/show'
    else
      render json: ["Board has invalid parameters"]
    end
  end

  def show
    @board = Board.find_by(id: params[:id])
    if @board
      render 'api/boards/show'
    else
      render json: ['Board not found']
    end
  end

  def board_params
    params.require(:board).permit(:name, :secret_status, :user_id)
  end
end
