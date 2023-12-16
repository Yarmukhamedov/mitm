var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1693642186507,
  "request_date" : "2023-09-02T08:09:46Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-09-02T08:06:35Z",
    "original_application_version" : "24",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "Professional_Monthly" : {
        "original_purchase_date" : "2023-09-02T08:09:40Z",
        "expires_date" : "2099-09-09T08:09:40Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "280001587133731",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-09-02T08:09:40Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Premium Professional" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-09-02T08:09:40Z",
        "product_identifier" : "Professional_Monthly",
        "expires_date" : "2099-09-09T08:09:40Z"
      }
    },
    "original_purchase_date" : "2023-09-02T08:09:41Z",
    "original_app_user_id" : "$RCAnonymousID:1e2b089e4ba04fa49244cd4ed2422bd0",
    "last_seen" : "2023-09-02T08:06:35Z"
  }
}

$done({body: JSON.stringify(obj)});
