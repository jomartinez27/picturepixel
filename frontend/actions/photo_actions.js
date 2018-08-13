import * as PhotoUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const getPhotos = () => dispatch => (
  PhotoUtil.photos()
    .then(photos => dispatch(receivePhotos(photos)))
)

export const createPhoto = photo => dispatch => (
  PhotoUtil.createPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo)))
)

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
})

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
})
