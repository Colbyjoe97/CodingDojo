require 'rails_helper'
feature 'authentication' do
    before do
        @user = create(:user)
        @user.email = 'test@gmail.com'
        @user.password = 'password'
        @user.save
    end

    feature 'user sign-in' do
        scenario 'visits sign-in page' do
            visit '/sessions/new'
            expect(page).to have_field('email')
            expect(page).to have_field('password')
        end

        scenario 'logs in user if email/pass combo is valid' do
            # log_in
            visit 'sessions/new'
            fill_in 'email', with: "test@gmail.com"
            fill_in 'password', with: 'password'
            click_button 'Log In'
            expect(current_path).to eq("/users/#{@user.id}")
            expect(page).to have_text(@user.name)
        end

        scenario 'does not sign user in if email is not found' do
            # log_in email: "wrong email"
            visit 'sessions/new'
            fill_in 'email', with: "wrong@gmail.com"
            fill_in 'password', with: 'password'
            click_button 'Log In'
            expect(current_path).to eq("/sessions/new")
            expect(page).to have_text('Invalid Combination')
        end
    end

    feature 'user logs out' do
        before do
            @user = create(:user)
            log_in
        end

        scenario 'displays "Log Out" button when user is logged in' do
            expect(page).to have_button('Log Out')
        end

        scenario 'logs user out and redirects to login page' do
            click_button 'Log Out'
            expect(current_path).to eq('/sessions/new')
        end
    end
end