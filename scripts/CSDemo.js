var obj = JSON.parse($response.body);
obj = 
{
  "faceit_elo" : 1213,
  "telegram_expiry_notifications" : true,
  "faceit_id" : "d1b2e882-cbb5-434f-8fca-bb02969ad8a7",
  "email_connected" : false,
  "telegram_connected" : false,
  "loadouts_enabled" : true,
  "faceit_nickname" : "ymkhdv1",
  "avatar_url" : "https://avatars.steamstatic.com/cdcbafee439a82d9986a536440c437d6594fb4fd_full.jpg",
  "steam_id" : "76561199693105353",
  "id" : 48542,
  "faceit_connected" : true,
  "email" : null,
  "has_password" : false,
  "faceit_level" : 6,
  "paid_coin_balance" : 0,
  "is_admin" : false,
  "coin_balance" : 20,
  "account_id" : 1732839625,
  "steam_name" : "ghost",
  "telegram_send_videos" : false,
  "telegram_stats" : true,
  "steam_sync_enabled" : false,
  "telegram_stats_columns" : [
    "kills",
    "deaths",
    "assists",
    "adr",
    "hs_pct",
    "kast",
    "rating"
  ],
  "is_super_admin" : false,
  "admin_permissions" : [

  ]
}
$done({body: JSON.stringify(obj)});
