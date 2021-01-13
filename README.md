This is a rebuild of the MSA application. The name will be changed to the Tech HUB App. 

This rebuild will leverage object oriented design, in order to make the code easier to service, troubleshoot and scale. 


# File structure - src/
* index.js File - this is the file that will kickoff our application
* Adapter Folder - the adapter folder will house objects that communicate with the data. 
* Components Folder - the components folder will house objects that present the data

1.) We have an index.js - This is the file that will kick off our application
2.) In index.js, we instantiate a new instance of the App class
3.) The App class does one thing, and that is to, in its constructor(), to instantiate an instance of landingPage
4.) in the LandingPage class, we instantiate an instance of our adapter: LandingPageAdapter
5.) Our LandingPageAdapter connects to the backend, in this case, our landingPageJson file

// 'return' statement ends function execution, and specifies a value to be returned to the function caller