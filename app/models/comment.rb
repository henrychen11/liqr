class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :photo,
           primary_key: :id,
           foreign_key: :photo_id,
           class_name: :Photo

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
end
