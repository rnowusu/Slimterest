# json.array! @pins do |pin|
#   json.id pin.id
#   json.name pin.name
#   json.user_id pin.user_id
#   json.board_id pin.board_id
#   json.description pin.description
#   json.category pin.category
#   json.picture_url asset_path(pin.picture.url)
# end

# json.pins do
  # @pins
# end


 @pins.each do |pin|
   json.set! pin.id do
      json.id pin.id
      json.name pin.name
      json.user_id pin.user_id
      json.board_id pin.board_id
      json.description pin.description
      json.category pin.category
      json.picture_url asset_path(pin.picture.url)
    end
end
