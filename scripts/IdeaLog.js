var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1692165085490,
  "request_date" : "2023-08-16T05:51:25Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-08-16T05:50:37Z",
    "original_application_version" : "8",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.idealog.monthly" : {
        "original_purchase_date" : "2023-08-16T05:51:21Z",
        "expires_date" : "2099-08-19T05:51:19Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "280001569845832",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-08-16T05:51:19Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-16T05:51:19Z",
        "product_identifier" : "com.idealog.monthly",
        "expires_date" : "2099-08-19T05:51:19Z"
      }
    },
    "original_purchase_date" : "2023-08-16T05:50:21Z",
    "original_app_user_id" : "$RCAnonymousID:6c6a25828e3f42afb726a83fc5ff1852",
    "last_seen" : "2023-08-16T05:50:37Z"
  }
}

$done({body: JSON.stringify(obj)});