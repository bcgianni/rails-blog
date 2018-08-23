class CreateBlogPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :blog_posts do |t|
      t.references :admin_user, foreign_key: true
      t.string :title
      t.text :body
      t.string :url_slug

      t.timestamps
    end
  end
end
