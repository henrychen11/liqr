class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid username and/or password'], status: 404
    else
      login!(@user)
      render 'api/users/show'
    end

  end

  def destroy
    if !current_user
      render json: ["No active session"], status: 404
    else
      logout!
      render json: { message: 'Logout successful' }
    end
  end
end
