import * as PhotoUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const DELETE_PHOTO_ERRORS = 'DELETE_PHOTO_ERRORS';

export const fetchPhotos = () => dispatch => (
  PhotoUtil.fetchPhotos()
    .then(photos => dispatch(receivePhotos(photos)))
)

export const fetchPhoto = id => dispatch => (
  PhotoUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
)

export const createPhoto = photo => dispatch => (
  PhotoUtil.createPhoto(photo)
    .then(backphoto => dispatch(receivePhoto(backphoto)))
);

export const deleteErrors = () => {
  return dispatch =>
      dispatch({ type: DELETE_PHOTO_ERRORS })
}

export const receivePhoto = photo => {
  return ({
  type: RECEIVE_PHOTO,
  photo
})
}

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
})
