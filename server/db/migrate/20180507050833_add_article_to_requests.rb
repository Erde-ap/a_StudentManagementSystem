class AddArticleToRequests < ActiveRecord::Migration[5.2]
  def change
    add_reference :requests, :student_id, foreign_key: true
  end
end
