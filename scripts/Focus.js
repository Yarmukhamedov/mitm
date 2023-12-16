var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1689654855190,
  "request_date" : "2023-07-18T04:34:15Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-07-18T04:33:45Z",
    "original_application_version" : "20230057",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "iap.io.masterbuilders.focus.pro_one_year" : {
        "original_purchase_date" : "2023-07-18T04:34:11Z",
        "expires_date" : "2099-07-25T04:34:10Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-07-18T04:34:10Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "subscribed" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-07-18T04:34:10Z",
        "product_identifier" : "iap.io.masterbuilders.focus.pro_one_year",
        "expires_date" : "2099-07-25T04:34:10Z"
      }
    },
    "original_purchase_date" : "2023-07-18T04:34:12Z",
    "original_app_user_id" : "$RCAnonymousID:3a3d8a6c6da148e682006e06649bcacc",
    "last_seen" : "2023-07-18T04:33:45Z"
  }
}
$done({body: JSON.stringify(obj)});