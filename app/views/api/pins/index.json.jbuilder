json.array! @pins do |pin|
  json.id pin.id
  json.name pin.name
  json.user_id pin.user_id
  json.board_id pin.board_id
  json.description pin.description
  json.website_url pin.website_url
  json.picture_url asset_path(pin.picture.url)
end
