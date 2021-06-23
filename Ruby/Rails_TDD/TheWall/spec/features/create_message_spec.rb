require 'rails_helper'
feature "User creates a message" do
    scenario "If created successfully" do
        # Must comment out user session and uncomment @user = User.last to work
        @user = User.create(first_name: "testingMessages")
        visit messages_path(User.last)
        fill_in "content",  with: "This is a message"
        click_button  "Post a Message"
        expect(page).to have_content "This is a message"
        expect(page).to have_current_path(messages_path(User.last))
    end
end