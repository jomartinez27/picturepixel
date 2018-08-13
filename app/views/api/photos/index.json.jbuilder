json.array! @photos do |photo|
  json.extract! photo, :id, :title
  json.photoUrl url_for(photo.photo)
end
