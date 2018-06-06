class Api::BoardsController < ApplicationController
  def index
    # debugger
    @boards = Board.all
    # if params[:user_id]
    #   @boards = Board.where(user_id: params[:user_id])
    # end
    render 'api/boards/index'
  end

  def create
    # debugger
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
