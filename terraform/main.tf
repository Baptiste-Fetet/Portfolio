provider "google" {
  project     = var.PROJECT_ID
  region      = var.REGION
  credentials = file("~/.config/gcloud/application_default_credentials.json")
}

terraform {
  backend "gcs" {
    bucket  = "tfstate-baptiste"
  }
}

resource "google_storage_bucket" "website_bucket" {
  name     = var.BUCKET_NAME
  location = var.REGION
  force_destroy = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }

  uniform_bucket_level_access = true
}

resource "google_storage_bucket_iam_binding" "public_read" {
  bucket = google_storage_bucket.website_bucket.name

  role    = "roles/storage.objectViewer"
  members = ["allUsers"]
}
