class ArticlesController < ApplicationController
  def index
  	@articles = Article.all
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
end