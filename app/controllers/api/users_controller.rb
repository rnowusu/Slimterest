class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"

    else
      render json: @user.errors.full_messages, status: 401#["User already exists."], status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render "api/users/show"
    else
      render json: ["Invalid user"], status: 401
    end

  end

  def user_params
    params.require(:user).permit(:username, :password)
      #add email column for user
  end
end
