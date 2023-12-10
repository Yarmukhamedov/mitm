#!name = Disabling advertising in mail ru services, including VK music, VK video and mail.
#!desc = Need to be enabled: always
#!icon = https://i.imgur.com/Vmywvqp.png

[URL Rewrite]
ad.mail.ru reject
alt-ad.mail.ru reject

[Mitm]
hostname = ad.mail.ru, alt-ad.mail.ru
