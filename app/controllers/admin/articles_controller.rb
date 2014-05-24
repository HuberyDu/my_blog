module Admin
  class ArticlesController < Admin::BaseController
    
    def index
      @articles = Article.all
    end

    def new
      @article = Article.new
    end

    def edit
      @article = Article.find(params[:id])
    end


    def create
      @article = Article.new(params[:article])
      if @article.save
        redirect_to admin_articles_path, notice: 'article_success_created'
      else
        render action: "new", alert: 'article_failed_created'
      end
    end

    def update
      @article = Article.find(params[:id])
      if @article.update_attributes(params[:article])
        redirect_to edit_admin_article_path(@article), notice: 'article_success_updated'
      else
        render action: "edit", alert: 'article_failed_updated'
      end
    end

    def destroy
      @article = Article.find(params[:id])
      if @article.update_attributes(status:"deleted")
        redirect_to admin_articles_path(category_id: @article.category_id), notice: 'article_success_deleted'
      else
        redirect_to admin_articles_path(category_id: @article.category_id), alert: "article_failed_deleted"
      end
    end
  end
end