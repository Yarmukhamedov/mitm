var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1682843126977,
  "request_date" : "2023-04-30T08:25:26Z",
  "subscriber" : {
    "non_subscriptions" : {
      "premium_lifetime" : [
        {
          "id" : "6e4a98c0c9",
          "is_sandbox" : false,
          "purchase_date" : "2023-04-28T08:11:12Z",
          "original_purchase_date" : "2023-04-28T08:11:12Z",
          "store" : "app_store"
        }
      ]
    },
    "first_seen" : "2023-04-28T07:51:16Z",
    "original_application_version" : "4",
    "other_purchases" : {
      "premium_lifetime" : {
        "purchase_date" : "2023-04-28T08:11:12Z"
      }
    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {

    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-04-28T08:11:12Z",
        "product_identifier" : "premium_lifetime",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2013-08-01T07:00:00Z",
    "original_app_user_id" : "$RCAnonymousID:105aa903bbc64b889312132a626c1a5e",
    "last_seen" : "2023-04-30T08:25:26Z"
  }
}
$done({body: JSON.stringify(obj)});
