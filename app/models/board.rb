class Board < ApplicationRecord
  validates :name, :user_id, presence: true;

  has_many(
  :pins,
  class_name: :Pin,
  foreign_key: :board_id
)
  belongs_to(
  :user,
  class_name: :User,
  foreign_key: :user_id
)
end
