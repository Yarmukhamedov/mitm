var obj = JSON.parse($response.body);
obj.data.results.subscriptions = [
        {
          "id" : "8bbcdbc9-5ef6-4b24-ba7c-3bdc1262ba2d",
          "unit" : "day",
          "group_id" : "7bef3d38",
          "autorenew_enabled" : false,
          "expires_at" : null,
          "in_retry_billing" : false,
          "introductory_activated" : false,
          "cancelled_at" : null,
          "platform" : "ios",
          "product_id" : "com.alxrguz.finance.infinity.premium",
          "retries_count" : 0,
          "started_at" : "2022-12-22T07:30:06.000Z",
          "local" : false,
          "next_check_at" : null,
          "kind" : "nonrenewable",
          "units_count" : 1,
          "environment" : "production",
          "status" : "regular"
        }
      ]
$done({body: JSON.stringify(obj)});
