require 'rails_helper'
feature "guest user creates an account" do
    before(:each) do
        visit new_user_path
    end
  scenario "if created successfully" do
    fill_in "first_name", with: "colby"
    click_button "Sign In"
    expect(page).to have_content "Welcome"
    expect(page).to have_current_path(messages_path)
  end

  scenario "if created unsuccessfully - short username" do
      fill_in "first_name", with: "colby"
      click_button "Sign In"
      expect(page).to have_content "First name must be between 6 and 25 characters."
      expect(page).to have_current_path(new_user_path)
  end

  scenario "If no username was entered" do
      fill_in "first_name", with: ""
      click_button "Sign In"
      expect(page).to have_content "First name must be between 6 and 25 characters."
      expect(page).to have_current_path(new_user_path)
  end
end