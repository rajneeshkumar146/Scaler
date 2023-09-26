## Resource Hints
 Used ot  give the browser extra information that it can't infer from the document HTML

## There are three main types of resource hints:

**preload** – load content that's required for the intial render
   -usecase : getting an image, font ,script that is required for the intial render
    - example 
    ```html
        <link rel="preload" href="/public/home.js" as="script">
    ```

    <!-- Example: google search bar first and then google big banner -->

**prefetch** - load content that may be needed to render the next page

    - usecase : Prefetched resources might be needed when the user navigates to the next page, or after the user starts interacting with the page. So loading them before the user starts the navigation will make the page load faster for them.
     
    - example:

    ```html
      <link rel="prefetch" href="/public/app.08343a72.js" as="script">
    ```
    <!-- example: a webiste first page is bussiness objective and next page which is responsible to create bussiness. -->

**preconnect** - establish a server connection without loading a specific resource yet
    - example:

    ```html
    <link rel="preconnect" href="https://storage.googleapis.com">
    ```

<!-- Example: moneycontrol.com -->

Reference Article : https://www.debugbear.com/blog/resource-hints-rel-preload-prefetch-preconnect

