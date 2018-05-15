class ChangeBoardConstraints < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:boards, :secret_status, true, default = false)
    change_column_null(:boards, :user_id, false, default = nil)
  end
end
