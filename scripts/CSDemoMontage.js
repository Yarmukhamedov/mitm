var obj = JSON.parse($response.body);
obj = 
{
  "music_start_seconds" : null,
  "smoke_color" : null,
  "show_xray" : false,
  "output_format" : "landscape",
  "include_enemy_pov" : false,
  "send_to_telegram" : false,
  "fun_mode" : {

  },
  "remove_watermark" : true,
  "vertical_template" : null,
  "map_override_id" : null,
  "match_id" : 1507648,
  "expected_pricing_revision" : 1,
  "fps" : 120,
  "name" : "Dust2 montage",
  "loadout_id" : null,
  "voice_mode" : "follow_pov",
  "render_quality" : "2k",
  "game_volume" : null,
  "show_hud" : false,
  "kill_ticks" : [
    75465,
    75666
  ],
  "skybox_id" : null,
  "enemy_pov_placement" : "at_end",
  "slow_motion_ticks" : [

  ],
  "music_volume" : null,
  "expected_coin_cost" : 1,
  "include_voice" : false,
  "aspect_ratio" : "16:9",
  "hud_style" : "default",
  "music_track_id" : null
}
$done({body: JSON.stringify(obj)});