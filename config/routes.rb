Rails.application.routes.draw do
  scope :admin do
    resources :drivers
    resources :events
  end

  get "log/:driver_id", to: "driver_log#index", as: "driver_logs"
  get "log/:driver_id/:id", to: "driver_log#edit", as: "driver_log"
  patch "log/:driver_id/:id", to: "driver_log#update"

  get "*path", to: "application#fallback_index_html", constraints: -> (request) do
                 !request.xhr? && request.format.html?
               end
end
