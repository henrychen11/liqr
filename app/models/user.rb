class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password
  has_many :photos,
         primary_key: :id,
         foreign_key: :author_id,
         class_name: 'Photo',
         dependent: :destroy

  has_many :albums,
         primary_key: :id,
         foreign_key: :author_id,
         class_name: 'Album',
         dependent: :destroy

  has_many :comments,
         primary_key: :id,
         foreign_key: :author_id,
         class_name: 'Comment',
         dependent: :destroy

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    @user && @user.valid_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end


  end
