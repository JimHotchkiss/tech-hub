This is a rebuild of the MSA application. The name will be changed to the Tech HUB App. 

This rebuild will leverage object oriented design, in order to make the code easier to service, troubleshoot and scale. 


# File structure - src/
* index.js File - this is the file that will kickoff our application
* Adapter Folder - the adapter folder will house objects that communicate with the data. 
* Components Folder - the components folder will house objects that render the data

# Order and details of the order files executed 
1.) We have an index.js - This is the file that will kick off our application
2.) In index.js, we instantiate a new instance of the App class
3.) The App class does one thing, and that is to, in its constructor(), instantiate an instance of landingPage
4.) in the LandingPage class, we instantiate an instance of our adapter: LandingPageAdapter
    a. The LandingPage class has a couple instance variables and a method
    b. The 'feature' varialbe is instantiated as an empty array
    c. The 'adapter' is variable that is created by calling the LandingPageAdapter class
    d. The 'fetchAndLoadLandingpageFeatures()' method, fetches the data
    e. Once the 'adapter', using the 'getLandingPageFeatures()' method has connected to the api, the collection of objects is than saved to the 'feature' variable 
    g. The feature objects are then rendered to the landing page, throught the 'render()' method
5.) Our LandingPageAdapter connects to the backend, in this case, our landingPageJson file

# Feature class 
1.) When the user selects a feature from the landing page, a new Feature is instantiated
2.) The Feature class has a number of instances variables that are created when a Feature is created.
    a. This is includes the id, title, icon url and description
3.) A FeatureAdapter is instantiated, when a Feature is created, and this FeatureAdapter is passed an argument of the feature.id
    a. The FeatureAdapter, with the feature id, makes a fetch request to the api of the particular feature to retrieve that feature's data
4.) An instance method, clearLandingPage(), is also created.    
    a. This clears the landing page's Html
5.) Once clearLandingPage() has been executed, the method renderFeature() 

// 'return' statement ends function execution, and specifies a value to be returned to the function caller

