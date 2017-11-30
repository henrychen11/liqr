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
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user4 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

photo1 = Photo.create(img_url: "ZOuKRxax1Kc_aidjqd.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo2 = Photo.create(img_url: "sJ2JuPextmo_zmiteq.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo3 = Photo.create(img_url: "Zvjg49hkoNY_cp8ppo.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo4 = Photo.create(img_url: "X12X4uTDInQ_nbtu1n.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo5 = Photo.create(img_url: "zuYVmsUgIrw_pdlghq.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo6 = Photo.create(img_url: "FRTfJAaUHp4_ozzucy.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo7 = Photo.create(img_url: "wHUFmZRMpLc_gkvacu.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo8 = Photo.create(img_url: "quFGlyxQufE_tkfuse.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo9 = Photo.create(img_url: "UhGZ-k6EB_g_u4hxpx.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo10 = Photo.create(img_url: "rWotMddrvUM_tr7tjy.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo11 = Photo.create(img_url: "w504XUUximQ_lzf3b0.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo12 = Photo.create(img_url: "SRtQOGff7jQ_vo4dnv.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo13 = Photo.create(img_url: "IUkADtlFbK0_acard4.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo14 = Photo.create(img_url: "PjpuXmX7DAA_b99wjx.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo15 = Photo.create(img_url: "LJ23kmdFjbw_aplphv.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo16 = Photo.create(img_url: "qHblAFPy2uU_vnaieq.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo17 = Photo.create(img_url: "hGuGRayJrv0_kwgg0c.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo18 = Photo.create(img_url: "h0xKqdDPLaE_plgfak.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo19 = Photo.create(img_url: "hFzIoD0F_i8_kwfpwc.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo20 = Photo.create(img_url: "eaMZcbYNSwM_vs4djx.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
# Seed Part 2
photo21 = Photo.create(img_url: "AMdhNs9uSlQ_d6hskl.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo22 = Photo.create(img_url: "gQR4STZ24kM_pr5l60.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo23 = Photo.create(img_url: "feHQdqzummE_lvozwh.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo24 = Photo.create(img_url: "B9z9TjfIw3I_hdojm9.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo25 = Photo.create(img_url: "ck3HFWw2OiM_drbru6.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo26 = Photo.create(img_url: "aDUZbFgW3u4_zqsxy1.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo27 = Photo.create(img_url: "B65rlJPtYNQ_o4xslf.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo28 = Photo.create(img_url: "4BQipdlYx88_w7efme.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo29 = Photo.create(img_url: "AgKIg-V7sLs_dkiwt6.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo30 = Photo.create(img_url: "2Cde1RFNX7U_bcctwz.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo31 = Photo.create(img_url: "ygyy0s9OnN8_gvbfpl.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo32 = Photo.create(img_url: "y9csmronT3s_v4cuvz.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo33 = Photo.create(img_url: "X5ty2Pfj4Rw_zffpk8.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo34 = Photo.create(img_url: "zZzKLzKP24o_z04qba.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo35 = Photo.create(img_url: "JtGpJToxQ5c_uazf1s.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo36 = Photo.create(img_url: "VfqFumqaLpQ_h6rodm.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo37 = Photo.create(img_url: "xzjouTJASSA_fdrfha.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo38 = Photo.create(img_url: "NUMlxTPsznM_jzls9h.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo39 = Photo.create(img_url: "TsaXZL9hzEM_fc58gv.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)
photo40 = Photo.create(img_url: "DMcI0cmYJYk_ebbjxg.jpg", title: (Faker::Hipster.words(1)).first, description: Faker::Hipster.sentences(1).first, author_id: user1.id)


album1 = Album.create(title: "Landscape", description: "This is some of my favorite travel photos", author_id: user1.id)
album2 = Album.create(title: "Nature", description: "This is some of my favorite dinning photos", author_id: user1.id)
album3 = Album.create(title: "Sample New Album", description: "This is some of my favorite random photos", author_id: user1.id)

# Album 1
PhotoAlbum.create(album_id: album1.id, photo_id: photo1.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo2.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo3.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo4.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo5.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo6.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo7.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo8.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo9.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo10.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo11.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo12.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo13.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo4.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo5.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo14.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo15.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo16.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo17.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo18.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo19.id)
PhotoAlbum.create(album_id: album1.id, photo_id: photo20.id)


# Album 2
PhotoAlbum.create(album_id: album2.id, photo_id: photo21.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo22.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo23.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo24.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo25.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo26.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo27.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo28.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo29.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo30.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo31.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo32.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo33.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo34.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo35.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo36.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo37.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo38.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo39.id)
PhotoAlbum.create(album_id: album2.id, photo_id: photo40.id)

# Comments

Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo1.id, author_id: user1.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo1.id, author_id: user2.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo1.id, author_id: user3.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo1.id, author_id: user4.id )

Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo2.id, author_id: user1.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo2.id, author_id: user2.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo2.id, author_id: user3.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo2.id, author_id: user4.id )

Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo3.id, author_id: user1.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo3.id, author_id: user2.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo3.id, author_id: user3.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo3.id, author_id: user4.id )

Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo4.id, author_id: user1.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo4.id, author_id: user2.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo4.id, author_id: user3.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo4.id, author_id: user4.id )

Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo5.id, author_id: user1.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo5.id, author_id: user2.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo5.id, author_id: user3.id )
Comment.create(body: Faker::Hipster.sentences(2).first, photo_id: photo5.id, author_id: user4.id )
