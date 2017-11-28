@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :photo_id, :author_id
    json.author_username comment.author.username
  end
end
