var obj = JSON.parse($response.body);
obj = 
{
  "result" : "success",
  "promotional_offer" : 2,
  "hash" : "AMEavkiMJmhB+qW7OPSovtiPLk4=",
  "type" : 2,
  "expiry_date" : "2099-03-23 21:12:11",
  "used_promotion" : "t"
}
$done({body: JSON.stringify(obj)});
