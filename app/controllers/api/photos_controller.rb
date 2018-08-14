class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    render :index
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :photo)
  end
end
