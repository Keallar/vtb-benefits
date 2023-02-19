module Api
  module V1
    class UsersApi < Api::V1::Base
      format :json

      resource :users do
        resource :me do
          before { check_authorized! }
  
          get do
            present current_user, with: Api::Entities::User
          end

          desc 'Изменение пользователя'
          patch do
            current_user.update!(declared(params))

            present current_user.reload, with: Api::Entities::User
          end
        end

        desc 'Список пользователей', success: Entities::User
        get do
          result = User.all

          present result, with: Api::Entities::User
        end

        params do
          requires :email, type: String, allow_blank: false, regexp: /.+@.+/, desc: 'Электронная почта'
          requires :password, type: String, allow_blank: false, desc: 'Пароль'
          all_or_none_of :email, :password, message: 'Не введена почта или пароль'
        end
        post 'login' do
          declared_params = declared(params, include_missing: false)

          user = User.authenticate!(declared_params)
          token, _ = user.as_jwt_payload

          header 'Authorization', token
          { user_id: user.id, email: user.email, username: user.username, role: user.role }
        end
      end
    end
  end
end
