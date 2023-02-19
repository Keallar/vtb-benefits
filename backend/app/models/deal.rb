class Deal < ApplicationRecord
  enum transaction_type: %i[buy sell change]
  has_many :user_deals
  has_many :users, through: :user_deals
end
