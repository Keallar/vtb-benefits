# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_08_204642) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "allowlisted_jwts", force: :cascade do |t|
    t.string "jti", null: false
    t.string "aud"
    t.datetime "exp", null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jti"], name: "index_allowlisted_jwts_on_jti", unique: true
    t.index ["user_id"], name: "index_allowlisted_jwts_on_user_id"
  end

  create_table "deals", force: :cascade do |t|
    t.integer "amount"
    t.integer "transaction_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "start_date"
    t.datetime "end_date"
    t.boolean "publish"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "event_type"
    t.integer "level"
  end

  create_table "feeds", force: :cascade do |t|
    t.string "title"
    t.text "tread"
    t.bigint "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.index ["creator_id"], name: "index_feeds_on_creator_id"
  end

  create_table "nft_collections", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_nft_collections_on_user_id"
  end

  create_table "nfts", force: :cascade do |t|
    t.string "title"
    t.bigint "nft_collection_id"
    t.integer "token_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["nft_collection_id"], name: "index_nfts_on_nft_collection_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.bigint "sender_id"
    t.bigint "receiver_id"
    t.integer "notification_type"
    t.string "message"
    t.json "payload", default: {}
    t.boolean "completed"
    t.boolean "rejected"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_notifications_on_receiver_id"
    t.index ["sender_id"], name: "index_notifications_on_sender_id"
  end

  create_table "request_tags", force: :cascade do |t|
    t.bigint "request_id"
    t.bigint "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["request_id"], name: "index_request_tags_on_request_id"
    t.index ["tag_id"], name: "index_request_tags_on_tag_id"
  end

  create_table "requests", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "request_type", default: 0
    t.boolean "approved"
    t.boolean "rejected"
    t.integer "cost"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "settings", force: :cascade do |t|
    t.integer "max_coins_award"
    t.integer "low_event_award_spread"
    t.integer "high_event_award_spread"
    t.integer "total_coins"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_deals", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "deal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deal_id"], name: "index_user_deals_on_deal_id"
    t.index ["user_id"], name: "index_user_deals_on_user_id"
  end

  create_table "user_events", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_user_events_on_event_id"
    t.index ["user_id"], name: "index_user_events_on_user_id"
  end

  create_table "user_tags", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_user_tags_on_tag_id"
    t.index ["user_id"], name: "index_user_tags_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "sex"
    t.string "first_name"
    t.string "last_name"
    t.string "second_name"
    t.string "username"
    t.integer "role"
    t.string "official"
    t.integer "current_coins"
    t.bigint "all_coins"
    t.datetime "birthday"
    t.datetime "date_of_deployment"
    t.string "public_key"
    t.string "private_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "level", default: 1
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "allowlisted_jwts", "users", on_delete: :cascade
end
