require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:one)
  end

  test "should get index" do
    get events_url
    assert_response :success
  end

  test "should get new" do
    get new_event_url
    assert_response :success
  end

  test "should create event" do
    assert_difference('Event.count') do
      post events_url, params: { event: { client_address: @event.client_address, client_comment: @event.client_comment, client_email: @event.client_email, client_name: @event.client_name, client_phone: @event.client_phone, destination: @event.destination, driver: @event.driver, driver_comment: @event.driver_comment, dropoff: @event.dropoff, milage_out: @event.milage_out, milage_return: @event.milage_return, pickup: @event.pickup, pickup_location: @event.pickup_location } }
    end

    assert_redirected_to event_url(Event.last)
  end

  test "should show event" do
    get event_url(@event)
    assert_response :success
  end

  test "should get edit" do
    get edit_event_url(@event)
    assert_response :success
  end

  test "should update event" do
    patch event_url(@event), params: { event: { client_address: @event.client_address, client_comment: @event.client_comment, client_email: @event.client_email, client_name: @event.client_name, client_phone: @event.client_phone, destination: @event.destination, driver: @event.driver, driver_comment: @event.driver_comment, dropoff: @event.dropoff, milage_out: @event.milage_out, milage_return: @event.milage_return, pickup: @event.pickup, pickup_location: @event.pickup_location } }
    assert_redirected_to event_url(@event)
  end

  test "should destroy event" do
    assert_difference('Event.count', -1) do
      delete event_url(@event)
    end

    assert_redirected_to events_url
  end
end
