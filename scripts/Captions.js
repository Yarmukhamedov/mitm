var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1684304140850,
  "request_date" : "2023-05-17T06:15:40Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-05-17T05:44:08Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "TranscriptionYearly" : {
        "original_purchase_date" : "2023-05-17T06:15:37Z",
        "expires_date" : "2099-05-20T06:15:36Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-05-17T06:15:36Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2099-05-17T06:15:36Z",
        "product_identifier" : "TranscriptionYearly",
        "expires_date" : "2099-05-20T06:15:36Z"
      }
    },
    "original_purchase_date" : "2023-05-17T06:15:37Z",
    "original_app_user_id" : "$RCAnonymousID:5824b1c3cd1d43349a5188faa14bc900",
    "last_seen" : "2023-05-17T05:49:30Z"
  }
}
$done({body: JSON.stringify(obj)});
