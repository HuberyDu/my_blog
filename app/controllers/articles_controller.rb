class ArticlesController < ApplicationController
  before_filter :all_tags

  def index
    if !params[:tag_id].nil?
      tag = @tags.find(params[:tag_id])
      @articles = Article.tagged_with(tag)
    elsif !params[:search].nil?
      @articles = Article.search_by_title(params[:search])
    else
      @articles = Article.all
    end
  end

  def show
    @articles = Article.all
  	@article = Article.find(params[:id])
    @comment = @article.comments.build
  end

  def search
  	search = params[:search] unless params[:search].blank?
  	@articles = Article.search_by_title(search)
  end

  private
    def all_tags
      @tags = Article.tag_counts_on(:tags)
    end
end