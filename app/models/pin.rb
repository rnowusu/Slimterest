class Pin < ApplicationRecord
  validates :name, :categoty, :user_id, :board_id presence: true

end
