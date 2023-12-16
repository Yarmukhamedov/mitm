var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1679049282292,
  "request_date" : "2023-03-17T10:34:42Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-03-17T10:29:07Z",
    "original_application_version" : "536",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "app.steps.stepsapp.premium.monthlyTrial.tier1" : {
        "original_purchase_date" : "2023-03-17T10:34:37Z",
        "expires_date" : "2099-03-24T10:34:36Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-03-17T10:34:36Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "stepsapp_pedometer_premium_1_month" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-03-17T10:34:36Z",
        "product_identifier" : "app.steps.stepsapp.premium.monthlyTrial.tier1",
        "expires_date" : "2023-03-24T10:34:36Z"
      }
    },
    "original_purchase_date" : "2023-03-17T10:34:38Z",
    "original_app_user_id" : "$RCAnonymousID:086f583aae7f404b8fa80cdb7ed3fbd6",
    "last_seen" : "2023-03-17T10:29:07Z"
  }
}
$done({body: JSON.stringify(obj)});
