# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Location.destroy_all
User.destroy_all
Item.destroy_all


@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} Users Created!"

@location1 = Location.create!(name: 'Target')
@location2 = Location.create!(name: 'BestBuy')
@location3 = Location.create!(name: 'Nordstrom')
@location4 = Location.create!(name: 'Bed Bath and Beyond')
@location5 = Location.create!(name: 'Amazon')


puts "#{Location.count} locations created"

@item1 = Item.create!(name: 'PlayStation5', locations: [@location1, @location2, @location5], user: @admin)

@item2 = Item.create!(name: 'sport jacket', user: @admin)

@item2.locations.push(@location1, @location3)


@location1.items.create!(name: 'iPhoneXX', user: @admin)

puts "#{Item.count} Items Created!"