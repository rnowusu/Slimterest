class AddBoardIdtoPins < ActiveRecord::Migration[5.1]
  def change
    add_column :pins, :board_id, :integer, null: false
    add_column :pins, :created_at, :datetime, null: false
    add_column :pins, :updated_at, :datetime, null: false
  end
end
