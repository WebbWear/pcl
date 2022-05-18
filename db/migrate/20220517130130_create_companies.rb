class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :display_name
      t.string :owner_name
      t.string :vehicles
      t.string :phone_number
      t.string :address
      t.string :email
      t.integer :ein
    end
  end
end
