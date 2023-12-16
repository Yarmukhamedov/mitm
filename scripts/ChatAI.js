var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1684298698387,
  "request_date" : "2023-05-17T04:44:58Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-05-17T04:43:20Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.palligroup.gpt3.weeklyyy" : {
        "original_purchase_date" : "2023-05-17T04:44:53Z",
        "expires_date" : "2099-05-20T04:44:52Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-05-17T04:44:52Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Advanced" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-05-17T04:44:52Z",
        "product_identifier" : "com.palligroup.gpt3.weeklyyy",
        "expires_date" : "2099-05-20T04:44:52Z"
      }
    },
    "original_purchase_date" : "2023-05-17T04:43:03Z",
    "original_app_user_id" : "$RCAnonymousID:af7a8cbde2434219823548f8ba652c7c",
    "last_seen" : "2023-05-17T04:43:20Z"
  }
}
$done({body: JSON.stringify(obj)});
