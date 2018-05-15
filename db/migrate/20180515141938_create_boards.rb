class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.boolean :secret_status, null: false
      t.integer :user_id, default: false
      t.timestamps
    end
  end
end
