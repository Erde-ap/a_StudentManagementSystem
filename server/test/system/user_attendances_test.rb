require "application_system_test_case"

class UserAttendancesTest < ApplicationSystemTestCase
  setup do
    @user_attendance = user_attendances(:one)
  end

  test "visiting the index" do
    visit user_attendances_url
    assert_selector "h1", text: "User Attendances"
  end

  test "creating a User attendance" do
    visit user_attendances_url
    click_on "New User Attendance"

    click_on "Create User attendance"

    assert_text "User attendance was successfully created"
    click_on "Back"
  end

  test "updating a User attendance" do
    visit user_attendances_url
    click_on "Edit", match: :first

    click_on "Update User attendance"

    assert_text "User attendance was successfully updated"
    click_on "Back"
  end

  test "destroying a User attendance" do
    visit user_attendances_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "User attendance was successfully destroyed"
  end
end
