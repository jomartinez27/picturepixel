class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :photographer_id, :integer
  end
end
