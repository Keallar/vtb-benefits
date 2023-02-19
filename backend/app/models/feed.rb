class Feed < ApplicationRecord
  has_one :creator, primary_key: 'creator_id', foreign_key: 'id', class_name: 'User'
end
