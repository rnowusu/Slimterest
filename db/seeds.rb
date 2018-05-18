# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#User.new({username: "Ryan", password_digest: BCrypt::Password.create("slimterest"), session_token: SecureRandom.urlsafe_base64(16)})

  # User.all.each_with_index do |user, idx|
  #   Board.create([{name: "#{user.username} Test Board 1", secret_status: false, user_id: user.id}])
  # end

  # Pin.create([{name: "Test Pin", description: "Does this work?", category: 'Test' , user_id: 23, board_id: 2, picture: 'http://s3.us-east-2.amazonaws.com/slimterestpics-dev/pins/pictures/000/000/008/original/Ghana_jollof.jpg?1526608667'}])

  # User.new({username: "Ryan", password: "slimterest"});
  # User.new({username: "Jeff", password: "slimterest"});
  # User.new({username: "Malik", password: "slimterest"});
  # User.new({username: "Quinton", password: "slimterest"});
  # User.new({username: "Dhara", password: "slimterest"});



  Pin.create([{name: 'Berries', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/food-fruit-raspberries-strawberry-fruit.jpg'}])
  Pin.create([{name: 'Tommy Egan', category: 'Actor' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/tommy-plotting.jpeg'}])
  Pin.create([{name: 'Melo', category: 'Basketball' , description: "The goat", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/melo_3.webp'}])
  Pin.create([{name: 'Ghana Jollof', category: 'Food' , description: "Ghana Jollof is superior to Nigerian Jollof", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Ghana_jollof.jpg'}])
  Pin.create([{name: 'Emma Blunt', category: 'Actress' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Emma+Blunt.jpeg'}])
  Pin.create([{name: 'Ghost', category: 'TV' , description: "DON'T cross this guy. RIP Dre come soon.", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Ghost.jpg'}])
  Pin.create([{name: 'John Cho', category: 'TV' , description: "Who wants White Castle", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/John+Cho.jpeg'}])
  Pin.create([{name: 'Leonardo', category: 'Actor' , description: "Only one Oscar??", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Leonardo.jpg'}])
  Pin.create([{name: 'Kawhi', category: 'Basketball' , description: "Needs to stop playin and play", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/kawhi.jpg'}])
  Pin.create([{name: 'Keyboard', category: 'Music' , description: "Too many years of this", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/keyboard.jpeg'}])
  Pin.create([{name: 'Lucy Liu', category: 'Actress' , description: "Talented and gorgeous", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Lucy+Liu.jpg'}])
  Pin.create([{name: 'Trevor Noah', category: 'TV' , description: "Too funny", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Trevor+Noah.jpg'}])
  Pin.create([{name: 'Cookies', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/baked-cinnamon-cookie.jpg'}])
  Pin.create([{name: 'Coffee', category: 'Food' , description: "Eww, coffee", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/espresso-coffee-cup-latte.jpg'}])
  Pin.create([{name: 'Aesthetic Breakfast', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/friends-eating-breakfast.jpg'}])
  Pin.create([{name: 'Jorja Smith', category: 'Music' , description: "Heart eyes emoji.", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/jorja+smith.jpg'}])
  Pin.create([{name: 'Killua', category: 'Anime' , description: "Most loyal friend ever", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/killua.jpg'}])
  Pin.create([{name: 'Kristaps', category: 'Basketball' , description: "King of NY", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/kristaps-porzingis1.jpg'}])
  Pin.create([{name: 'Justin', category: 'Politics' , description: "Leader of our continent", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/leader_of_the_west.jpg'}])
  Pin.create([{name: 'Macs', category: 'Tech' , description: "Too expensive", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/macs.webp'}])
  Pin.create([{name: 'Ryan Destiny', category: 'Actress' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/ryan-destiny.jpg'}])
  Pin.create([{name: 'Brett', category: 'Baseball' , description: "Yanks", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/brett.jpg'}])
  Pin.create([{name: 'Juice', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/half-of-lemon-and-bottle-of-juice.jpg'}])
  Pin.create([{name: 'Master Chief', category: 'Gaming' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/master_chief.jpg'}])
  Pin.create([{name: 'Runescape', category: 'Gaming' , description: "Played this for too many years", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/rs+lit.jpg'}])
  Pin.create([{name: 'Vegeta', category: 'Anime' , description: "The GOAT", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/vegeta.jpg'}])
  Pin.create([{name: 'Will Yun Lee', category: 'Actor' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Will+Yun+Lee.jpg'}])
  Pin.create([{name: 'Ice Cream', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/ice_cream.jpg'}])
  Pin.create([{name: 'Desus and Mero', category: 'TV' , description: "Shouts the Bronx!", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/the+realest.jpg'}])
  Pin.create([{name: 'Goku', category: 'Anime' , description: "Ultra Instinct not earned smh.", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/ultra+instinct.webp'}])
  Pin.create([{name: 'Vegetables', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/vegetarian-food-ingredients-vegetarian-food.jpg'}])
  Pin.create([{name: 'Bill DeBlasio', category: 'Politics' , description: "My guy", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/young+bill.jpeg'}])
  Pin.create([{name: 'Tomatos', category: 'Food' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/food-tomato-basket.jpg'}])
  Pin.create([{name: 'Natalie Portman', category: 'Actress' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Natalie+Portman.jpeg'}])
  Pin.create([{name: 'Priyanka', category: 'Actress' , description: "", user_id: 23, board_id: 2, picture: 'https://s3.us-east-2.amazonaws.com/slimterestpics-pro/slimterest+pics/Priyanka.jpg'}])
