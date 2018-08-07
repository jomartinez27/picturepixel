class FixColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :location, :integer
    add_column :users, :email, :string, null: false
  end
end
