/* feedreader.js */


/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('has url defined and url is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        /* a test that loops through each feed in the allFeeds object 
         * and ensures it has a name defined and that the name is not empty.
         */
        it('has name defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });


    });


    describe('The menu', function() {
        /* a test that ensures the menu element is hidden by default. analyzes 
         * the HTML and the CSS to determine how we're performing the hiding/showing 
         * of the menu element.
         */
        var $menuIcon = $('.menu-icon-link');
        var $hiddenClass = $('body').hasClass('menu-hidden');          

        it('hide by default', function() {
            //console.log('hide by default',$hiddenClass);
            expect($hiddenClass).toBeTruthy();
        });

         /* a test that ensures the menu changes visibility when the menu icon is 
         * clicked. This test should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('displays when menu item is clicked then hides when clicked again', function() {
            //console.log('before first click',$hiddenClass);
            $menuIcon.trigger('click');
            $hiddenClass = $('body').hasClass('menu-hidden');            
            //console.log('after first click',$hiddenClass);
            expect($hiddenClass).toBeFalsy();
            //console.log('before second click',$hiddenClass);
            $menuIcon.trigger('click');
            $hiddenClass = $('body').hasClass('menu-hidden');            
            //console.log('after second click',$hiddenClass);
            expect($hiddenClass).toBeTruthy();            
        });
        

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
        /* a test that ensures when the loadFeed function is called and 
         * completes its work there is at least a single .entry element 
         * within the .feed container. 
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
      
        it('has at least a single entry in the feed container', function() {
            //console.log($('.feed .entry'));
            expect($('.feed .entry')[0]).toBeDefined();
        });
    });



    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var html1 = '';
        var html2 = '';

        beforeEach(function(done){
            $('.feed').empty()
    
            loadFeed(0, function() {
                //console.log('inside call 0');
                html1 = $('.feed').find("h2").text();
                loadFeed(1, function() {
                    //console.log('inside call 1');
                    html2 = $('.feed').find("h2").text();
                    done();
                });
            });
                
        });
    
        it('changes the content', function(){
            //console.log('html1',html1);
            //console.log('html2',html2);            
            expect(html1).not.toEqual(html2)
        });
            

    });

}());
