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

  demo = User.create!(username: 'demo', email: 'demo@demo', password: '123456')
  photo1 = Photo.new(title: 'some pixel art', description: 'a cool photo of a street pixelated', photographer_id: 1)
  photo1.photo.attach(io: File.open("./app/assets/images/cyberpunk-street.png"), filename: "cyberpunk-sreet.png")
  photo1.save!

  photo2 = Photo.new(title: 'some pixel art', description: 'a cool photo of a street pixelated', photographer_id: 1)
  file = EzDownload.open('https://s3-us-west-1.amazonaws.com/pixelpx-dev/foreground.png')
  photo2.photo.attach(io: file, filename: 'foreground.png')
  photo2.save!
end
