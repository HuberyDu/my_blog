class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.role == 'admin'
      can :manage, :all
      cannot :reject, Article, :status => "pending"
      cannot :approve, Article, :status => "public"
      cannot [:edit, :update], Article, :status => "deleted"
    elsif user.role == 'editor'
      can [:read, :update], Article
      can [:edit, :update], Article, :status => "pending"
      cannot [:edit, :update], Article do |article|
        !(user.categories.include? article.category)
      end
      can [:create, :new], Article do |article|
        (user.categories.include? article.category) or (article.category_id == nil)
      end

      can :read, Category do |category|
        user.categories.include? category
      end 
    end
  end
end
