class CreateJoinTableItemsLocations < ActiveRecord::Migration[6.0]
  def change
    create_join_table :items, :locations do |t|
      # t.index [:item_id, :location_id]
      # t.index [:location_id, :item_id]
    end
  end
end
