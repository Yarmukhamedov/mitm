var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1793608467494,
  "request_date" : "2026-11-02T08:34:27Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2026-10-18T19:52:43Z",
    "original_application_version" : "56",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.sereda.Expensa.yrl" : {
        "management_url" : "https://apps.apple.com/account/subscriptions",
        "expires_date" : "2027-11-01T19:54:02Z",
        "is_sandbox" : false,
        "original_purchase_date" : "2026-10-18T19:54:02Z",
        "refunded_at" : null,
        "store_transaction_id" : "90003559926803",
        "unsubscribe_detected_at" : "2026-11-01T16:48:42Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "price" : {
          "amount" : 22.989999999999998,
          "currency" : "USD"
        },
        "purchase_date" : "2026-11-01T20:54:02Z",
        "display_name" : "Yearly",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2026-11-01T20:54:02Z",
        "product_identifier" : "com.sereda.Expensa.yrl",
        "expires_date" : "2027-11-01T19:54:02Z"
      }
    },
    "original_purchase_date" : "2026-10-18T19:54:02Z",
    "original_app_user_id" : "_51a40749c0cf3ccb70ce742ddf3005fb",
    "last_seen" : "2026-11-01T16:48:43Z"
  }
}
$done({body: JSON.stringify(obj)});
