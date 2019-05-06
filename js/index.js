/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
    },

    //this is the device ready handler 
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        //this is the pause event 
         document.addEventListener("pause", this.pause, false);
        //this is the resume event
    document.addEventListener("resume", this.resume, false);
      
        
        //this opens/creates the db and tables associated with it
        this.createDb();
        
       
        
        
    },
    
    addTest:function(){
       
    },
    
    
 
    
    
    
    
    //this is the pause function
   pause:function(){
        // location.replace("#first");
    console.log("in the pause ");
    },
    //this is the on resume function 
        resume:function(){
            //goes to the first page when the application is resumed 
          location.replace("#first");
    console.log("in the resme  ");
    },


  
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        

        console.log('Received Event: ' + id);
        
 
        
        
        
        
        
        
    },
    
    //this function creates the db
    createDb:function(){
     
     try{
         //these are the values for the db
     var db= null;
    var name="T1";
    var version=1.0;
    var displayName="t1";
   //opening the db
    db = window.openDatabase( 'mydb','1.0', 'test1', 2024);
    console.log(db);
                 //alert('Sqlite Database created');
        console.log('sql created');
    
          try{
    
          //a transaction of the db which creates the table to store the data in and also defines the columbs
 db.transaction(function(tx) {
       tx.executeSql("CREATE TABLE IF NOT EXISTS task3 (id integer primary key, TaskTitle varchar(255),TaskType varchar(255),date varchar(255),time varchar(255),IfDone varchar(255),Location varchar(255),ImgLoc varchar(355) )");
        
        console.log("inline table");
    }, function(err){
        alert("An error occurred while initializing the app");
    });
            //alert('Sqlite TABLE created');
         console.log('sql TABLE created');
          
   
    
     }
          
          
          
          
      
         catch(e){
     alert(e);
        console.log(e);
    }
        
         
         
         
         
    }catch(e){
     alert(e);
        console.log(e);
    }
    
    
    
    
    
    
},
    
  
            
         /* init: function(){
                    document.getElementById('btn').addEventListener('click', app.takephoto);
                },*/
               
            
            
   
    
    
    
   
};
//these are variables that hold the person location and also the image location
  var t1;
  var imageU;
