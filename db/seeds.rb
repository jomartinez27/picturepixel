# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Photo.destroy_all

  bit = User.create!(username: 'bit', email: 'bit@bit', password: '123456')
  pixelPower = User.create!(username: 'pixelPower', email: 'pixel@power', password: '123456')
  retro = User.create!(username: 'retro', email: 'retro@retro', password: '123456')
  n64 = User.create!(username: 'n64', email: 'n64@n64', password: '123456')
  genesis = User.create!(username: 'genesis', email: 'genesis', password: '123456')
  saturn = User.create!(username: 'saturn', email: 'saturn@saturn', password: '123456')
  sega = User.create!(username: 'sega', email: 'sega@sega', password: '123456')
  cyberpunk = User.create!(username: 'cyberpunk', email: 'cyber@punk', password: '123456')
  pixelated = User.create!(username: 'pixelated', email: 'pixel@pixelated', password: '123456')
  shovelNight = User.create!(username: 'shovelNight', email: 'shovel@night', password: '123456')
  mario = User.create!(username: 'mario', email: 'mario@brother', password: '123456')
  gameboy = User.create!(username: 'gameboy', email: 'game@boy', password: '123456')
  eightbit = User.create!(username: 'eightbit', email: 'eight@bit', password: '123456')
  sixteenbit = User.create!(username: 'sixteenbit', email: 'sixteen@bit', password: '123456')
  thunda = User.create!(username: 'thunda', email: 'thunda@storm', password: '123456')

  photo1 = Photo.new(title: 'some pixel art', description: 'a cool photo of a street pixelated', photographer_id: 1)
  file1 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/foreground.png')
  photo1.photo.attach(io: file1, filename: 'foreground.png')
  photo1.save!

  photo2 = Photo.new(title: 'Rainy', description: 'rainy gif', photographer_id: 15)
  file2 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/nature-rain.gif')
  photo2.photo.attach(io: file2, filename: 'nature-rain.gif')
  photo2.save!

  photo3 = Photo.new(title: 'purple rain', description: 'purple rain purple rain', photographer_id: 15)
  file3 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/rain.gif')
  photo3.photo.attach(io: file3, filename: 'rain.gif')
  photo3.save!


  photo4 = Photo.new(title: 'A cave', description: 'a cool cave', photographer_id: 14)
  file4 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/cave.jpg')
  photo4.photo.attach(io: file4, filename: 'rain.gif')
  photo4.save!

  photo5 = Photo.new(title: 'Shovel-Knight', description: '', photographer_id: 10)
  file5 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/shovel-knight.jpg')
  photo5.photo.attach(io: file5, filename: 'rain.gif')
  photo5.save!

  photo6 = Photo.new(title: 'Blink..Blink..', description: '...Blink...Blink', photographer_id: 3)
  file6 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/blink.gif')
  photo6.photo.attach(io: file6, filename: 'blink.gif')
  photo6.save!

  photo7 = Photo.new(title: 'City', description: '', photographer_id: 6)
  file7 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/city.gif')
  photo7.photo.attach(io: file7, filename: 'city.gif')
  photo7.save!

  photo8 = Photo.new(title: 'computron', description: '', photographer_id: 3)
  file8 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/pink-comp.gif')
  photo8.photo.attach(io: file8, filename: 'pink-comp.gif')
  photo8.save!

  photo9 = Photo.new(title: 'starlight', description: 'beautiful', photographer_id: 2)
  file9 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/starlight.png')
  photo9.photo.attach(io: file9, filename: 'pink-comp.gif')
  photo9.save!

  photo10 = Photo.new(title: 'Future', description: '', photographer_id: 4)
  file10 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/video-phone.gif')
  photo10.photo.attach(io: file10, filename: 'video-phone.gif')
  photo10.save!

  photo11 = Photo.new(title: 'windy', description: 'cut off from the world and windy', photographer_id: 3)
  file11 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/windy.gif')
  photo11.photo.attach(io: file11, filename: 'windy.gif')
  photo11.save!

  photo12 = Photo.new(title: 'airplane', description: 'A airplane flies by', photographer_id: 7)
  file12 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/airplane.gif')
  photo12.photo.attach(io: file12, filename: 'airplane.gif')
  photo12.save!

  photo13 = Photo.new(title: 'Alley cats', description: 'Look at these kitties', photographer_id: 9)
  file13 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/alleycats.gif')
  photo13.photo.attach(io: file13, filename: 'alleycats.gif')
  photo13.save!

  photo14 = Photo.new(title: 'Apartment', description: 'reminds me of my childhood', photographer_id: 12)
  file14 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/apartment.jpg')
  photo14.photo.attach(io: file14, filename: 'apartment.jpg')
  photo14.save!

  photo15 = Photo.new(title: 'Arcade', description: 'anybody remember the arcade?', photographer_id: 5)
  file15 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/arcade.gif')
  photo15.photo.attach(io: file15, filename: 'arcade.gif')
  photo15.save!

  photo16 = Photo.new(title: 'Bulba', description: 'bulba bulbasaur', photographer_id: 12)
  file16 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/bulba1.png')
  photo16.photo.attach(io: file16, filename: 'bulba.png')
  photo16.save!

  photo17 = Photo.new(title: 'coffee time!', description: 'Taking a break', photographer_id: 9)
  file17 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/coffee-break.gif')
  photo17.photo.attach(io: file17, filename: 'coffee-break.gif')
  photo17.save!

  photo17 = Photo.new(title: 'coffee time!', description: 'Taking a break', photographer_id: 9)
  file17 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/coffee-break.gif')
  photo17.photo.attach(io: file17, filename: 'coffee-break.gif')
  photo17.save!

  photo18 = Photo.new(title: 'Street', description: 'cyberpunk street :)', photographer_id: 8)
  file18 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/cyberpunk-street+copy.png')
  photo18.photo.attach(io: file18, filename: 'cyberpunk-street.png')
  photo18.save!

  photo19 = Photo.new(title: 'Dragonballs', description: 'collect all 7', photographer_id: 12)
  file19 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/dragonballs.gif')
  photo19.photo.attach(io: file19, filename: 'dragonballs.gif')
  photo19.save!

  photo20 = Photo.new(title: 'Dungeon', description: 'reminds me of zelda', photographer_id: 4)
  file20 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/dungeon.gif')
  photo20.photo.attach(io: file20, filename: 'dungeon.gif')
  photo20.save!

  photo21 = Photo.new(title: 'Working hard', description: '*smack*', photographer_id: 6)
  file21 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/dwarf.gif')
  photo21.photo.attach(io: file21, filename: 'dwarf.gif')
  photo21.save!

  photo22 = Photo.new(title: 'flying cars', description: '', photographer_id: 8)
  file22 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/flying-cars.gif')
  photo22.photo.attach(io: file22, filename: 'flying-cars.gif')
  photo22.save!

  photo23 = Photo.new(title: 'forest', description: 'wanna hike?', photographer_id: 4)
  file23 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/forest.png')
  photo23.photo.attach(io: file23, filename: 'forest.png')
  photo23.save!

  photo24 = Photo.new(title: 'Incredibles', description: '*pow*', photographer_id: 2)
  file24 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/incredibles.gif')
  photo24.photo.attach(io: file24, filename: 'incredibles.gif')
  photo24.save!

  photo25 = Photo.new(title: 'Coco', description: '...remember me...', photographer_id: 1)
  file25 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/remember-me.gif')
  photo25.photo.attach(io: file25, filename: 'remember-me.gif')
  photo25.save!

  photo26 = Photo.new(title: 'suburbs', description: 'at night', photographer_id: 7)
  file26 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/suburbs-night.gif')
  photo26.photo.attach(io: file26, filename: 'suburbs-night.gif')
  photo26.save!

  photo27 = Photo.new(title: 'suburbs', description: 'during the day', photographer_id: 7)
  file27 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/suburbs.gif')
  photo27.photo.attach(io: file27, filename: 'suburbs.gif')
  photo27.save!

  photo28 = Photo.new(title: 'sunset', description: 'beautiful sunset', photographer_id: 1)
  file28 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/sunset.jpg')
  photo28.photo.attach(io: file28, filename: 'sunset.jpg')
  photo28.save!

  photo29 = Photo.new(title: 'westworld', description: 'these violent delights', photographer_id: 3)
  file29 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/westworld.jpg')
  photo29.photo.attach(io: file29, filename: 'westworld.jpg')
  photo29.save!

  photo30 = Photo.new(title: 'who are you?', description: '', photographer_id: 13)
  file30 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/who-are-you.gif')
  photo30.photo.attach(io: file30, filename: 'who-are-you.gif')
  photo30.save!
end
