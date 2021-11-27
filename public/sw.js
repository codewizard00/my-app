let cacheDate = "appV1";
this.addEventListener("intall",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js.map',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
                '/static/js/vendor~main.chunk.js.map'
            ])
        })
    )
})


this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((res)=>{
              if(res){
                  return res;
              }  
              let requestURL = event.request.clone();
              fetch(requestURL)
            })
        )
    }
    
})