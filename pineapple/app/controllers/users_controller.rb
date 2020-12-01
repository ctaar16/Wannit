class UsersController < ApplicationController
  before_action :authorize_request, except: :create




  # GET /items
  def index
    @users = User.all

    render json: @users
  end


# GET /users/1
def show
  render json: @user
end

#Post/Users
    def create
        @user = User.new(user_params)
    
        if @user.save
          @token = encode({id: @user.id})
          render json: {
            user: @user.attributes.except("password_digest"),
            token: @token
            }, status: :created
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end
    
      private
    
        # Only allow a trusted parameter "white list" through.
        def user_params
          params.require(:user).permit(:username, :email, :password)
        end
    end
    