var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1772454046590,
  "request_date" : "2026-03-02T12:20:46Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2026-03-02T12:11:03Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.liebanajr.Walletsmith.yearly" : {
        "management_url" : "https://apps.apple.com/account/subscriptions",
        "expires_date" : "2099-03-09T11:19:40Z",
        "is_sandbox" : false,
        "original_purchase_date" : "2026-03-02T12:19:42Z",
        "refunded_at" : null,
        "store_transaction_id" : "90003110562976",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "price" : {
          "amount" : 0,
          "currency" : "USD"
        },
        "purchase_date" : "2026-03-02T12:19:40Z",
        "display_name" : null,
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "unlimited" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2026-03-02T12:19:40Z",
        "product_identifier" : "com.liebanajr.Walletsmith.yearly",
        "expires_date" : "2099-03-09T11:19:40Z"
      }
    },
    "original_purchase_date" : "2025-10-27T08:51:51Z",
    "original_app_user_id" : "$RCAnonymousID:a03e8ad3a9cd47eaa5fcf13aee4174b9",
    "last_seen" : "2026-03-02T12:11:03Z"
  }
}
$done({body: JSON.stringify(obj)});
