var obj = JSON.parse($response.body);
obj = 
{
  "request_date_ms" : 1689736676913,
  "request_date" : "2023-07-19T03:17:56Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-07-19T03:17:14Z",
    "original_application_version" : "246",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.sbs.diet.1y0599.2w0" : {
        "original_purchase_date" : "2023-07-19T03:17:53Z",
        "expires_date" : "2099-08-02T03:17:52Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-07-19T03:17:52Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "subscription" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-07-19T03:17:52Z",
        "product_identifier" : "com.sbs.diet.1y0599.2w0",
        "expires_date" : "2099-08-02T03:17:52Z"
      }
    },
    "original_purchase_date" : "2023-07-18T21:29:29Z",
    "original_app_user_id" : "IQ1QnKr18OQkCuSV6YUAdntiVcZ2",
    "last_seen" : "2023-07-19T03:17:14Z"
  }
}

$done({body: JSON.stringify(obj)});