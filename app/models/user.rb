class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
  #look up allow nil again
  attr_reader :password

  has_many(
  :pins,
  class_name: :Pin,
  foreign_key: :user_id
)

  has_many(    
  :boards,
  class_name: :Board,
  foreign_key: :user_id
)

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
      # render json
    else
      return nil
    end
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

end
