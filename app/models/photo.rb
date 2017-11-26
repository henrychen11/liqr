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

  has_many :albums,
          through: :photo_albums,
          source: :album
end

#
# <Link key={id} to={`/albums/${id}`}>
#   <div className="">
#     <Image publicId={albums[id].album_cover_url} cloudName="shuttr" >
#       <Transformation width="100" height="100" crop="thumb" />
#     </Image>
#     {albums[id].title}
#   </div>
# </Link>
