INSTRUCCIONES INICIALES
>POST en DB de alertas
>Esquemas iniciales estan en carpeta models


CONCEPTOS
>identificador = identificador API smart Alerts (plataforma admin)
>mensaje = mensaje
>relacionador = relaciona apps por categorias

RELACIONADORES
>Mantenimiento = 2 Teams
>Mantenimiento = 3 Outlook
>Calidad       = 5 Teams
>Calidad       = 6 Outlook
>Logistica     = 8 Teams
>Logistica     = 9 Outlook

LINKS
>https://appstijera.cw01.contiwan.com:97/Login/Index?ReturnUrl=%2f
>https://appstijera.cw01.contiwan.com:81/api/Alerts/Send


sudo env PATH=$PATH:/home/uidj9070/.nvm/versions/node/v16.16.0/bin /home/uidj9070/.nvm/versions/node/v16.16.0/lib/node_modules/pm2/bin/pm2 startup index.js -u uidj9070 --hp /home/uidj9070

