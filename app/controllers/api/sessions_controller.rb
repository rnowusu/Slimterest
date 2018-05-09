class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user #.save
      login(@user)
      # render user show page api/users.show
    else
      render json: @user.errors.full_messages
    end
  end

  end

  def destroy
    logout
  end
end
