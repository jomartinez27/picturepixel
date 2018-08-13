json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description, :location
  json.photoUrl url_for(photo.photo)
end
