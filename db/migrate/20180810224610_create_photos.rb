class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :photo_id, null: false
      t.integer :photographer_id, null: false
      t.text :description
      t.string :title, null: false
      t.integer :location

      t.timestamps
    end
  end
end
