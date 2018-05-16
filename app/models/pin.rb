class Pin < ApplicationRecord
  validates :name, :category, :user_id, :board_id, presence: true

  has_attached_file :picture, default_url: "kristaps-porzingis1.jpg"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

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
