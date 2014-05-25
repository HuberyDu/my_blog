class Article < ActiveRecord::Base
  attr_accessible :title, :content, :status, :article_id, :tag_list
  acts_as_taggable
  has_many :comments

  validates :title, presence: true, length:{maximum: 200}

  def self.search_by_title(title)
    self.where("title like ?", "%#{title}%")
  end

  def prev
  	Article.where("id < ?", self.id).order("id DESC").first
  end

  def next
  	Article.where("id > ?", self.id).order("id ASC").first
  end

  def self.lately_article
    if self.all.size > 5
      return self
    else
      self.where("")
    end
  end
end

