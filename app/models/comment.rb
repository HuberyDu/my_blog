class Comment < ActiveRecord::Base
  attr_accessible :name, :email, :content
  belongs_to :article

  validates :name, presence: true
  validates :email, presence: true
  validates :content, presence: true
end
