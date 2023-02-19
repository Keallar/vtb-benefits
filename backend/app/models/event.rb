class Event < ApplicationRecord
  enum event_type: %i[work relax]
  has_many :user_events
  has_many :users, through: :user_events
end
