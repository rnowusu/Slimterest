class Pin < ApplicationRecord
  validates :name, :category, :user_id, :board_id, presence: true

  belongs_to(
    :user,
    class_name: :User,
    foreign_key: :user_id
  )

  belongs_to(
    :board,
    class_name: :Board,
    foreign_key: :board_id
  )
end
