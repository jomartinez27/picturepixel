class Api::PhotosController < ApplicationController
  before_action :require_logged_in

  def show
    @photo = Photo.find(params[:id])
  end

  def index
    @photos = Photo.all
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.photographer_id = current_user.id

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: ["Photo deleted"]
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :photo)
  end
end
