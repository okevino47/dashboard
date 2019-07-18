// config/database.js
module.exports = {

        'services' : [{
                        "name" : "youtube",
                        "description" : "Widgets permettant d'accéder aux statistiques d'une vidéo",
                        "widgets" : [{
                                "name" : "youtube_all",
                                "description" : "Affichage des vues, likes, dislike et commentaires d'une vidéo",
                                "params": [{
                                        "name" : "link",
                                        "type" : "string",
                                        "value" : "Default"
                                },
                                {
                                        "name" : "position",
                                        "type" : "number",
                                        "value" : 0
                                }]
                },{
                                "name" : "youtube_view",
                                "description" : "Affichage du nombre de vues d'une vidéo",
                                "params": [{
                                        "name" : "link",
                                        "type" : "string",
                                        "value" : "Default"
                                },
                                {
                                        "name" : "position",
                                        "type" : "number",
                                        "value" : 0
                                }
                        ]
                },{
                                "name" : "youtube_like",
                                "description" : "Affichage du nombre de likes d'une vidéo",
                                "params": [{
                                        "name" : "link",
                                        "type" : "string",
                                        "value" : "Default"
                                },
                                {
                                        "name" : "position",
                                        "type" : "number",
                                        "value" : 0
                                }
                        ]
                },{
                                "name" : "youtube_dislike",
                                "description" : "Affichage du nombre de dislikes d'une vidéo",
                                "params": [{
                                        "name" : "link",
                                        "type" : "string",
                                        "value" : "Default"
                                },
                                {
                                        "name" : "position",
                                        "type" : "number",
                                        "value" : 0
                                }
                        ]
                },{
                                "name" : "youtube_comment",
                                "description" : "Affichage du nombre de commentaires d'une vidéo",
                                "params": [{
                                        "name" : "link",
                                        "type" : "string",
                                        "value" : "Default"
                                },
                                {
                                        "name" : "position",
                                        "type" : "number",
                                        "value" : 0
                                }
                        ]
                }]

        },{
                        "name" : "weather",
                        "description" : "Widgets permettant d'accéder à la météo",
                        "widgets" : [{
                                "name" : "weather_temp",
                                "description" : "Affichage de la température d'une ville",
                                "params": [{
                                        "name" : "link",
                                        "type" : "string",
                                        "value" : "Default"
                                },
                                {
                                        "name" : "position",
                                        "type" : "number",
                                        "value" : 0
                                }]
                }]
        }]
};
