@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :location, :photographer_id
    json.photoUrl url_for(photo.photo)
  end
end
