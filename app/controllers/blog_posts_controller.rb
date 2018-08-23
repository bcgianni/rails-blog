class BlogPostsController < ApiController
  before_action :set_blog_post, only: [:show]

  # GET /blog_posts
  # GET /blog_posts.json
  def index
    @blog_posts = BlogPost.all
    render json: @blog_posts.to_json
  end

  # GET /blog_posts/1
  # GET /blog_posts/1.json
  def show
    render json: @blog_posts.to_json
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_blog_post
    @blog_post = BlogPost.find(params[:id])
  end
end
