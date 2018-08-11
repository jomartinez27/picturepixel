class FixPhoto < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :photo_id
    remove_column :photos, :photographer_id
  end
end
