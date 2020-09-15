
         // Subscribe functions for compatibility 
         // with mkdocs-material's instant loading feature
         
         body = document.getElementsByTagName('body')[0];
         mkdocs_material_site_color_theme = body.getAttribute('data-md-color-scheme');
                    
         if (
            typeof app !== "undefined" && 
            typeof app.document$ !== "undefined"
            ) {
            app.document$.subscribe(function() {
                if ( document.querySelector("#print-site-page") !== null ) {
                    change_material_theme('default');generate_toc();
                } else {
                    // Make sure to change the color theme back!
                    if ( mkdocs_material_site_color_theme !== null ) {
                        change_material_theme(mkdocs_material_site_color_theme);   
                    }
                }
            })
         }
        