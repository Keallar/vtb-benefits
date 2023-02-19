class Request < ApplicationRecord
  enum request_type: %i[change, buy, sell]
  belongs_to :user
  has_many :request_tags
  has_many :tags, through: :request_tags
end
