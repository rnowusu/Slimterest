class CreatePins < ActiveRecord::Migration[5.1]
  def change
    create_table :pins do |t|
      t.string :name, null: false
      t.string :description
      t.string :category, null: false
      t.string :website_url
      t.integer :user_id, null: false
    end
  end
end
