json.extract! event, :id, :driver, :client_name, :client_phone, :client_email, :client_address, :pickup, :dropoff, :milage_out, :milage_return, :driver_comment, :client_comment, :pickup_location, :destination, :created_at, :updated_at
json.url event_url(event, format: :json)
