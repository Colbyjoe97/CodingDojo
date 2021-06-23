require 'rails_helper'
feature 'User Settings Features' do
    before do
        @user = create(:user)
        log_in
    end

    feature "User Settings Dashboard" do
        before(:each) do
            visit "/users/#{@user.id}/edit"
        end

        scenario "Visit edit page" do
            expect(page).to have_field('email')
            expect(page).to have_field('name')
        end

        scenario "Inputs filled out correctly" do
            expect(find_field('name').value).to eq(@user.name)
            expect(find_field('email').value).to eq(@user.email)
        end

        scenario "updates user with invalid information" do
            fill_in 'name', with: "Another Name"
            fill_in 'email', with: "invalid format"
            click_button 'Update'
            expect(current_path).to eq("/users/#{@user.id}/edit")
            expect(page).to have_text("Email is invalid")
        end

        scenario "correctly updates user's information" do
            fill_in 'name', with: "Another name"
            fill_in 'email', with: 'anotherEmail@codingdojo.com'
            click_button 'Update'
            expect(page).to have_text('Another name')
        end

        scenario "Deletes the user's account and redirects to register page" do
            click_button 'Delete Account'
            expect(current_path).to eq('/users/new')
        end
    end
end