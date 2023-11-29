var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1691216617607,
  "request_date" : "2023-08-05T06:23:37Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-08-05T06:22:43Z",
    "original_application_version" : "99",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "co.hilab.justtrack.plus.year" : {
        "original_purchase_date" : "2023-08-05T06:23:33Z",
        "expires_date" : "2099-08-12T06:23:32Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "280001557702709",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-08-05T06:23:32Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "plus" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-05T06:23:32Z",
        "product_identifier" : "co.hilab.justtrack.plus.year",
        "expires_date" : "2099-08-12T06:23:32Z"
      }
    },
    "original_purchase_date" : "2023-08-05T06:19:33Z",
    "original_app_user_id" : "$RCAnonymousID:184abbd5136d4d9e92d99b4921d0900e",
    "last_seen" : "2023-08-05T06:22:43Z"
  }
}

$done({body: JSON.stringify(obj)});