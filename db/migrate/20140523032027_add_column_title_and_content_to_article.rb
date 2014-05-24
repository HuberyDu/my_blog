class AddColumnTitleAndContentToArticle < ActiveRecord::Migration
  def change
  	remove_column :articles, :chinese_title
  	remove_column :articles, :french_title
  	remove_column :articles, :chinese_content
  	remove_column :articles, :french_content
  	add_column :articles, :title, :string
  	add_column :articles, :content, :string
  end
end
