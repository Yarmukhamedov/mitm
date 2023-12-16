var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1691379963337,
  "request_date" : "2023-08-07T03:46:03Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-07-18T06:10:01Z",
    "original_application_version" : "870",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.fenestraplus.yearly" : {
        "original_purchase_date" : "2023-07-18T06:18:45Z",
        "expires_date" : "2099-07-25T06:18:44Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "280001538187458",
        "unsubscribe_detected_at" : "2023-07-20T19:04:08Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-07-18T06:18:44Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-07-18T06:18:44Z",
        "product_identifier" : "com.fenestraplus.yearly",
        "expires_date" : "2099-07-25T06:18:44Z"
      }
    },
    "original_purchase_date" : "2023-07-18T06:09:47Z",
    "original_app_user_id" : "$RCAnonymousID:be255cdbef6f4ce9a351f69667afef83",
    "last_seen" : "2023-08-07T03:46:03Z"
  }
}

$done({body: JSON.stringify(obj)});