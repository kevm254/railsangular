# create_table "freelance_documents", force: :cascade do |t|
#   t.string "title"
#   t.string "description"
#   t.text "file_url"
#   t.text "image_url"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

10.times do |d|
  FreelanceDocument.create!(title: "Document #{d}", description: "abc 123", file_url: "http://www.google.com", image_url: "http://placehold.it/400x400")
end

