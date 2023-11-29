var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1692162230196,
  "request_date" : "2023-08-16T05:03:50Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-08-16T04:46:23Z",
    "original_application_version" : "93",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.activitybuilder.pro.yearly.v2" : {
        "original_purchase_date" : "2023-08-16T05:03:46Z",
        "expires_date" : "2099-08-19T05:03:45Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "280001569811061",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-08-16T05:03:45Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-16T05:03:45Z",
        "product_identifier" : "com.activitybuilder.pro.yearly.v2",
        "expires_date" : "2099-08-19T05:03:45Z"
      }
    },
    "original_purchase_date" : "2023-08-16T05:03:46Z",
    "original_app_user_id" : "$RCAnonymousID:f0145371981d49e89b86e4a808bf0192",
    "last_seen" : "2023-08-16T04:46:23Z"
  }
}

$done({body: JSON.stringify(obj)});
