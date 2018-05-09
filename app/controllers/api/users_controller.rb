class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/user/show"

    else
      render json: ["Invalid username or password"] status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render "api/user/show"
    else
      render json: ["Invalid user"], status: 401
    end

  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
