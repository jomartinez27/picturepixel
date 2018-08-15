export const fetchPhotos = () => (
  $.ajax({
    url: '/api/photos',
    method: 'GET'
  })
)

export const createPhoto = photo => (
  $.ajax({
    url: '/api/photos',
    method: 'POST',
    data: photo,
    contentType: false,
    processData: false
  })
)

export const fetchPhoto = id => (
  $.ajax({
    url: `api/photos${id}`,
    method: 'GET'
  })
)

export const deletePhoto = photoId => (
  $.ajax({
    url: `api/photos/${photoId}`,
    method: 'DELETE'
  })
)
