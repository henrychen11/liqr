class Photo < ApplicationRecord
  validates :img_url, presence: true

  belongs_to :author,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: 'User'

  has_many :photo_albums,
           primary_key: :id,
           foreign_key: :photo_id,
           class_name: 'PhotoAlbum',
           dependent: :destroy

  has_many :albums,
          through: :photo_albums,
          source: :album

  has_many :comments,
         primary_key: :id,
         foreign_key: :photo_id,
         class_name: 'Comment',
         dependent: :destroy

  # def self.top_five_results(query_params)
  #   params = '%' + query_params + '%'
  #   Photo.where('lower(title)' LIKE ? , params).limit(5)  
  # end

end
