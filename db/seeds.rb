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

  photo13 = Photo.new(title: 'Alley cats', description: 'Look at these kitties', photographer_id: 9)
  file13 = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/alleycats.gif')
  photo13.photo.attach(io: file13, filename: 'alleycats.gif')
  photo13.save!
end
