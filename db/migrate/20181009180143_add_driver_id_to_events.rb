class AddDriverIdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :driver, foreign_key: true
  end
end
