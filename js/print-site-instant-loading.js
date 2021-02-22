
         // Subscribe functions for compatibility
         // with mkdocs-material's instant loading feature
                    
         if (
            typeof app !== "undefined" &&
            typeof app.document$ !== "undefined"
            ) {
            app.document$.subscribe(function() {
                if ( document.querySelector("#print-site-page") !== null ) {
                    generate_toc();
            }
            })
         }
        