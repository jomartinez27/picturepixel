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
