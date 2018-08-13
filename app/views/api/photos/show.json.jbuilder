json.extract! photo, :id, :title, :description, :location
json.photoUrl url_for(photo.photo)
