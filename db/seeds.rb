# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#User.new({username: "Ryan", password_digest: BCrypt::Password.create("slimterest"), session_token: SecureRandom.urlsafe_base64(16)})

  User.all.each_with_index do |user, idx|
    Board.create([{name: "#{user.username} Board #{idx}", secret_status: false, user_id: user.id}])
  end
