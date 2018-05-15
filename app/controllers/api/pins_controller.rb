class Api::PinsController < ApplicationController
  def index
    @pins = Pin.all
    render 'api/pins/index'
  end

  def create
    @pin = Pin.new(pin_params)
    # debugger
    if @pin.save
      render 'api/pins/show'
    else
      render json: ["You did not put in all of the required fields."]
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
    if @pin
      render 'api/pins/update'
    else
      render json: ["Unable to find Pin."]
    end
  end

  def destroy

  end

  def pin_params
    params.require(:pin).permit(:name, :user_id, :board_id, :category, :description, :website_url)
  end
end
