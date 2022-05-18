json.extract! company, :diplay_name, :owner_name, :vehicles, :phone_number, :address, :email, :ein :created_at, :updated_at
json.url company_url(company, format: :json)