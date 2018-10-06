require "application_system_test_case"

class EventsTest < ApplicationSystemTestCase
  setup do
    @event = events(:one)
  end

  test "visiting the index" do
    visit events_url
    assert_selector "h1", text: "Events"
  end

  test "creating a Event" do
    visit events_url
    click_on "New Event"

    fill_in "Client Address", with: @event.client_address
    fill_in "Client Comment", with: @event.client_comment
    fill_in "Client Email", with: @event.client_email
    fill_in "Client Name", with: @event.client_name
    fill_in "Client Phone", with: @event.client_phone
    fill_in "Destination", with: @event.destination
    fill_in "Driver", with: @event.driver
    fill_in "Driver Comment", with: @event.driver_comment
    fill_in "Dropoff", with: @event.dropoff
    fill_in "Milage Out", with: @event.milage_out
    fill_in "Milage Return", with: @event.milage_return
    fill_in "Pickup", with: @event.pickup
    fill_in "Pickup Location", with: @event.pickup_location
    click_on "Create Event"

    assert_text "Event was successfully created"
    click_on "Back"
  end

  test "updating a Event" do
    visit events_url
    click_on "Edit", match: :first

    fill_in "Client Address", with: @event.client_address
    fill_in "Client Comment", with: @event.client_comment
    fill_in "Client Email", with: @event.client_email
    fill_in "Client Name", with: @event.client_name
    fill_in "Client Phone", with: @event.client_phone
    fill_in "Destination", with: @event.destination
    fill_in "Driver", with: @event.driver
    fill_in "Driver Comment", with: @event.driver_comment
    fill_in "Dropoff", with: @event.dropoff
    fill_in "Milage Out", with: @event.milage_out
    fill_in "Milage Return", with: @event.milage_return
    fill_in "Pickup", with: @event.pickup
    fill_in "Pickup Location", with: @event.pickup_location
    click_on "Update Event"

    assert_text "Event was successfully updated"
    click_on "Back"
  end

  test "destroying a Event" do
    visit events_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Event was successfully destroyed"
  end
end
