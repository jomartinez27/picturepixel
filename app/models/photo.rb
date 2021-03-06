class Photo < ApplicationRecord
  validates :title, presence: true
  validates :description, length: { maximum: 35 }
  validate :ensure_photo

  has_one_attached :photo

  belongs_to :user,
    class_name: :User,
    foreign_key: :photographer_id

    def ensure_photo
      unless self.photo.attached?
        errors[:error] << "must attach photo"
      end
    end
end
