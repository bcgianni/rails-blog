json.extract! blog_post, :id, :admin_user_id, :title, :body, :url_slug, :created_at, :updated_at
json.url blog_post_url(blog_post, format: :json)
