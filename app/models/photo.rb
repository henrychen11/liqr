class Photo < ApplicationRecord
  validates :img_url, presence: true

  belongs_to :author,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :User

  has_many :photo_albums,
           primary_key: :id,
           foreign_key: :photo_id,
           class_name: :PhotoAlbum,
           dependent: :destroy
end
