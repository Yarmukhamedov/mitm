var obj = JSON.parse($response.body);
obj = {
  "request_date_ms" : 1695322871917,
  "request_date" : "2023-09-21T19:01:11Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-09-21T14:22:22Z",
    "original_application_version" : "35",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.roadesign.Scorespot.Yearly" : {
        "original_purchase_date" : "2023-09-21T19:01:08Z",
        "expires_date" : "2099-08-11T16:12:58Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "280001607584997",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-09-21T19:01:07Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "plus" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-09-21T19:01:07Z",
        "product_identifier" : "com.roadesign.Scorespot.Yearly",
        "expires_date" : "2099-08-11T16:12:58Z"
      }
    },
    "original_purchase_date" : "2023-09-21T04:01:36Z",
    "original_app_user_id" : "$RCAnonymousID:0c9eb16993094ece9fad48ef59c4e689",
    "last_seen" : "2023-09-21T14:22:22Z"
  }
}

$done({body: JSON.stringify(obj)});
