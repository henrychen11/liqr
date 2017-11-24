@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :author_id
    json.author_username album.author.username
  end
end