//this is a function that adds a task to the db
      function addnew() {
     console.log("this is working");

     //this gets the elements from the page like the tasks title and date. 
  var TaskTitle = document.getElementById("TaskTitle").value;
    var TaskType = document.getElementById("TaskType").value;
 var Date = document.getElementById("Date").value;
      var Time = document.getElementById("Time").value;
          var location;
          
          location=t1;
          //alert (location);
          
              //var Picture = document.getElementById("Time").value;
   
          
          //this obtains the ima
          var urlImg;
          urlImg=imageU;
        //  alert(urlImg);
          
          
          
          
     
    //this checks for empty or null values or undef 
    if(TaskTitle == "" || TaskTitle == null)
    {
        alert("Please enter a title");
        return;
    }

    else if(TaskType == "" || TaskType == null)
    {
        alert("Please enter a Task Type");
        return;
    }
      else if(Date == "" || Date == null)
    {
        alert("Please enter a Date");
        return;
    }
       else if(Time == ""|| Time == null)
    {
        alert("Please enter a Time");
        return;
    }
          else if(location==""||location==null|| location==undefined){
             alert("please enter a Location");
        return; 
          }
    else{ 
     
     try{
     
     
     var done ="no";
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     
//this transaction  inserts into the table 
   db.transaction(function(tx) {
      
        /*tx.executeSql("SELECT TaskTitle,COUNT(*)FROM task3 GROUP BY TaskTitle HAVING COUNT(*) > 1 VALUES (?) ", [TaskTitle], function(tx,res){
            alert("cannot have a duplicate task");
            return;    
        });*/
       
       
       //insert sql statment
        tx.executeSql("INSERT INTO task3 (TaskTitle, TaskType,date,time,IfDone,Location,ImgLoc) VALUES (?,?,?,?,?,?,?)", [TaskTitle, TaskType,Date,Time,done,location,urlImg], function(tx,res){
            alert("Task added");    
        });
       
    }, function(err){
        alert(err);
       console.log(err);
    });
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    }
};
//this should be run when ever the user ticks the done checkbox 
//this updates undone tasks 
 function UpdateDone(TaskTitle) {
        
 console.log(TaskTitle);
     
     try{
     
     //changes the if done value from no to yes
     var done ="yes";
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     
//this tranasction updates the field on certain tasks from no to yes 
   db.transaction(function(tx) {
        tx.executeSql("update task3 set IfDone=? where TaskTitle=?", [done,TaskTitle], function(tx,res){
            alert("Task marked as done");    
            console.log("this functioned correctly");
        });
    }, function(err){
        alert(err);
       console.log(err);
    });
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    
};
//this does the opposite and unmarks already marked tasks 
 function UpdateNotDone(TaskTitle) {
        
 console.log(TaskTitle);
     
     try{
     
     //this the varible that is used to change a ifdone from yes to no
     var done ="no";
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     
//this is the statement that changes a specific tasks ifdone from a yes to a no
   db.transaction(function(tx) {
        tx.executeSql("update task3 set IfDone=? where TaskTitle=?", [done,TaskTitle], function(tx,res){
            alert("Task unmarked as done");    
            console.log("this functioned correctly");
        });
    }, function(err){
        alert(err);
       console.log(err);
    });
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    
};













//this function deletes all of the tasks that are done 
 function DeleteTask() {
     console.log("this is working");

    //the variable that is inserted in the sql query
     var IfDone="yes";
         
 
     
     try{
     
     
    //opens the db
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     
//this sql statment  deletes all of the tasks that are marked as being done 
   db.transaction(function(tx) {
        tx.executeSql("delete from task3  where IfDone=?", [IfDone], function(tx,res){
            alert("Deleted all done tasks ");    
            console.log("delete functioned correctly");
        });
    }, function(err){
        alert(err);
       console.log(err);
    });
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    
};
//this function is used to display all of the tasks on the view task screen 
 function DisplayList() {
     console.log("this is working");

    
     var TaskTitle="a";
         
 
     
     try{
     
     
    //opens the db 
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     
//this transaction is used to retreive all of the task values from the db
   db.transaction(function(tx) {
        tx.executeSql("select TaskTitle,date FROM task3", [], function(tx,res){
            var ROWS=res.rows;
            var len =ROWS.length;
            for (var i = 0; i < len; i++) {
                var cur_item = ROWS[i]; 
                console.log("the id is : " + cur_item.TaskTitle + " the data is : " + cur_item.date);
            }
            
            
            
            
            
            
            alert("working list ");    
            console.log("listed");
        });
    }, function(err){
        alert(err);
       console.log(err);
    });
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    
};

//this function is used to get the geo location of the person who is using the phone
 function GetGeo12() {
        
 
     
     try{
          //gets the longitude and the latitude 
            var onSuccess = function(position) {
        //alert('Latitude: '          + position.coords.latitude          + '\n' +'Longitude: '         + position.coords.longitude         + '\n');
          t1=" "+"latitude: "+ position.coords.latitude  + " " +"Longitude: "+ position.coords.longitude+ " ";
               console.log(t1);
                
                document.getElementById("loc").innerHTML="<p> "+"latitude: "+ position.coords.latitude  + " " +"Longitude: "+ position.coords.longitude+ " </p>";
                
                
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('message: ' + error.message + '\n');
    }
//this function is used to get the current geo location of the user 
   var nav= navigator.geolocation.getCurrentPosition(onSuccess, onError);  
                //console.log(nav);
     
  
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    
};







//this function is used to take the photo
function takephoto (){
    //this defines properties of the photo
                    let opts = {
                        quality: 80,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        mediaType: Camera.MediaType.PICTURE,
                        encodingType: Camera.EncodingType.JPEG,
                        cameraDirection: Camera.Direction.BACK,
                        targetWidth: 300,
                        targetHeight: 400
                    };
                    console.log("t1");
    //this function is used to take the photo
                    navigator.camera.getPicture(takep1, takep2, opts);
                };
               function takep1(imgURI){
                   console.log("t3"); document.getElementById('msg').textContent = imgURI;
                    document.getElementById('photo').src = imgURI;
                   imageU=imgURI;
                   
                    
                };
              function  takep2(msg){
                   console.log("t2"); document.getElementById('msg').textContent = msg;
                };
            

//this function deletes all of the tasks in the table
function DeleteAll(){
                      try{
     
     
    
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     
//this is the sql query that is used to delete all of the tasks in the table 
   db.transaction(function(tx) {
        tx.executeSql("delete FROM task3", [], function(tx,res){
          alert("all tasks deleted");
         
            
            
            
            
            
            
           
        });
    }, function(err){
        alert(err);
       console.log(err);
    });
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
                };
              



















app.initialize();