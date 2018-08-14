class Photo < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo

  has_one_attached :photo

  belongs_to :user,
    class_name: :User,
    foreign_key: :photographer_id

    def ensure_photo
      unless self.photo.attached?
        errors[:photo] << "Must attach photo"
      end
    end
end
