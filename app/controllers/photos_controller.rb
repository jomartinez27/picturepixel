class PhotosController < ApplicationController

  def show
    @photo = Photo.find(params[:id])
    render :show
  end
end
