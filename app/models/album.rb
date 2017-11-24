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

  has_many :photos,
            through: :photo_albums,
              source: :photo

  def album_cover_url
    picture = self.photos.first
    if picture.nil?
      return nil
    else
      return Photo.find_by(id: picture.id).img_url
    end
  end

end
