Rails.application.routes.draw do
  devise_for :users
  mount Api::Base => '/api'
  mount GrapeSwaggerRails::Engine => '/swagger'
end
