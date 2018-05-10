class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user #.save
      login(@user)
      render "api/users/show"
      # render user show page api/users.show
    else
      render json: ["no user found"], status: 422 #json: @user.errors.full_messages
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No user logged in"], status: 404
    end
  end

end