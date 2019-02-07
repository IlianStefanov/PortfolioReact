import React from 'react';
import {animated, useSpring} from 'react-spring';


const HookedComponent = () => {
    const [props] = useSpring({
        opacity: 1,
        color: 'white',
        from: { opacity: 0 },
        delay: '2000'
    })
    return <animated.div style={props}>This text Faded in Using Hooks</animated.div>
}

export default HookedComponent;


function listallFiles() {
    var rootFolder = DriveApp.getFolders();
    
    Logger.log(rootFolder);
    
     var childFolders = parent.getFolders();
    
    while (rootFolder.hasNext()) {
      
      var childFolder = rootFolder.next();
      
      Logger.log("Folder Name: " + childFolder.getName());
      Logger.log("Folder URL:  " + childFolder.getUrl());
      
      var files = childFolder.getFiles();
      
      while (files.hasNext()) {
        
        // Print list of files inside the folder
        Logger.log(files.next().getName());
        
      }
      
      // Recursive call for any sub-folders
      listallFiles(childFolder);
      
    }
    
  }