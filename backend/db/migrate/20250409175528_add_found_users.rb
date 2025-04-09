class AddFoundUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :found, :integer, default: 100000
  end
end
