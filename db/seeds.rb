
# This to update seeds table. WARNING: does NOT reset id for each table
User.destroy_all
Photo.destroy_all
Album.destroy_all
PhotoAlbum.destroy_all
Comment.destroy_all

user1 = User.create!(username: "demo_user", email: 'hello@world.com', password: 'password')
user2 = User.create!(username: "Jane Doe", email: 'hello@world.com', password: 'password')
user3 = User.create!(username: "Jakie Cora", email: 'hello@world.com', password: 'password')
user4 = User.create!(username: "Josh Boolean", email: 'hello@world.com', password: 'password')
user5 = User.create!(username: "Chris Figaro", email: 'hello@world.com', password: 'password')


photo1 = Photo.create!(img_url: "SEED DATA/01.jpg", title: "Ocean Beach", description: "Beautiful coral view of the ocean", author_id: user1.id)
photo2 = Photo.create!(img_url: "SEED DATA/02.jpg", title: "Sunset Walk", description: "Walking down a sunset path", author_id: user1.id)
photo3 = Photo.create!(img_url: "SEED DATA/03.jpg", title: "Christman Gift", description: "Nicely packaged Christmas", author_id: user1.id)
photo4 = Photo.create!(img_url: "SEED DATA/04.jpg", title: "Afternoon Park", description: "Enjoying a relaxing afternoon", author_id: user1.id)
photo5 = Photo.create!(img_url: "SEED DATA/05.jpg", title: "Walk along trees", description: "B/W of the road back home", author_id: user1.id)
photo6 = Photo.create!(img_url: "SEED DATA/06.jpg", title: "Grass Overay", description: "Laying with teh grass and flowers", author_id: user1.id)
photo7 = Photo.create!(img_url: "SEED DATA/07.jpg", title: "Christmas Tree Shopping", description: "Preparing a Christmas Tree", author_id: user1.id)
photo8 = Photo.create!(img_url: "SEED DATA/08.jpg", title: "Holiday Door", description: "Christman Door 1", author_id: user1.id)
photo9 = Photo.create!(img_url: "SEED DATA/09.jpg", title: "Arching Bridge", description: "View of a traditional bridge", author_id: user1.id)
photo10 = Photo.create!(img_url: "SEED DATA/10.jpg", title: "River in Forest", description: "A smokey morning", author_id: user1.id)
photo11 = Photo.create!(img_url: "SEED DATA/11.jpg", title: "Holiday Chains", description: "Good holiday gifts", author_id: user1.id)
photo12 = Photo.create!(img_url: "SEED DATA/12.jpg", title: "Waterfall", description: "Waterfall in a national park", author_id: user1.id)
photo13 = Photo.create!(img_url: "SEED DATA/13.jpg", title: "Christmas Candy", description: "Chololate box from a shopping mall" , author_id: user1.id)
photo14 = Photo.create!(img_url: "SEED DATA/14.jpg", title: "Forest", description: "Endless forest in during the hike", author_id: user1.id)
photo15 = Photo.create!(img_url: "SEED DATA/15.jpg", title: "Holiday Greeting", description: "Holiday Door 2", author_id: user1.id)
photo16 = Photo.create!(img_url: "SEED DATA/16.jpg", title: "Warm and Cozy", description: "Action figures on friends table", author_id: user1.id)
photo17 = Photo.create!(img_url: "SEED DATA/17.jpg", title: "Something for the tree", description: "Put this on a tree!", author_id: user1.id)
photo18 = Photo.create!(img_url: "SEED DATA/18.jpg", title: "Christmas Tree", description: "Blurred outline of a Christmas tree", author_id: user1.id)
photo19 = Photo.create!(img_url: "SEED DATA/19.jpg", title: "Candy in the dark", description: "Glowing Candy", author_id: user1.id)
photo20 = Photo.create!(img_url: "SEED DATA/20.jpg", title: "Canyon Sideview", description: "Side view of the rock formation over decades", author_id: user1.id)
photo21 = Photo.create!(img_url: "SEED DATA/21.jpg", title: "Gift", description: "A nice holiday gift", author_id: user2.id)
photo22 = Photo.create!(img_url: "SEED DATA/22.jpg", title: "Snow on Tree", description: "Winter is here", author_id: user2.id)
photo23 = Photo.create!(img_url: "SEED DATA/23.jpg", title: "Globe", description: "Close up for a holiday decoration", author_id: user2.id)
photo24 = Photo.create!(img_url: "SEED DATA/24.jpg", title: "Half Tree", description: "Half of a whole tree", author_id: user2.id)
photo25 = Photo.create!(img_url: "SEED DATA/26.jpg", title: "Perspective", description: "View from my hike", author_id: user2.id)
photo26 = Photo.create!(img_url: "SEED DATA/27.jpg", title: "Forest Light", description: "View of morning jog", author_id: user2.id)
photo27 = Photo.create!(img_url: "SEED DATA/28.jpg", title: "Warm", description: "Holiday sprits", author_id: user2.id)
photo28 = Photo.create!(img_url: "SEED DATA/29.jpg", title: "Deck", description: "Pathway to the sea", author_id: user2.id)
photo29 = Photo.create!(img_url: "SEED DATA/30.jpg", title: "Birdhouse", description: "Where the birds come to chirp", author_id: user2.id)
photo30 = Photo.create!(img_url: "SEED DATA/31.jpg", title: "Cookies", description: "Endless baking and baking", author_id: user2.id)
photo31 = Photo.create!(img_url: "SEED DATA/32.jpg", title: "Church", description: "View from inside the church" , author_id: user2.id)
photo32 = Photo.create!(img_url: "SEED DATA/33.jpg", title: "Lake", description: "View from the lake house", author_id: user2.id)
photo33 = Photo.create!(img_url: "SEED DATA/34.jpg", title: "House", description: "House in the snow", author_id: user2.id)
photo34 = Photo.create!(img_url: "SEED DATA/35.jpg", title: "Land", description: "Endless view of the land", author_id: user2.id)
photo35 = Photo.create!(img_url: "SEED DATA/36.jpg", title: "Fox", description: "CLose up of a fox", author_id: user2.id)
photo36 = Photo.create!(img_url: "SEED DATA/37.jpg", title: "Santa", description: "Here comes Santa!", author_id: user2.id)
photo37 = Photo.create!(img_url: "SEED DATA/38.jpg", title: "Christmas Tree", description: "A decent CHristmas tree", author_id: user2.id)
photo38 = Photo.create!(img_url: "SEED DATA/39.jpg", title: "Snow", description: "Snow Snow Snow!", author_id: user2.id)
photo39 = Photo.create!(img_url: "SEED DATA/40.jpg", title: "Tree", description: "It's the holiday season!", author_id: user2.id)

