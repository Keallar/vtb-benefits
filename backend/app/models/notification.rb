class Notification < ApplicationRecord
  enum notification_type: %i[change]

  has_one :sender, primary_key: 'sender_id', foreign_key: 'id', class_name: 'User'
  has_one :receiver, primary_key: 'receiver_id', foreign_key: 'id', class_name: 'User'

  def fill_change_attrs(params)
    self.message = "#{sender.first_name} #{sender.second_name} хочет обменять Best team-lead из коллекции “Небесные аналитики” на Crazy analyst из коллекции “Небесные аналитики”"
    self.payload = {
      in: {
        fromPrivateKey: sender.private_key,
        toPublicKey: receiver.public_key,
        tokenId: params[:sender_token_id]
      },
      out: {
        fromPrivateKey: receiver.private_key,
        toPublicKey: sender.public_key,
        tokenId: params[:receiver_token_id]
      }
    }

    self.save
  end

  def complete!
    if notification_type == :change
      NftTransferService.new(self).transfer!
    end

    update(completed: true)
  end

  def reject!
    update(rejected: true)
  end
end
