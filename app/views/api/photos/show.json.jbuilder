json.extract! @photo, :id, :title, :description, :location, :photographer_id
json.photoUrl url_for(@photo.photo)
