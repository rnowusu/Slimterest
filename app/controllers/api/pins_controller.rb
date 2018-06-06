class Api::PinsController < ApplicationController
  def index
    # puts "I AM IN INDEX"
    # puts params
    # puts "THOSE WERE PARAMS"
    #
    @pins = Pin.all
    user_id = params[:user_id]
    if user_id
      @pins = Pin.where(user_id: user_id)
      render 'api/pins/index'
    else
      render 'api/pins/index'
    end
  end

  def create
    @pin = Pin.new(pin_params)
    # @pin.user_id = current_user.id
    # debugger
    if @pin.save
      render 'api/pins/show'
    else
      render json:
      @pin.errors.full_messages # ["You did not put in all of the required fields."]
    end
  end

  def show
    @pin = Pin.find_by(id: params[:id])
    if @pin
      render 'api/pins/show'
    else
      render json: ["Unable to find Pin."]
    end
  end

  def update
    @pin = Pin.find_by(id: params[:id])
    if @pin.update_attributes(pin_params)
      render 'api/pins/show'
    else
      render json: ["Unable to find Pin."]
    end
  end

  def destroy
    @pin = Pin.find_by(id: params[:id])
    @pin.destroy
  end

  def pin_params
    params.require(:pin).permit(:name, :user_id, :board_id, :category, :description, :website_url, :picture)
  end
end
