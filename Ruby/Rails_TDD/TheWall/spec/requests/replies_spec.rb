require 'rails_helper'

RSpec.describe "Replies", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/replies/index"
      expect(response).to have_http_status(:success)
    end
  end

end
