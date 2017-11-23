@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_url, :title, :description, :author_id
    json.author photo.author.username
  end
end