album1 = Album.create!(title: "My Favorite Pictures", description: "This is some of my favorite photos", author_id: user1.id)
album2 = Album.create!(title: "Good Old Time", description: "This is some of my special photos", author_id: user1.id)
album3 = Album.create!(title: "Enjoying the World", description: "New Album to add photos", author_id: user1.id)
album4 = Album.create!(title: "Sample New Album", description: "New Album to add photos", author_id: user1.id)

# Album 1
PhotoAlbum.create!(album_id: album1.id, photo_id: photo1.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo2.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo3.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo4.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo5.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo6.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo7.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo8.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo9.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo10.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo11.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo12.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo13.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo14.id)
PhotoAlbum.create!(album_id: album1.id, photo_id: photo15.id)


# Album 2
PhotoAlbum.create!(album_id: album2.id, photo_id: photo16.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo17.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo18.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo19.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo20.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo21.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo22.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo23.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo24.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo25.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo26.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo27.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo28.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo29.id)
PhotoAlbum.create!(album_id: album2.id, photo_id: photo30.id)


# Album 3
PhotoAlbum.create!(album_id: album3.id, photo_id: photo31.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo32.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo33.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo34.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo35.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo36.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo37.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo38.id)
PhotoAlbum.create!(album_id: album3.id, photo_id: photo39.id)

# Comments

Comment.create!(body: "By far the best place I have ever visited!", photo_id: photo1.id, author_id: user1.id )
Comment.create!(body: "Wish I could have been there with you!", photo_id: photo1.id, author_id: user2.id )
Comment.create!(body: "Can't wait for the holiday season to come so I can travel!", photo_id: photo1.id, author_id: user3.id )
Comment.create!(body: "Definitly something I want to go see someday!", photo_id: photo1.id, author_id: user4.id )

Comment.create!(body: "What a beautiful pathway back to the treehouse", photo_id: photo2.id, author_id: user1.id )
Comment.create!(body: "This is a great place for a morning jog!", photo_id: photo2.id, author_id: user2.id )
Comment.create!(body: "You gotta show me this place sometime! Love to visit!", photo_id: photo2.id, author_id: user3.id )
Comment.create!(body: "What camera did you use to take this picture? Looks amazing!", photo_id: photo2.id, author_id: user4.id )

Comment.create!(body: "Who's the gift from?", photo_id: photo3.id, author_id: user1.id )
Comment.create!(body: "Are you starting a gift shop?", photo_id: photo3.id, author_id: user2.id )
Comment.create!(body: "Can't believe it's December already", photo_id: photo3.id, author_id: user3.id )
Comment.create!(body: "Love the packaging bow!", photo_id: photo3.id, author_id: user4.id )

