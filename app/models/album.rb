class Album < ApplicationRecord
  validates :title, presence: true

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

  has_many :photo_albums,
           primary_key: :id,
           foreign_key: :album_id,
           class_name: :PhotoAlbum,
           dependent: :destroy
end
