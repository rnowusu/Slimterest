class AddAttachmentPictureToPins < ActiveRecord::Migration
  def self.up
    change_table :pins do |t|
      t.attachment :picture
    end
  end

  def self.down
    remove_attachment :pins, :picture
  end
end
