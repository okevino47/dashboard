        var getServices = require('./widgets.js');

        services = getServices.services;

        function getAllServices(services){
                var elem = [];
                for (var i=0; i<services.length; i++) {
                        elem.push(services[i].name);
                }
                return(elem);
        }

        // SERVICES
        function checkServiceExists(servName, services){
                for (var i=0; i<services.length; i++) {
                        if (services[i].name == servName) {
                                return(true);
                        }
                }
                return(false);
        }

        function recupInfoService(servName, services){

                var elem = {};
                for (var i=0; i<services.length; i++) {
                        if (services[i].name == servName) {
                                elem.name = services[i].name;
                                elem.description = services[i].description;
                                elem.widgets = [];
                                return(elem);
                        }
                }
                return(false);
        }


        function addService(servName, userwidgets, services){
                if (checkServiceExists(servName, services) == true) {
                        userwidgets.push(recupInfoService(servName, services));
                        return (userwidgets);
                }
                console.log("Doesn't exists");
                return(false);
        };

        function removeService(servName, userwidgets) {
                for (var i=0; i<userwidgets.length; i++) {
                        if (userwidgets[i].name == servName) {
                                userwidgets.splice(i, 1);
                                return(userwidgets);
                        }
                }
                return userwidgets
        };



        // WIDGET

        function findServiceContainingWidget(widgName){
                for (var i=0; i<services.length; i++) {
                        for (var j=0; j<services[i].widgets.length; j++) {
                                return(services[i].name);
                        }
                }
        };

        function checkWidgetExists(widgName, services){
                for (var i=0; i<services.length; i++) {
                        for (var j=0; j<services[i].widgets.length; j++) {
                                if (services[i].widgets[j].name == widgName) {
                                        return(true);
                                }
                        }
                }
                return(false);
        }

        function recupInfoWidget(widgName, services){

                var elem = {}
                for (var i=0; i<services.length; i++) {
                        for (var j=0; j<services[i].widgets.length; j++) {
                                if (services[i].widgets[j].name == widgName) {
                                        elem.name = services[i].widgets[j].name;
                                        elem.description = services[i].widgets[j].description;
                                        elem.params = services[i].widgets[j].params;
                                        return(elem);
                                }
                        }
                }
                return(false);
        }


        function addWidget(widgName, userwidgets, services){
                servName = findServiceContainingWidget(widgName);
                if (checkWidgetExists(widgName, services) == true) {
                        console.log("Exists");
                } else {
                        console.log("Doesn't exists");
                }
                for (var i=0; i<userwidgets.length; i++) {
                                if (userwidgets[i].name == servName) {
                                        userwidgets[i].widgets.push(recupInfoWidget(widgName, services));
                                }
                        }
                return(false);
        };

        function removeWidget(widgName, userwidgets) {
                servName = findServiceContainingWidget(widgName);
                for (var i=0; i<userwidgets.length; i++) {
                        if (userwidgets[i].name == servName) {
                                for (var j=0; j<userwidgets[i].widgets.length; j++) {
                                        if (userwidgets[i].widgets[j].name == widgName) {
                                                userwidgets[i].widgets.splice(j, 1);
                                                return(userwidgets);
                                        }
                                }
                        }
                }
                return(false);
        };
