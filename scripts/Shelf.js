var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1679050824352,
  "request_date" : "2023-03-17T11:00:24Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-03-17T10:58:44Z",
    "original_application_version" : "38",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "ShelfProYearly" : {
        "original_purchase_date" : "2023-03-17T11:00:16Z",
        "expires_date" : "2099-03-20T11:00:15Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-03-17T11:00:15Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-03-17T11:00:15Z",
        "product_identifier" : "ShelfProYearly",
        "expires_date" : "2023-03-20T11:00:15Z"
      }
    },
    "original_purchase_date" : "2023-03-17T10:56:50Z",
    "original_app_user_id" : "$RCAnonymousID:ba6b06c79e5548de838b62a6887c80a3",
    "last_seen" : "2023-03-17T10:58:44Z"
  }
}
$done({body: JSON.stringify(obj)});
