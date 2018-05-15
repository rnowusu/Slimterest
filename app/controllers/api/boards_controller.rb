class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
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
