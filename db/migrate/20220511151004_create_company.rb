class CreateCompany < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :diplay_name
      t.string :owner_name
      t.string :vehicles
      t.string :phone_number
      t.string :address
      t.string :email
    end
  end
end
