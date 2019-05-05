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

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
         document.addEventListener("pause", this.pause, false);
    document.addEventListener("resume", this.resume, false);
       // document.getElementById("add").addEventListener("vclick", function() {
          //  console.log("this is working");
            
        //};
        this.createDb();
        
       // this.addTest();
        
        
    },
    
    addTest:function(){
       // addnew();
       // UpdateDone();
        //DeleteTask();
        
       // DisplayList();
    },
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   pause:function(){
        //  location.replace("#first");
    console.log("in the pause ");
    },
        resume:function(){
         // location.replace("#first");
    console.log("in the resme  ");
    },


  
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
 
        
        
        
        
        
        
    },
    
    
    createDb:function(){
     
     try{
     var db= null;
    var name="T1";
    var version=1.0;
    var displayName="t1";
   
    db = window.openDatabase( 'mydb','1.0', 'test1', 2024);
    console.log(db);
                 alert('Sqlite Database created');
        console.log('sql created');
    
          try{
    
          
 db.transaction(function(tx) {
       tx.executeSql("CREATE TABLE IF NOT EXISTS task3 (id integer primary key, TaskTitle varchar(255),TaskType varchar(255),date varchar(255),time varchar(255),IfDone varchar(255),Location varchar(255),ImgLoc varchar(355) )");
        
        console.log("inline table");
    }, function(err){
        alert("An error occurred while initializing the app");
    });
            alert('Sqlite TABLE created');
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
  var t1;
  var imageU;

      function addnew() {
     console.log("this is working");

     //this gets the elements from the page
  var TaskTitle = document.getElementById("TaskTitle").value;
    var TaskType = document.getElementById("TaskType").value;
 var Date = document.getElementById("Date").value;
      var Time = document.getElementById("Time").value;
          var location;
          /*try{
            location = document.getElementById("locAdd").value;
          }
          catch(e){
     alert(e);
        console.log(e);
              location="na";
    } */
          //alert(t1);
          location=t1;
          //alert (location);
              var Picture = document.getElementById("Time").value;
     //var TaskTitle="a";
         // var TaskType="a";
         // var Date="1";
         // var Time="1";
          
          
          
          var urlImg;
          urlImg=imageU;
          alert(urlImg);
          
          
          
          
     
    //this checks for empty or null values  
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
             alert("location is null");
        return; 
          }
    else{ 
     
     try{
     
     
     var done ="no";
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     

   db.transaction(function(tx) {
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
 function UpdateDone(TaskTitle) {
        
 console.log(TaskTitle);
     
     try{
     
     
     var done ="yes";
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     

   db.transaction(function(tx) {
        tx.executeSql("update task3 set IfDone=? where TaskTitle=?", [done,TaskTitle], function(tx,res){
            alert("updated");    
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
 function UpdateNotDone(TaskTitle) {
        
 console.log(TaskTitle);
     
     try{
     
     
     var done ="no";
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     

   db.transaction(function(tx) {
        tx.executeSql("update task3 set IfDone=? where TaskTitle=?", [done,TaskTitle], function(tx,res){
            alert("updated");    
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














 function DeleteTask() {
     console.log("this is working");

     //this gets the elements from the page
  //var TaskTitle = document.getElementById("TaskTitle").value;
 //   var TaskType = document.getElementById("TaskType").value;
// var Date = document.getElementById("Date").value;
     // var Time = document.getElementById("Time").value;
     var IfDone="yes";
         
 
     
     try{
     
     
    
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     

   db.transaction(function(tx) {
        tx.executeSql("delete from task3  where IfDone=?", [IfDone], function(tx,res){
            alert("deleted ");    
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

 function DisplayList() {
     console.log("this is working");

     //this gets the elements from the page
  //var TaskTitle = document.getElementById("TaskTitle").value;
 //   var TaskType = document.getElementById("TaskType").value;
// var Date = document.getElementById("Date").value;
     // var Time = document.getElementById("Time").value;
     var TaskTitle="a";
         
 
     
     try{
     
     
    
     var db = openDatabase( 'mydb','1.0', 'test1', 2024);
     

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


 function GetGeo12() {
        
 
     
     try{
          
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

   var nav= navigator.geolocation.getCurrentPosition(onSuccess, onError);  
                //console.log(nav);
     
  
     }
    catch(e){
     alert(e);
        console.log(e);
    } 
         
         
    
};








function takephoto (){
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
                    navigator.camera.getPicture(ftw, wtf, opts);
                };
               function ftw(imgURI){
                   console.log("t3"); document.getElementById('msg').textContent = imgURI;
                    document.getElementById('photo').src = imgURI;
                   imageU=imgURI;
                   
                    
                };
              function  wtf(msg){
                   console.log("t2"); document.getElementById('msg').textContent = msg;
                };
            






















app.initialize();