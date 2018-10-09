json.extract! event, :id
json.title event.client_name
json.start event.pickup
json.unconfirmed !event.driver
json.end event.dropoff || event.pickup + 2.hours