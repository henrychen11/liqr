class CreatePhotoAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :photo_albums do |t|
      t.integer :album_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :photo_albums, [:album_id, :photo_id], unique: true
  end
end
