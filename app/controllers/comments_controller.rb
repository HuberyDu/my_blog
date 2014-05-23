class CommentsController < ApplicationController
  before_filter :find_article

  def create
    @comment = @article.comments.build(params[:comment])
    if @comment.save
      redirect_to article_path(@article), notice: t("comment_success", scope:"notice")
    else
      redirect_to article_path(@article), alert: t("comment_failed", scope:"alert")
    end
  end

  def find_article
  	@article = Article.find(params[:article_id])
  end
end