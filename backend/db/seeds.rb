require 'faker'
Faker::Config.locale = :ru

p 'Create users'
10.times do |_|
  User.create(
    email: Faker::Internet.email,
    password: 'password',
    sex: ['male', 'female'].sample,
    first_name: Faker::Name.first_name,
    second_name: Faker::Name.middle_name,
    last_name: Faker::Name.last_name,
    role: :user,
    official: Faker::Hobby.activity,
    all_coins: rand(10000),
    current_coins: rand(1000),
    birthday: Faker::Date.between(from: 100.year.ago, to: 17.year.from_now),
    date_of_deployment: Faker::Date.between(from: 10.year.ago, to: 1.year.from_now),
    public_key: Faker::Blockchain::Ethereum.address,
    private_key: Faker::Blockchain::Ethereum.address
  )
end

User.create(
  email: 'user@mail.ru',
  password: 'password',
  sex: ['male', 'female'].sample,
  first_name: Faker::Name.first_name,
  second_name: Faker::Name.middle_name,
  last_name: Faker::Name.last_name,
  role: :user,
  official: Faker::Hobby.activity,
  all_coins: rand(10000),
  current_coins: rand(1000),
  birthday: Faker::Date.between(from: 100.year.ago, to: 17.year.from_now),
  date_of_deployment: Faker::Date.between(from: 10.year.ago, to: 1.year.from_now),
  public_key: ENV['BLOCKCHAIN_TEST_PUBLIC_KEY'],
  private_key: ENV['BLOCKCHAIN_TEST_PRIVATE_KEY']
)

p 'Create admin'
User.create(
  email: 'admin@mail.ru',
  password: 'password',
  sex: ['male', 'female'].sample,
  first_name: Faker::Name.first_name,
  second_name: Faker::Name.middle_name,
  last_name: Faker::Name.last_name,
  role: :admin,
  official: Faker::Hobby.activity,
  all_coins: rand(10000),
  current_coins: rand(1000),
  birthday: Faker::Date.between(from: 100.year.ago, to: 17.year.from_now),
  date_of_deployment: Faker::Date.between(from: 10.year.ago, to: 1.year.from_now),
  public_key: Faker::Blockchain::Ethereum.address,
  private_key: Faker::Blockchain::Ethereum.address
)

p 'Create requests'
100.times do |i|
  Request.create(
    title: Faker::Lorem.word,
    description: Faker::Lorem.word,
    request_type: %i[change, buy, sell].sample,
    approved: false,
    rejected: false,
    cost: rand(100), 
    user: User.all.sample
  )
end

p 'Create feeds'
Feed.create(
  title: 'Проводится хакатон ВТБ MORE.TECH',
  tread: "MORE.Tech 4.0 — это онлайн-хакатон по решению актуальных задач с треками по веб-разработке и работе с данными.\n
          Тебя ждут 40 незабываемых часов кодинга под менторством опытных экспертов ВТБ",
  creator_id: User.find_by(email: 'admin@mail.ru').id
)

Feed.create(
  title: 'Напоминаем, что подача документов для отсрочки от мобилизации осуществляется сотрудником самостоятельно, через форму на Госуслугах.',
  tread: "Подробный алгоритм подачи заявки доступен на интранет-портале компании. Если у вас появятся вопросы по ее заполнению, ответ вы сможете получить на горячей линии поддержки по мобилизации",
  creator_id: User.find_by(email: 'admin@mail.ru').id
)

Feed.create(
  title: "NFT-игра из РФ вышла на еженедельный торговый оборот в $2 млн",
  tread: "NFT-проект из России Waves Ducks с элементами игровой механики Play-to-earn объявил об увеличении торгового оборота NFT персонажей до $2 млн в неделю.",
  creator_id: User.find_by(email: 'admin@mail.ru').id
)

p 'Create Events'
100.times do |i|
  Event.create(
    title: Faker::Lorem.word,
    description: Faker::Lorem.word,
    start_date: Faker::Date.backward(days: 10),
    end_date: Faker::Date.backward(days: 5),
    publish: false,
    event_type: Faker::Number.within(range: 0..1),
    level: Faker::Number.within(range: 0..10)
  )
end

p 'Create Deals'
100.times do |i|
  Deal.create(
    amount: Faker::Number.number(digits: 2),
    transaction_type: Faker::Number.within(range: 0..2)
  )
end

p 'Create Tags'
100.times do |i|
  Tag.create(
    title: Faker::Lorem.word
  )
end

p 'Create UserDeals'
100.times do |i|
  UserDeal.create(
    user: User.all.sample,
    deal: Deal.all.sample
  )
end

p 'Create UserTags'
100.times do |i|
  UserTag.create(
    user: User.all.sample,
    tag: Tag.all.sample
  )
end

p 'Create UserEvents'
100.times do |i|
  UserEvent.create(
    user: User.all.sample,
    event: Event.all.sample
  )
end

p 'Create NFT collections'
User.all.pluck(:id).each do |user_id|
  rand(10).times do |_|
    NftCollection.create!(
      title: Faker::Lorem.word,
      url: Faker::Avatar.image,
      user_id: user_id
    )
  end
end

p 'Create Notifications'
User.all.pluck(:id).take(rand(8)).each do |user_id|
  Notification.create(
    message: Faker::Lorem.word,
    sender_id: user_id,
    receiver_id: User.find_by(email: 'admin@mail.ru').id
  )
end

# p 'Create NFTs'
# user = User.find_by_email('user@mail.ru')
# collection = user.nft_collections.first

# 10.times do |_|
#   Economic::NftGenerationService.new(user, Faker::Avatar.image, collection).generate!

#   sleep 3
# end

Setting.create!(
  max_coins_award: 60,
  low_event_award_spread: 1.0,
  high_event_award_spread: 1.5,
  total_coins: 80000
)