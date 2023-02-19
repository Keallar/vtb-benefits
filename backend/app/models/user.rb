class User < ApplicationRecord
  enum role: %i[user admin]
  before_create :prepare_username
  # include Devise::JWT::RevocationStrategies::Allowlist
  devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :validatable,
           :jwt_authenticatable, jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null

  has_many :requests
  has_many :user_tags
  has_many :user_events
  has_many :tags, through: :user_tags
  has_many :events, through: :user_events
  has_many :feeds, foreign_key: 'creator_id'
  has_many :user_deals
  has_many :deals, through: :user_deals

  has_many :nft_collections

    module ClassMethods
    def registrate!(params)
      create!(params)
    end

    def authenticate!(params)
      user = find_by(email: params[:email])

      raise ActiveRecord::RecordNotFound, 'Неправильный email или пароль' unless user.present?
      raise ActiveRecord::RecordNotFound, 'Неправильный email или пароль' unless user.valid_password?(params[:password])

      user
    end
  end

  extend ClassMethods

  def as_jwt_payload
    Warden::JWTAuth::UserEncoder.new.call(self, :user, nil)
  end

  def prepare_username
    self.username = "#{last_name} #{first_name.first}.#{second_name.first}."
  end
end
