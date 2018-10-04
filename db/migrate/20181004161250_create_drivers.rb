class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :dl_number
      t.text :address
      t.string :phone
      t.string :img
      t.string :email

      t.timestamps
    end
  end
end
