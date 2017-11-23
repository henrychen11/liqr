# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Photo.destroy_all
Album.destroy_all

user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user4 = User.create(username: 'henry', email: Faker::Internet.email, password: 'password')

photo1 = Photo.create(img_url: "temple.jpg", title: "Temple", author_id: user1.id)
photo2 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo3 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo4 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo5 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo6 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo7 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo8 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo9 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo10 = Photo.create(img_url: "", title: "", author_id: user1.id)
photo11 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo12 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo13 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo14 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo15 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo16 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo17 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo18 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo19 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo20 = Photo.create(img_url: "", title: "", author_id: user2.id)
photo21 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo22 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo23 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo24 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo25 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo26 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo27 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo28 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo29 = Photo.create(img_url: "", title: "", author_id: user3.id)
photo30 = Photo.create(img_url: "", title: "", author_id: user3.id)

album1
