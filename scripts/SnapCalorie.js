var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1688372232304,
  "request_date" : "2023-07-03T08:17:12Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-07-03T08:12:45Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "sc_14900_1y_1w0" : {
        "original_purchase_date" : "2023-07-03T08:16:55Z",
        "expires_date" : "2099-07-10T08:16:54Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-07-03T08:16:54Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-07-03T08:16:54Z",
        "product_identifier" : "sc_14900_1y_1w0",
        "expires_date" : "2099-07-10T08:16:54Z"
      }
    },
    "original_purchase_date" : "2023-07-03T08:04:33Z",
    "original_app_user_id" : "000020082-e3371b90",
    "last_seen" : "2023-07-03T08:12:45Z"
  }
}

$done({body: JSON.stringify(obj)});