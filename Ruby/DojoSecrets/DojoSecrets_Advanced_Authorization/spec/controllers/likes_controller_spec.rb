require 'rails_helper'
RSpec.describe LikesController, type: :controller do
  before do
    @user = create(:user)
    @secret = create(:secret, user: @user)
    @like = create(:like, secret: @secret, user: @user)
  end
  context "when not logged in " do
    before do
      session[:user_id] = nil
    end
    # it "cannot create a like" do
    #     post :like, secret: @secret, user: @user
    #     expect(response).to redirect_to("/sessions/new")
    # end
    it "cannot destroy a like" do
        get :destroy, like: @like
        expect(response).to redirect_to("/sessions/new")
    end
  end
end