var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1687606206257,
  "request_date" : "2023-06-24T11:30:06Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-06-24T11:19:18Z",
    "original_application_version" : "105",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "homerun_499_1y_1wfree" : {
        "original_purchase_date" : "2023-06-24T11:29:56Z",
        "expires_date" : "2099-07-01T11:29:55Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-06-24T11:29:55Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "plus" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-06-24T11:29:55Z",
        "product_identifier" : "homerun_499_1y_1wfree",
        "expires_date" : "2099-07-01T11:29:55Z"
      }
    },
    "original_purchase_date" : "2023-06-24T11:29:57Z",
    "original_app_user_id" : "$RCAnonymousID:d427dccf9858452c85134b195ecc7fb1",
    "last_seen" : "2023-06-24T11:19:18Z"
  }
}
$done({body: JSON.stringify(obj)});
