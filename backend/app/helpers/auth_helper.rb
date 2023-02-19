# frozen_string_literal: true
module AuthHelper
  def current_user
    @current_user ||= Warden::JWTAuth::UserDecoder.new.call(token, :user, nil)
  rescue => e
    unauthorized_error!
  end

  def check_authorized!
    unauthorized_error! unless authorized?
  end

  def authorized?
    return false if token.blank?
    return false if current_user.blank?

    true
  end

  def unauthorized_error!
    raise Api::V1::Errors::Unauthorized
  end

  def token
    auth = headers['Authorization'].to_s
    auth.split.last
  end
end

