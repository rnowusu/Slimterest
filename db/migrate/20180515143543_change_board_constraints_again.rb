class ChangeBoardConstraintsAgain < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:boards, :secret_status, false)
    change_column_default(:boards, :user_id, nil)
  end
end
