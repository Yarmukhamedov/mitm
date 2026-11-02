var obj = JSON.parse($response.body);
obj = 
{
  "detail" : {
    "message" : "Not enough coins to create this clip",
    "balance" : 500,
    "required" : 26
  }
}
$done({body: JSON.stringify(obj)});
