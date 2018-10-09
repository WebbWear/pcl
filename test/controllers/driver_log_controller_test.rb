require 'test_helper'

class DriverLogControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get driver_log_index_url
    assert_response :success
  end

  test "should get edit" do
    get driver_log_edit_url
    assert_response :success
  end

  test "should get update" do
    get driver_log_update_url
    assert_response :success
  end

end
