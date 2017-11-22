class Api::SessionsController < ApplicationController

#   def create
#     @user = User.find_by_credentials(
#       params[:user][:username],
#       params[:user][:password]
#     )
#     if @user
#       login(@user)
#       render 'api/users/show'
#     else
#       render json: ['Invalid Username or Password'], status: 401
#     end
#   end
#
#   def destroy
#     if current_user
#       logout!
#       render :json => {}
#     else
#       render json: 'Invalid user', status: 404
#     end
#   end
#
# end


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
