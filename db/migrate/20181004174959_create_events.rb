class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :driver
      t.string :client_name
      t.string :client_phone
      t.string :client_email
      t.text :client_address
      t.time :pickup
      t.time :dropoff
      t.integer :milage_out
      t.integer :milage_return
      t.text :driver_comment
      t.text :client_comment
      t.text :pickup_location
      t.text :destination

      t.timestamps
    end
  end
end
