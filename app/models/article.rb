class Article < ActiveRecord::Base
  attr_accessible :title, :content, :status, :article_id, :tag_list
  acts_as_taggable
  has_many :comments

  validates :title, presence: true, length:{maximum: 200}

  def self.search_by_title(title)
    self.where("chinese_title like ? or french_title like ?", "%#{title}%", "%#{title}%")
  end
end

