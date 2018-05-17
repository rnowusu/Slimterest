json.array! @boards do |board|
  json.name board.name
  json.user_id board.user_id
  json.secret_status board.secret_status
end
