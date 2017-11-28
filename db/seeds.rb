# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This to update seeds table. WARNING: does NOT reset id for each table
User.destroy_all
Photo.destroy_all
Album.destroy_all
PhotoAlbum.destroy_all
Comment.destroy_all

user1 = User.create(username: "demo", email: 'hello@world.com', password: 'password')
user2 = User.create(username: "Hello Guest", email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user4 = User.create(username: 'henry', email: Faker::Internet.email, password: 'password')

photo1 = Photo.create(img_url: "temple.jpg", title: "Temple", author_id: user1.id)
photo2 = Photo.create(img_url: "dock.jpg", title: "Dock", author_id: user1.id)
photo3 = Photo.create(img_url: "3_pufrps.jpg", title: "Street", author_id: user1.id)
photo4 = Photo.create(img_url: "map.jpg", title: "Map", author_id: user1.id)
photo5 = Photo.create(img_url: "road_wljev7.jpg", title: "Road", author_id: user1.id)
photo6 = Photo.create(img_url: "wing.jpg", title: "Wing", author_id: user1.id)
photo7 = Photo.create(img_url: "desert.jpg", title: "Desert", author_id: user1.id)
photo8 = Photo.create(img_url: "train.jpg", title: "Train", author_id: user1.id)
photo9 = Photo.create(img_url: "lake.jpg", title: "Lake", author_id: user1.id)
photo10 = Photo.create(img_url: "keep.jpg", title: "Keep", author_id: user1.id)
photo11 = Photo.create(img_url: "5_wnxpxa.jpg", title: "Hut", author_id: user1.id)
photo12 = Photo.create(img_url: "2_exc8lw.jpg", title: "Moving Train", author_id: user1.id)
photo13 = Photo.create(img_url: "rainbow.jpg", title: "Rainbow", author_id: user1.id)
photo14 = Photo.create(img_url: "1_bbgwe6.jpg", title: "Valley", author_id: user2.id)
photo15 = Photo.create(img_url: "guest_cover_oyqjdk.jpg", title: "Hitch", author_id: user2.id)
photo16 = Photo.create(img_url: "sample.jpg", title: "Flowers", author_id: user2.id)


album1 = Album.create(title: "Test Album 1", description: "This is some of my favorite travel photos", author_id: user1.id)
album2 = Album.create(title: "Test Album 2", description: "This is some of my favorite dinning photos", author_id: user1.id)
album3 = Album.create(title: "Test Album 3", description: "This is some of my favorite random photos", author_id: user1.id)
album4 = Album.create(title: "Test Album 4", description: "This is some of my favorite building photos", author_id: user1.id)
album5 = Album.create(title: "Test Album 5", description: "This is some of my favorite car photos", author_id: user2.id)

# Album 1
PhotoAlbum.create(album_id: album1.id, photo_id: photo1.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo2.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo3.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo4.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo5.id)

# Album 2
PhotoAlbum.create(album_id: album2.id, photo_id: photo6.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo7.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo8.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo9.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo10.id)

# Album 3
PhotoAlbum.create(album_id: album3.id, photo_id: photo11.id)
PhotoAlbum.create(album_id: album3.id, photo_id: photo12.id)
PhotoAlbum.create(album_id: album3.id, photo_id: photo13.id)
PhotoAlbum.create(album_id: album3.id, photo_id: photo4.id)
PhotoAlbum.create(album_id: album3.id, photo_id: photo5.id)

# Album 4
PhotoAlbum.create(album_id: album4.id, photo_id: photo14.id)
PhotoAlbum.create(album_id: album4.id, photo_id: photo15.id)
PhotoAlbum.create(album_id: album4.id, photo_id: photo16.id)


# Comments

Comment.create(body: "This is a very good comment", photo_id: photo1.id, author_id: user1.id )
Comment.create(body: "This is a very good comment", photo_id: photo1.id, author_id: user1.id )
Comment.create(body: "This is a very good comment", photo_id: photo1.id, author_id: user1.id )
Comment.create(body: "This is a very good comment", photo_id: photo2.id, author_id: user2.id )
Comment.create(body: "This is a very good comment", photo_id: photo2.id, author_id: user2.id )
Comment.create(body: "This is a very good comment", photo_id: photo2.id, author_id: user2.id )
