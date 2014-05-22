class AddColumnEmailToLeaveMessage < ActiveRecord::Migration
  def change
  	add_column :leave_messages, :email, :string
  end
end