Comment.create!(body: "Great use of the B/W filter!", photo_id: photo4.id, author_id: user1.id )
Comment.create!(body: "This is a view that's a lifetime dream!", photo_id: photo4.id, author_id: user2.id )
Comment.create!(body: "Where is this place at?", photo_id: photo4.id, author_id: user3.id )
Comment.create!(body: "Awesome fliter effect!", photo_id: photo4.id, author_id: user4.id )

Comment.create!(body: "Afternoon with the sun and flowers", photo_id: photo5.id, author_id: user1.id )
Comment.create!(body: "Laying here makes all the stress go away", photo_id: photo5.id, author_id: user2.id )
Comment.create!(body: "Sometimes I want to be there with you", photo_id: photo5.id, author_id: user3.id )
Comment.create!(body: "Time for a picnic?", photo_id: photo5.id, author_id: user4.id )

Comment.create!(body: "Hakuna Mimosa. It means, ‘it’s brunchtime", photo_id: photo6.id, author_id: user1.id )
Comment.create!(body: "Brunch without champagne is just a sad breakfast", photo_id: photo6.id, author_id: user2.id )
Comment.create!(body: "Can't wait for the holiday season to come so I can travel!", photo_id: photo6.id, author_id: user3.id )
Comment.create!(body: "Definitly something I want to go see someday!", photo_id: photo6.id, author_id: user4.id )

Comment.create!(body: "A journey is best measured in friends, rather than miles", photo_id: photo7.id, author_id: user1.id )
Comment.create!(body: "We are all travelers in the wilderness of this world, and the best we can find in our travels is an honest friend.", photo_id: photo7.id, author_id: user2.id )
Comment.create!(body: "Can't wait for the holiday season to come so I can travel!", photo_id: photo7.id, author_id: user3.id )
Comment.create!(body: "Definitly something I want to go see someday!", photo_id: photo7.id, author_id: user4.id )

Comment.create!(body: "By far the best place I have ever visited!", photo_id: photo8.id, author_id: user1.id )
Comment.create!(body: "Wish I could have been there with you!", photo_id: photo8.id, author_id: user2.id )
Comment.create!(body: "Can't wait for the holiday season to come so I can travel!", photo_id: photo8.id, author_id: user3.id )
Comment.create!(body: "Definitly something I want to go see someday!", photo_id: photo8.id, author_id: user4.id )

Comment.create!(body: "Two roads diverged in a wood, and I — I took the one less traveled by, and that has made all the difference", photo_id: photo9.id, author_id: user1.id )
Comment.create!(body: "We live in a wonderful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.", photo_id: photo9.id, author_id: user2.id )
Comment.create!(body: "Can't wait for the holiday season to come so I can travel!", photo_id: photo9.id, author_id: user3.id )
Comment.create!(body: "Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter.", photo_id: photo9.id, author_id: user4.id )

Comment.create!(body: "Our Nature lies in movement; complete calm is death", photo_id: photo10.id, author_id: user1.id )
Comment.create!(body: "Nature is not a place to visit. It is home.", photo_id: photo10.id, author_id: user2.id )
Comment.create!(body: "I felt my lungs inflate with the onrush of scenery — air, mountains, trees, people. I thought, ‘This is what it is to be happy.", photo_id: photo10.id, author_id: user3.id )
Comment.create!(body: "Definitly something I want to go see!", photo_id: photo10.id, author_id: user4.id )

Comment.create!(body: "At Christmas, all roads lead home.", photo_id: photo11.id, author_id: user1.id )
Comment.create!(body: "Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful", photo_id: photo11.id, author_id: user2.id )
Comment.create!(body: "Christmas is a season for kindling the fire for hospitality in the hall, the genial flame of charity in the heart.", photo_id: photo11.id, author_id: user3.id )
Comment.create!(body: "Lovely!", photo_id: photo11.id, author_id: user4.id )

# Tags
Tag.create!(name: "WOW", photo_id: photo1.id)
Tag.create!(name: "Great!", photo_id: photo1.id)
Tag.create!(name: "Awesome", photo_id: photo1.id)
Tag.create!(name: "Interesting", photo_id: photo1.id)
Tag.create!(name: "Fascinating", photo_id: photo1.id)
Tag.create!(name: "Winter is here!", photo_id: photo2.id)
Tag.create!(name: "Holiday is here", photo_id: photo2.id)
Tag.create!(name: "Gifts!", photo_id: photo2.id)
Tag.create!(name: "Time after time!", photo_id: photo2.id)
Tag.create!(name: "Love that place!", photo_id: photo3.id)
Tag.create!(name: "Yay!", photo_id: photo3.id)
