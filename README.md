# YouTube App

App that authenticats with the Google API and let's you search for videos


To run:
> cd app
> live-server


Notes:
*  On start up will attempt an "immediate" authentication to see if you're already authenticated
*  If immediate auth doesn't fly, the Sign On button is displayed, which when clicked does a non-immediate authentication (prompt)
*  Once signed in, enter a search term in the left side bar to search for videos
*  Click a video in the list to play it.

More Notes:
*  Seeded with the Angular Material Starter project
*  Leverages the Google Javascript API for auth and you tube functionality
*  App is responsive, sidebar collapses on smaller screens
