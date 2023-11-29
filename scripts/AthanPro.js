var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1679030963868,
  "request_date" : "2023-03-17T05:29:23Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-03-17T05:28:28Z",
    "original_application_version" : "4",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.quanticapps.athanproorient.subscription.year" : {
        "original_purchase_date" : "2023-03-17T05:29:16Z",
        "expires_date" : "2099-03-20T05:29:15Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-03-17T05:29:15Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "com.quanticapps.athanpro2.premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-03-17T05:29:15Z",
        "product_identifier" : "com.quanticapps.athanproorient.subscription.year",
        "expires_date" : "2099-03-20T05:29:15Z"
      }
    },
    "original_purchase_date" : "2023-03-17T05:14:19Z",
    "original_app_user_id" : "$RCAnonymousID:6646cc06e6ae4ae882bc55a91b9e474c",
    "last_seen" : "2023-03-17T05:28:28Z"
  }
}
$done({body: JSON.stringify(obj)});
