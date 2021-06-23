require 'rails_helper'
RSpec.describe SecretsController, type: :controller do
  before do
    @user = create(:user)
    @secret = create(:secret, user: @user)

    @user2 = User.create(name: "Name", email: "test@gmail.com", password: "password")
    @secret2 = create(:secret, user: @user2)
  end
  context "when not logged in" do
    before do
      session[:user_id] = nil
    end
    it "cannot access index" do
        get :index, id: @user
        expect(response).to redirect_to("/sessions/new")
    end
    it "cannot access create" do
        get :new, id: @user
        expect(response).to redirect_to("/sessions/new")
    end
    it "cannot access destroy" do
        get :destroy, id: @user
        expect(response).to redirect_to("/sessions/new")
    end
  end

  context "when signed in as the wrong user" do
    it "cannot destroy another user's secret" do
      session[:user_id] = @user.id
      delete :destroy, user: @user, secret: @secret2
      expect(response).to redirect_to("/sessions/new")
    end
  end
end