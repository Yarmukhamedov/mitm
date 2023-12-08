# NAME: AppHud
# AUTHOR: Yarmukhamedov
# DESCRIPTION = This Snippet hacks all apps which using AppHud
# UPDATED: 2023-12-08 10:14:36
# REPO: YMKHDV Repo
# OPENURL = https://github.com/Yarmukhamedov/mitm/tree/main
# HOMEPAGE = https://github.com/Yarmukhamedov/mitm/tree/main
# MANUAL = 
# ICON = https://raw.githubusercontent.com/Yarmukhamedov/mitm/main/images/logos/Apphud.png

# SCRIPT
https://api.apphud.com/v1/customers(?!\/(push_token|attribution)) url script-response-body https://raw.githubusercontent.com/Yarmukhamedov/mitm/main/scripts/AppHud.js
https://api.apphud.com/v1/customers(?!\/(push_token|attribution)) url script-response-body https://raw.githubusercontent.com/Yarmukhamedov/mitm/main/scripts/AppHudPaywalls.js

# MITM
hostname = api.apphud.com
