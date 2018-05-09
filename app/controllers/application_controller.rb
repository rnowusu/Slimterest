class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # before_action :ensure_logged_in
  helper_method :current_user, :logged_in?, :logout

  def login(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    @user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    render json: ["No user logged in"] unless logged_in?
    # redirect_to '/' unless logged_in?
  end
end
