var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1693633103522,
  "request_date" : "2023-09-02T05:38:23Z",
  "subscriber" : {
    "non_subscriptions" : {
      "co.simplesimple.currency.currencypro.lifetime" : [
        {
          "id" : "5d60b2f322",
          "is_sandbox" : true,
          "purchase_date" : "2023-09-02T05:33:51Z",
          "original_purchase_date" : "2023-09-02T05:33:51Z",
          "store" : "app_store",
          "store_transaction_id" : "2000000404001101"
        }
      ]
    },
    "first_seen" : "2023-09-02T05:32:57Z",
    "original_application_version" : "1.0",
    "other_purchases" : {
      "co.simplesimple.currency.currencypro.lifetime" : {
        "purchase_date" : "2023-09-02T05:33:51Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "Pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-09-02T05:33:51Z",
        "product_identifier" : "co.simplesimple.currency.currencypro.lifetime",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2013-08-01T07:00:00Z",
    "original_app_user_id" : "$RCAnonymousID:256b5278c9d742dba1ff9e397007bd93",
    "last_seen" : "2023-09-02T05:32:57Z"
  }
}

$done({body: JSON.stringify(obj)});
