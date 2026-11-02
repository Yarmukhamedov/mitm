var obj = JSON.parse($response.body);
obj = 
{
  "free_balance" : 500,
  "paid_balance" : 0,
  "pricing_revision" : 35,
  "pricing" : {
    "video_quality" : {
      "fun_mode_surcharge" : 5,
      "skin_change_surcharge" : 3,
      "player_hud_surcharge" : 1,
      "remove_watermark_surcharge" : 3,
      "720p_surcharge" : 0,
      "60_fps_surcharge" : 0,
      "map_override_surcharge" : 2,
      "240_fps_surcharge" : 0,
      "1080p_surcharge" : 1,
      "120_fps_surcharge" : 4,
      "xray_surcharge" : 0,
      "2k_surcharge" : 3
    },
    "full_round" : {
      "enemy_pov_surcharge" : 1,
      "cost" : 8
    },
    "montage" : {
      "base" : 2,
      "block_size" : 4,
      "slow_motion_surcharge" : 1,
      "intro_surcharge" : 1,
      "enemy_pov_per_block" : 1,
      "enemy_pov_block_size" : 4,
      "per_block" : 1
    },
    "telegram_delivery_surcharge" : 1,
    "compilation" : {
      "base" : 3,
      "block_size" : 4,
      "deaths_block_size" : 5,
      "deaths_per_block" : 1,
      "enemy_pov_per_block" : 1,
      "enemy_pov_block_size" : 4,
      "per_block" : 1
    },
    "single_highlight" : {
      "enemy_pov_surcharge" : 1,
      "slow_motion_surcharge" : 1,
      "cost" : 1
    },
    "full_game" : {
      "enemy_pov_per_round" : 1,
      "per_round" : 5,
      "quality_1080p_per_round" : 1,
      "remove_watermark" : 5
    }
  },
  "daily_claim" : {
    "amount" : 4,
    "can_claim" : false,
    "blocked_reason" : "already_claimed",
    "base" : {
      "amount" : 4,
      "cap" : 18
    },
    "monthly_supporter" : {
      "active" : false,
      "bonus" : 0,
      "expires_at" : null,
      "unpaid_amount" : 4,
      "threshold_usd_cents" : 100,
      "paid_amount" : 4,
      "threshold_uzs" : 10000
    },
    "perks" : [
      {
        "active" : false,
        "bonus" : {
          "amount" : 1,
          "cap" : 0
        },
        "description_key" : "coins.perks.telegram_channel.description",
        "id" : "telegram_channel",
        "label_key" : "coins.perks.telegram_channel.label",
        "cta" : {
          "kind" : "action",
          "label_key" : "coins.perks.telegram_channel.connectLabel",
          "url" : null,
          "route" : null,
          "action" : "open_connect_telegram"
        },
        "active_label_key" : "coins.perks.telegram_channel.active",
        "extra" : {
          "channel" : "csdemo_uz"
        }
      }
    ],
    "next_claim_at" : "2026-11-02T19:00:00+00:00",
    "cap" : 18
  },
  "nickname_reward" : {
    "enabled" : false,
    "amount" : 1,
    "faceit_amount" : 2
  },
  "balance" : 21
}
$done({body: JSON.stringify(obj)});
