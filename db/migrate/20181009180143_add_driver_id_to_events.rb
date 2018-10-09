class AddDriverIdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :driver, foreign_key: true
    remove_column :events, :driver
  end
end
