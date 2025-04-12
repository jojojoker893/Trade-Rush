class TradeLog < ApplicationRecord
  belongs_to :user
  validates :profitloss, numericality: true
end
