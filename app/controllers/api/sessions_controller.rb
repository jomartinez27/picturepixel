class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username and/or password"], status: 401
    end
  end

  def destroy
    logout!
    render 'api/users/show'
  end
end
