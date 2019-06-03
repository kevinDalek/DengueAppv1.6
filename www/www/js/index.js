/**************Databasebase Part*************/
document.addEventListener("deviceready",onDeviceReady,false);
var db;
function onDeviceReady(){
  db=window.openDatabase("dengueDB","1.0","Dengue App","2*1024*1024");
  db.transaction(createDB,errorCB,successCB);
  db.transaction(insertDB,errorCB,successCB);
  db.transaction(createEmergencyDB,errorCB,successCB);
  db.transaction(insertEmergencyDB,errorCB,successCB);
  db.transaction(successQueryBD,errorCB,successCB);
  db.transaction(queryDBTable,errorCB,successCB);
  db.transaction(successNews1,errorCB,successCB);
  db.transaction(successNews2,errorCB,successCB);
  db.transaction(successNews3,errorCB,successCB);
  db.transaction(successNews4,errorCB,successCB);
  db.transaction(successNews5,errorCB,successCB);
  db.transaction(successNews6,errorCB,successCB);
  db.transaction(successNews7,errorCB,successCB);
}

//creating table
function createDB(tx){
  tx.executeSql('DROP TABLE IF EXISTS tbl_dengue');
  tx.executeSql('CREATE TABLE IF NOT EXISTS tbl_dengue(id_main INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, s_desc TEXT,l_desc TEXT,date TEXT, country TEXT, img_path TEXT)');

}
function errorCB(err){
  console.log("SQL Error:"+err.code);
}
function successCB(){
  console.log("Database & Table successfully created");
}
function createEmergencyDB(tx){
  tx.executeSql('DROP TABLE IF EXISTS tbl_emergency');
  tx.executeSql('CREATE TABLE IF NOT EXISTS tbl_emergency(inst_name TEXT, contact_number TEXT)');
}
//insert in database
function insertEmergencyDB(tx){
  var mySqlStr = 'INSERT INTO tbl_emergency(inst_name,contact_number)'
                 +'VALUES'
                 +'("Bel Air Area Health Centre","+(230) 419 2812"),'
                 +'("Trou Deau Douce Community Health Centre","+(230) 419 2762"),'
                 +'("Ecroignard Community Health Centre","+(230) 419 3298"),'
                 +'("Bramsthan Area Health Centre","+(230) 413 3291"),'
                 +'("Mare La Chaux Community Health Centre","+(230) 415 1045"),'
                 +'("Belle Mare Community Health Centre","+(230) 415 1047"),'
                 +'("Quatre Cocos Community Health Centre","+(230) 415 1046"),'
                 +'("Central Flacq Area Health Centre","+(230) 413 0828"),'
                 +'("Flacq Hospital","+(230) 413-2532"),'
                 +'("Poste de Flacq Community Health Centre","+(230) 413 3297"),'
                 +'("Clemencia  Community Health Centre","+(230) 419 4890"),'
                 +'("Olivia Community Health Centre","+(230) 419 4489"),'
                 +'("Sebastopol Lesur Community Health Centre","+(230) 437 5189"),'
                 +'("Pellegrin - Ronald Palmer Community Health Centre","+(230) 437 5760"),'
                 +'("Montagne Blanche Area Health Centre","+(230) 437 5153"),'
                 +'("Camp de Masque Pave Community Health Centre","+(230) 417 5533"),'
                 +'("Medine Camp de Masque Community Health Centre","+(230) 416 5937"),'
                 +'("Providence Community Health Centre","+(230) 435 7085"),'
                 +'("Melrose Community Health Centre","+(230) 437 4645"),'
                 +'("LEsperance - M d Senneville Community Health Centre","+(230) 435 6166"),'
                 +'("Dagotiere Community Health Centre","+(230) 433 0374"),'
                 +'("LAvenir Community Health Centre","+(230) 000 0000"),'
                 +'("St Pierre Area Health Centre - Dr Quenum","+(230) 433 4270"),'
                 +'("Moka Community Health Centre","+(230) 433 7175"),'
                 +'("Beau Bassin Area Health Centre - Lady Twining","+(230) 454 1743"),'
                 +'("Beau Bassin - Odette Leal Community Health Centre","+(230) 464 7128"),'
                 +'("Rose Hill Area Health Centre","+(230) 454 1937"),'
                 +'("Ollier - S S Ramgoolam Community Health Centre","+(230) 425 7566"),'
                 +'("Beau Songes Community Health Centre","+(230) 452 0085"),'
                 +'("Quatre Bornes Area Health Centre","+(230) 454 3750"),'
                 +'("Bassin Community Health Centre","+(230) 427 3748"),'
                 +'("Victoria Hospital","+(230) 425-3031"),'
                 +'("Palma - Shri R Jugnauth Community Health Centre","+(230) 424 8250"),'
                 +'("Highlands Community Health Centre","+(230) 697 1369"),'
                 +'("Curepipe Area Health Centre","+(230) 696 3325"),'
                 +'("Phoenix Community Health Centre","+(230) 696 4286"),'
                 +'("Castel Area Health Centre","+(230) 696 2087"),'
                 +'("La Caverne Area Health Centre","+(230) 696 4205"),'
                 +'("Mahebourg Hospital","+(230) 631 9556"),'
                 +'("Plaine Magnien Community Health Centre","+(230) 637 3059"),'
                 +'("Trois Boutiques Community Health Centre","+(230) 637 3206"),'
                 +'("Mare DAlbert Community Health Centre","+(230)  627 0682"),'
                 +'("New Grove Community Health Centre","+(230)  627 7117"),'
                 +'("Mare Tabac Community Health Centre","+(230) 627 7646"),'
                 +'("Tyack Area Health Centre","+(230) 626 2556"),'
                 +'("Chemin Grenier Area Health Centre","+(230) 622 6544"),'
                 +'("Baie du Cap Community Health Centre","+(230) 622 5449"),'
                 +'("Chamarel Community Health Centre","+(230) 483 5397"),'
                 +'("La Gaulette Community Health Centre","+(230) 451 5283"),'
                 +'("Dr Y. Cantin Community hospital","+(230) 483 6683"),'
                 +'("Flic en Flac Community Health Centre","+(230) 453 8252"),'
                 +'("Albion Community Health Centre","+(230) 238 4400"),'
                 +'("Petite Riviere Community Health Centre","+(230) 233 6852"),'
                 +'("Pailles Community Health Centre","+(230) 286 7686"),'
                 +'("Plaine Lauzun Community Health Centre","+(230) 212 9738"),'
                 +'("Volcy Pougnet Community Health Centre","+(230) 212 2761"),'
                 +'("Vallee Des Pretres Community Health Centre","+(230) 241 4533"),'
                 +'("Tranquebar Community Health Centre","+(230) 212 9735"),'
                 +'("Le Hochet - Mrs K Patel Community Health Centre","+(230) 248 8159"),'
                 +'("Baie du Tombeau Community Health Centre","+(230) 247 1148"),'
                 +'("Calbasses - Human Service Trust Community Health Centre","+(230) 243 3561"),'
                 +'("Arsenal Community Health Centre","+(230) 249 3643"),'
                 +'("Pamplemousses Community Health Centre","+(230) 243 3547"),'
                 +'("Terre Rouge Community Health Centre","+(230) 248 8161"),'
                 +'("Congomah Community Health Centre","+(230) 243 3038"),'
                 +'("DEpinay Community Health Centre","+(230) 243 3601"),'
                 +'("Long Mountain Hospital","+(230) 245 2532"),'
                 +'("Ville Bague Community Health Centre","+(230) 418 4491"),'
                 +'("Sir Seewoosagur Ramgoolam National Hospital (SSRNH)","+(230) 246-4669"),'
                 +'("Triolet Area Health Centre","+(230) 261 6380"),'
                 +'("Pointe aux Piments Community Health Centre","+(230) 261 5689"),'
                 +'("Plaines des Papayes Community Health Centre","+(230) 266 9869"),'
                 +'("Fond du Sac - Shri Ram Community Health Centre","+(230) 266 6016"),'
                 +'("Vale Community Health Centre","+(230) 263 5121"),'
                 +'("Grand Bay  Community Health Centre","+(230) 263 8041"),'
                 +'("Petit Raffray Community Health Centre","+(230) 283 8006"),'
                 +'("Cap Malheureux - P Selwyn Community Health Centre","+(230) 262 6336"),'
                 +'("Poudre Dor Hospital","+(230) 282 1181"),'
                 +'("Poudre DOr Community Health Centre","+(230) 283 9253"),'
                 +'("LEsperance Trebuchet - K Ram Community Health Centre","+(230) 264 1704"),'
                 +'("Piton Community Health Centre","+(230) 264 1732"),'
                 +'("Cottage Community Health Centre","+(230) 266 1261"),'
                 +'("Goodlands Area Health Centre","+(230) 283 9009"),'
                 +'("Vacoas-ENT hospital","+(230) 686 2061"),'
                 +'("Floreal Community Health Centre","+(230) 686 3539");';
                  tx.executeSql(mySqlStr);



}

function insertDB(tx){
   var sqlStr = 'INSERT INTO tbl_dengue(title, s_desc, l_desc, date, country, img_path)'
               +'VALUES'
               +'("Dengue - new cases 2019",'
               +'"Five cases of dengue have been reported in recent days in Mauritius. The patients were hospitalized and quarantined...",'
               +'"Five cases of dengue have been reported in recent days in Mauritius. The patients were hospitalized and quarantined. According to the Ministry of Health, measures have been taken for screening in several regions. In addition, fumigation and awareness campaigns are underway, according to the Ministrys Director of Health Services.<br>They were placed in isolation. Four Indian workers suffer from dengue fever. A fifth case was also detected. This is a Mauritian. The patients were admitted to Dr. AG Jeetoo Hospital for several days.<br> Indian nationals working on the Metro Express sites were housed in dormitories in Richelieu and other surrounding areas. The Ministry of Health is monitoring their health status closely.<br> Meanwhile, for two days, the health service conducts a fogging exercise in the dormitories. Medical tests are also expected with all workers on the Metro Express yards.",'
               +'"03/03/2019",'
               +'"Mauritius",'
               +'"img/n1.jpg"),'
               +'("Mauritius: Dengue fever has gained ground throughout the weekend, 94 cases identified since late March",'
               +'"94 cases of dengue fever have been identified from Monday March 30 to Monday 30 April and essentially in the Port Louis region...",'
               +'"94 cases of dengue fever have been identified from Monday March 30 to Monday 30 April, and essentially in the Port Louis region (Cité La Cure, Pailles Vallée Pitot, Valley des Prêtres, City Martial, Saint. -Cross and Roche-Bois). The regions of Pamplemousses, Lallmatie, Souillac, Trou-aux-Biches and Mahebourg are equally affected. 30 new cases of the infectious disease has been counted this weekend. People infected with the dengue virus have been admitted to a specialized unit within different hospitals of the island for an adequate therapeutic management. 10 patients were also treated in hospital Monday. Health authorities continue to take all necessary measures to manage health risks, including the use of insecticides in zones at risk. Thousands of houses in the regions concerned were also sensitized to clean their yard in order to prevent the proliferation of the Ades albopictus mosquito, vector of disease as well as the destruction of larval habitats.",'
               +'"04/28/2015",'
               +'"Mauritius",'
               +'"img/n2.jpg"),'
               +'("Mauritius: 64 cases of dengue fever declared, the authorities in health monitoring mode",'
               +'"64 cases of dengue fever have been reported from 30 March to 24 April, and essentially in the Port Louis region (Cité La Cure...",'
               +'"64 cases of dengue fever have been reported from 30 March to 24 April, and essentially in the Port Louis region (Cité La Cure, Pailles Vallée Pitot, Valley des Prêtres, City Martial, Saint Croix and Roche-Bois). The first patient had been declared in the area of the Champ de Mars at the heart of the Mauritian capital. The regions of Pamplemousses, Llamatie, Souillac, Trou-aux-Biches and Mahebourg are equally affected. People infected with the dengue virus have been admitted to a specialized unit within various hospitals of the island for proper therapeutic management of the infectious disease. Nine patients were also treated in hospital on Friday afternoon. Health authorities continue to take all necessary measures to manage health risks, including with the use of insecticides in zones at risk. Thousands of houses in the regions concerned were also sensitized to clean their yard in order to prevent the proliferation of the Ades albopictus mosquito, vector of disease as well as the destruction of larval habitats.",'
               +'"04/27/2015",'
               +'"Mauritius",'
               +'"img/n3.jpg"),'
               +'("Mauritius: 54 cases of dengue fever reported, health officials raise awareness on the multiplication of larval habitats",'
               +'"54 cases of dengue have been identified since April 2 to the end of last week, and principally in the Port Louis region. Cases have also been identified on the side of Pailles Triolet, Camp Fouquereaux and...",'
               +'"54 cases of dengue have been identified since April 2 to the end of last week, and principally in the Port Louis region. Cases have also been identified on the side of Pailles Triolet, Camp Fouquereaux and Mahebourg. People affected by the dengue virus have been admitted to a specialized unit at the Jeetoo hospital of the Mauritian capital for taking appropriate therapeutic management of infectious disease. 18 patients are still treated in hospitals, as reported by the Ministry of Health. The health authorities have already taken all the necessary measures for managing health risks, including with the use of insecticides in the areas at risk. 4,600 families in the affected regions have also been sensitized to clean their yard to prevent the proliferation of the Ades albopictus mosquito vector of disease and the destruction of larval habitats.",'
               +'"04/21/2015",'
               +'"Mauritius",'
               +'"img/n4.jpg"),'
               +'("Mauritius: 36 cases of dengue fever within two weeks",'
               +'"36 cases of dengue fever have been identified in the past two weeks essentially in Port-Louis in the sector of Champ de Mars...",'
               +'"36 cases of dengue fever have been identified in the past two weeks essentially in Port-Louis in the sector of Champ de Mars. Another case was also identified this weekend on the side of Mahebourg, in southern Mauritius. People affected by the dengue virus have been admitted to a specialized unit of the Jeetoo hospital in the Mauritian capital for an adequate therapeutic care of the infectious disease. The health authorities have already taken all the necessary measures to manage health risks, particularly with the use of insecticides in areas at risk. As a reminder, last year nearly at the same time about forty cases of dengue were recorded with the great majority of cases listed in the Triolet region in the northeast of Mauritius.",'
               +'"04/13/2015",'
               +'"Mauritius",'
               +'"img/n5.jpg"),'
               +'("Mauritius: Several cases of dengue fever identified in Port Louis",'
               +'"Ten cases of dengue fever have been identified since the beginning of the week in the Port Louis region at Cité Martial...",'
               +'"Ten cases of dengue fever have been identified since the beginning of the week in the Port Louis region at Cité Martial and in the sector of Champ de Mars. At least five people have contracted dengue fever locally, which is different from other surveys during the previous years. The health authorities have already been taken including all the necessary measures to manage health risks, including with the use of insecticides in areas at risk of the Mauritian capital. As a reminder, last year at the same time forty cases of dengue fever were recorded with the large majority of cases listed in the Triolet region in the North East of Mauritius.",'
               +'"04/02/2015",'
               +'"Mauritius",'
               +'"img/n3.jpg"),'
               +'("Vaccine against dengue fever commercialised in 2015",'
               +'"The French pharmaceutical group Sanofi is the first laboratory to develop a vaccine against dengue...",'
               +'"The French pharmaceutical group Sanofi is the first laboratory to develop a vaccine against dengue. The research project has cost 1.3 billion euros. Vaccine should be put on sale on the horizon of 2015. Thus, the latest tests showed positive outcomes in terms of treatment. An efficiency rate of 60.8% was recorded among young people aged between 9-16 years and the percentage of protection against the severe form of the virus is around 95.5. The vaccine also decreases 80.3% the risk of hospitalisation. As a reminder, the dengue virus annually affects nearly 50 million people across the world.",'
               +'"11/05/2014",'
               +'"Mauritius",'
               +'"img/n2.jpg");';
               tx.executeSql(sqlStr);
}
/***Populate Table****/
   function PopulateTable(tx, results) {
   
            var tblText='<table id="t01"><tr><th>Health Institution:</th> <th>Telephone no.</th></tr>';
            var len = results.rows.length;
            for (var i = 0; i < len; i++) {
               
                tblText +='<tr><td>' + results.rows.item(i).inst_name +'</td><td>'
                        + results.rows.item(i).contact_number +'</td></tr>';
            }
            tblText +="</table>";
            $("#tblDiv").html(tblText);
        }
         function queryDBTable(tx) {
            tx.executeSql('SELECT * FROM tbl_emergency ORDER BY inst_name', [], PopulateTable, errorCB);
        }
/*********END OF POPULATE*************/
/******Search Institutions*******/
   function searchQueryDB(tx) {
            tx.executeSql("SELECT * FROM tbl_emergency where inst_name like ('%"+ $('#txtSearch').val() + "%')",
                    [], PopulateTable, errorCB);
        }
  function goSearch() {
            var db = window.openDatabase("dengueDB","1.0","Dengue App","2*1024*1024");
            db.transaction(searchQueryDB, errorCB);
        }
$('#txtSearch').on( "change", function(event) {
  goSearch();
});
/***END OF Search Institutions****/




    function renderListCB(tx,results){
            var htmlString = '';
            var len = results.rows.length;
            for (var i=0;i<len;i++){

              //htmlString+='<li>'+results.rows.item(i).title+'<br>'+results.rows.item(i).author+'</li>';

              htmlString+=' <li style="margin-left: -90px;">'
                           +'<a href="#detailNewsPage'+results.rows.item(i).id_main+'">'
                           +'<div class="newsheader">'+results.rows.item(i).title+'</div>'
                           +'<img class="newsImg" src="'+results.rows.item(i).img_path+'" align="left">'
                           +'<div style="white-space:normal;" class="newsD">| '+results.rows.item(i).date+' | '+results.rows.item(i).country+'</div>'
                           +'<p style="white-space:normal;" class="newP">'+results.rows.item(i).s_desc+'</p></a></li> ';
           
            }
            $('#ListNews').html(htmlString);
            $('#ListNews').listview('refresh');

          }

           function successQueryBD(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue',[],renderListCB,errorCB);
          }

/**************END Databasebase Part*************/

/**********************Display Data for news1***************************************/
function displayFull(tx,results){
            var htmlString1 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString1 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere').html(htmlString1);

          }
  function successNews1(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=1',[],displayFull,errorCB);
                             }
/*********************END OF Display Data for news1*********************************/
/**********************Display Data for news2***************************************/
function displayFull2(tx,results){
            var htmlString2 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString2 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere2').html(htmlString2);

          }
  function successNews2(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=2',[],displayFull2,errorCB);
                             }
/*********************END OF Display Data for news2*********************************/
/**********************Display Data for news3***************************************/
function displayFull3(tx,results){
            var htmlString3 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString3 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere3').html(htmlString3);

          }
  function successNews3(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=3',[],displayFull3,errorCB);
                             }
/*********************END OF Display Data for news3*********************************/
/**********************Display Data for news3***************************************/
function displayFull4(tx,results){
            var htmlString4 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString4 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere4').html(htmlString4);

          }
  function successNews4(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=4',[],displayFull4,errorCB);
                             }
/*********************END OF Display Data for news4*********************************/
/**********************Display Data for news5***************************************/
function displayFull5(tx,results){
            var htmlString5 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString5 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere5').html(htmlString5);

          }
  function successNews5(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=5',[],displayFull5,errorCB);
                             }
/*********************END OF Display Data for news5*********************************/
/**********************Display Data for news6***************************************/
function displayFull6(tx,results){
            var htmlString6 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString6 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere6').html(htmlString6);

          }
  function successNews6(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=6',[],displayFull6,errorCB);
                             }
/*********************END OF Display Data for news5*********************************/
/**********************Display Data for news7***************************************/
function displayFull7(tx,results){
            var htmlString7 = '';
               var len = results.rows.length;
            for (var i=0;i<len;i++){

           
             htmlString7 = '<div class="fullHeader">'+results.rows.item(i).title+'</div>'
                          +'<img class="imgFullNews" src="'+results.rows.item(i).img_path+'" alt="imgtemp1" align="left">'
                          +'<div class="fullContent">'+results.rows.item(i).l_desc+'</div>';
           
           }
         
           $('#displayHere7').html(htmlString7);

          }
  function successNews7(tx){
           //alert("Data successfully Inserted");
           tx.executeSql('SELECT * FROM tbl_dengue WHERE id_main=7',[],displayFull7,errorCB);
                             }
/*********************END OF Display Data for news7*********************************/

$( document ).on( "pagecreate", function() {
      $( "body > [data-role='panel']" ).panel();
      $( "body > [data-role='panel'] [data-role='listview']" ).listview();
                                           });

$( document ).one( "pageshow", function() {
      $( "body > [data-role='header']" ).toolbar();
      $( "body > [data-role='header'] [data-role='navbar']" ).navbar();
                                       });


$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'The main type of dengue mosquito is _____________?',
      'options': [
        'Tripteroides',
        'Mansonia',
        'Aedes aegypti',
        'Haemagogus',

      ],
      'correctIndex': 2,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Sorry your answer is wrong, the correct answer is: Aedes aegypti'
    },
    {
      'q': 'How is Dengue Fever spread?',
      'options': [
        'By Human to Human Contact',
        'By Mosquito Bites',
        'By Unhygienic Habits',
        'By Eating Unhealthy',

      ],
      'correctIndex': 1,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Sorry your answer is wrong, the correct answer is: Mosquito Bites'
    },
      {
      'q': 'How can you prevent the spread of Dengue Fever?',
      'options': [
        'Clearing Stagnant Water',
        'Wearing Face-Masks',
        'Do Not Have Any Physical Contact From Other People',
        'Covering Your Mouth When You Cough Or Sneeze'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: Clearing Stagnant Water'
    },
      {
      'q': 'Which of the following is a symptom of Dengue Fever?',
      'options': [
        'Coughing Up Blood',
        'Hallucinations',
        'High Fever',
        'Increased Stress'
      ],
      'correctIndex': 2,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: High Fever'
    },
      {
      'q': 'Which of the following is NOT a symptom of Dengue Fever?',
      'options': [
        'Loss of Appetite',
        'Sever Headache',
        'Severe Muscle and Joint Pains',
        'Loss of Hearing'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: Loss of Hearing'
    },
      {
      'q': 'Which of the following is a cure for Dengue Fever?',
      'options': [
        'No Cure',
        'Aspirin',
        'Flu-Jabs',
        'Other Medicines such as Panadol'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Too bad, the correct answer is: No Cure'
    }
    ,
      {
      'q': 'How many days the entire aquatic cycle (from egg to adult) can occur?',
      'options': [
        '7-8',
        '14-20',
        '20-25',
        '30-35'
      ],
      'correctIndex': 0,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: 7-8 days'
    }
     ,
      {
      'q': 'In around how many Countries is Dengue fever endemic?',
      'options': [
        '50',
        '70',
        '100',
        '150'
      ],
      'correctIndex': 2,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: 100 Countries'
    }  ,
      {
      'q': 'To protect yourself, use _________________',
      'options': [
        'Insect repellent',
        'Mosquito nets',
        'Mosquito spray',
        'All of them'
      ],
      'correctIndex': 3,
      'correctResponse': 'Well Done!, This is the Correct answer',
      'incorrectResponse': 'Sorry your answer is Wrong, the correct answer is: All of them'
    }
  ]
});


/*******************END OF QUIZZ PART*****************************/
/*******************Slideshow Part*****************************/
var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
 showSlides();
   
/*******************END OF Slideshow Part*****************************/

/*******************Slideshow1 Part*****************************/
var slideIndex1 = 0;


function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1= 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}
 showSlides1();
   
/*******************END OF Slideshow Part*****************************/
 /*******************Slideshow1 Part*****************************/
var slideIndex2 = 0;


function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2= 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 5000); // Change image every 2 seconds
}
 showSlides2();
   
/*******************END OF Slideshow Part*****************************/
/*************AI************************/
 /****API PART**************/
var accessToken = "092f1bbb4718446aa379920703e8b766",
      baseUrl = "https://api.api.ai/v1/",
      $speechInput,
      $recBtn,
      recognition,
      messageRecording = "Recording...",
      messageCouldntHear = "I couldn't hear you, could you say that again?",
      messageInternalError = "Oh no, there has been an internal server error",
      messageSorry = "I'm sorry, I don't have the answer to that yet.";

$(document).ready(function() {

  $speechInput = $("#speech");
  $recBtn = $("#rec");
  
  $speechInput.keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      send();
    }
  });

  $recBtn.on("click", function(event) {
    switchRecognition();
  });
  
  $(".debug__btn").on("click", function() {
    $(this).next().toggleClass("is-active");
    return false;
  });  
});

function switchRecognition() {
  if (recognition) {
    stopRecognition();
  } else {
    startRecognition();
  }
}

function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onstart = function(event) {
    respond(messageRecording);
    updateRec();
  };
  recognition.onresult = function(event) {
    recognition.onend = null;

    var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
  };
  recognition.onend = function() {
    respond(messageCouldntHear);
    stopRecognition();
  };
  recognition.lang = "en-US";
  recognition.start();
}

function stopRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
  updateRec();
}

function setInput(text) {
  $speechInput.val(text);
  send();
}

function updateRec() {
  $recBtn.text(recognition ? "Stop" : "Speak");
}
   function send() {
      var text = $speechInput.val();
      $.ajax({
        type: "POST",
        url: baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({query: text, lang: "en", sessionId: "yaydevdiner"}),
        success: function(data) {
          prepareResponse(data);
        },
        error: function() {
          respond(messageInternalError);
        }
      });
    }
function prepareResponse(val) {
  
  var spokenResponse = val.result.speech;
  // actionResponse = val.result.action;
  // respond()
  respond(spokenResponse);
  
  //var debugJSON = JSON.stringify(val, undefined, 2);
  //debugRespond(debugJSON); // Print JSON to Debug window
}
//function debugRespond(val) {
  //$("#response").text(val);
//}
function respond(val) {
  if (val == "") {
    val = messageSorry;
  }
  if (val !== messageRecording) {
   
    TTS.speak(val);
  }
  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
}

$('.tlt').textillate({ 
    in: { effect: 'rollIn' }, 
    out:{ effect: 'bounce' },
    loop: true

  });

setInterval(again,1000);

function again(){
  $('#flymos').animate({ "left": "280px" }, 15000)
              .animate({ "left": "0px" }, 15000);
}



 /*********MAP PART*********/
if(navigator.geolocation==undefined){

  alert("GeoLocation undefined");

    }else{
      
        navigator.geolocation.getCurrentPosition(userLocated,locationError);

//get user location in lat and long 
function userLocated(position){
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
        
        //token for mapbox API
        mapboxgl.accessToken = 'pk.eyJ1IjoidmFzaGlsMTIiLCJhIjoiY2p3Z3F2ejc5MG9tMDN6cGhxbmF5dGYzcCJ9.FB_mMTv63KcMgRm6zwU7xA';

        //initialise map
        mymap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 13

                    });
        //set marker on user location
                mymap.addControl(new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true

},
trackUserLocation: true
}));

      //geojson for hospitals and healthcare centre stored in var  hospital
      var hospitals = {
        "type": "FeatureCollection",
        "generator": "overpass-ide",
        "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
        "timestamp": "2019-05-10T07:45:02Z",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "@id": "relation/8125062",
              "amenity": "hospital",
              "name": "Long Mountain Hospital",
              
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.57147,
               -20.15149
              ]     
            },
            "id": "relation/8125062"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "way/223556390",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "Souillac Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.52393,
               -20.52155
              ]     
            },
            "id": "way/223556390"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "way/224268361",
              "amenity": "hospital",
              "name": "Jawaharnal Nehru Hospital"
              
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.59308,
               -20.40511
              ]     
            },
            "id": "way/224268361"
          },
                  
          {
            "type": "Feature",
            "properties": {
              "@id": "node/372014045",
              "name": "Dr Abdool Gaffoor Jeetoo Hospital",
              "addr:street": "Volcy Pougnet Street Port-Louis",
              "amenity": "hospital",
              "source": "Tel :2128958"
            },
            "geometry": {
               "type": "Point",
              "coordinates": [
               57.50224,
               -20.16904
              ]                
            },
            "id": "node/372014045"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "way/413639896",
              "name": "Poudre d'Or Hospital",
              "addr:city": "Poudre D'Or",
              "amenity": "hospital"
              
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.68510,
               -20.05911
              ]   
            },
            "id": "way/413639896"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/3400021565",
              "name": "Pointe aux sables Medical Dispensary",
              "addr:city": "Pointe aux Sables",
              "amenity": "hospital"
              
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.44630,
               -20.17276
              ]   
            },
            "id": "node/3400021565"
          },
         
          {
            "type": "Feature",
            "properties": {
              "@id": "way/445169724",
              "addr:city": "Montage Blanche",
              "addr:street": "B54-Petit Paquet Road",
              "amenity": "hospital",
              "name": "Health Center Montagne Blanche",
              "phone": "437 5153"
            },
            "geometry": {
             "type": "Point",
              "coordinates": [
              57.66172,
              -20.28374
              ]   
           },
            "id": "way/445169724"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "way/472059494",
              "amenity": "hospital",
              "name": "Dr. Agalwal's Eye hospital"
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    57.4917886,
                    -20.2488298
                  ],
                  [
                    57.4916062,
                    -20.2490361
                  ],
                  [
                    57.4920783,
                    -20.2494186
                  ],
                  [
                    57.4922553,
                    -20.249167
                  ],
                  [
                    57.4917886,
                    -20.2488298
                  ]
                ]
              ]
            },
            "id": "way/472059494"
          },
          
          {
            "type": "Feature",
            "properties": {
              "@id": "way/647952709",
              "amenity": "hospital",
              "designation": "Public Hospital",
              "emergency": "yes",
              "name": "Sir Seewoosagur Ramgoolam National Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.55944,
               -20.09662
              ]   
            },
            "id": "way/647952709"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "way/677855079",
              "amenity": "hospital",
              "building:levels": "1",
              "healthcare": "hospital",
              "healthcare:speciality": "general",
              "name": "Belle Mare Community Health Centre",
              "opening_hours": "Mon- Fri 8hr-16hr Sat 8hr-12hr",
              "parking": "surface"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
               57.77509,
               -20.19729
              ]   
            },
            "id": "way/677855079"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/889891655",
              "amenity": "hospital",
              "name": "Victoria Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.48454,
                -20.28107
              ]
            },
            "id": "node/889891655"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1823071980",
              "amenity": "hospital",
              "name": "Dr. Yves Catin Community Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.3722498,
                -20.3616035
              ]
            },
            "id": "node/1823071980"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1891142592",
              "amenity": "hospital",
              "name": "Moka eye hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.50372,
                -20.2220664
              ]
            },
            "id": "node/1891142592"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2153376271",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "Clinique du Nord"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.5598529,
                -20.0085091
              ]
            },
            "id": "node/2153376271"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2162697266",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "Clinique du Nord"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.4969314,
                -20.1306045
              ]
            },
            "id": "node/2162697266"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2278541192",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "Medisave Clinic"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.4767085,
                -20.2685106
              ]
            },
            "id": "node/2278541192"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2656293192",
              "amenity": "hospital",
              "name": "L'Escalier Medi Clinic"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.6175984,
                -20.4747703
              ]
            },
            "id": "node/2656293192"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2998127795",
              "addr:city": "Centre de Flacq",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "Flacq Hospital (Casualty)"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.718423,
                -20.1930807
              ]
            },
            "id": "node/2998127795"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2998127796",
              "addr:city": "Centre de Flacq",
              "amenity": "hospital",
              "name": "Flacq Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.718932,
                -20.1918952
              ]
            },
            "id": "node/2998127796"
          },
        
          {
            "type": "Feature",
            "properties": {
              "@id": "node/3754148453",
              "amenity": "hospital",
              "name": "The Vale Area Health Centre"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.5976273,
                -20.0288247
              ]
            },
            "id": "node/3754148453"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/3754488545",
              "addr:city": "Triolet",
              "amenity": "hospital",
              "name": "Triolet Medi Clinic"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.5554514,
                -20.0603374
              ]
            },
            "id": "node/3754488545"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4325023393",
              "amenity": "hospital",
              "name": "ENT hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.4964137,
                -20.2937562
              ]
            },
            "id": "node/4325023393"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4353463758",
              "amenity": "hospital",
              "name": "Health Centre"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.5682066,
                -20.0692988
              ]
            },
            "id": "node/4353463758"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4612335549",
              "amenity": "hospital",
              "name": "Mahebourg Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.7031815,
                -20.4112976
              ]
            },
            "id": "node/4612335549"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4621711885",
              "amenity": "hospital",
              "name": "Primary Health Care"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.6844591,
                -20.1483065
              ]
            },
            "id": "node/4621711885"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4622176493",
              "amenity": "hospital",
              "name": "medi clinic"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.6619076,
                -20.1781367
              ]
            },
            "id": "node/4622176493"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4625704622",
              "amenity": "hospital",
              "name": "Chemin Grenier Dispensary"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                57.4709686,
                -20.4925313
              ]
            },
            "id": "node/4625704622"
          }
        ]
      }

//geojson for infected areas
 areas = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.54544258117675,
              -20.0331931517861
            ],
            [
              57.54123687744141,
              -20.041055105901734
            ],
            [
              57.54449844360351,
              -20.043514405624283
            ],
            [
              57.555227279663086,
              -20.04569145848909
            ],
            [
              57.55496978759765,
              -20.039644014904567
            ],
            [
              57.54544258117675,
              -20.0331931517861
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.54733085632324,
              -20.06560605926759
            ],
            [
              57.54733085632324,
              -20.06560605926759
            ],
            [
              57.54733085632324,
              -20.06560605926759
            ],
            [
              57.54733085632324,
              -20.06560605926759
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.522525787353516,
              -20.173983355627314
            ],
            [
              57.52190351486206,
              -20.163912411561274
            ],
            [
              57.51939296722412,
              -20.160649286237316
            ],
            [
              57.5126338005066,
              -20.1684645588059
            ],
            [
              57.51960754394531,
              -20.173822225641057
            ],
            [
              57.522525787353516,
              -20.173983355627314
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.53454208374023,
              -20.522658607113815
            ],
            [
              57.53321170806885,
              -20.520488241940335
            ],
            [
              57.530765533447266,
              -20.521251892454796
            ],
            [
              57.52930641174316,
              -20.51819726753978
            ],
            [
              57.53385543823242,
              -20.513575021849796
            ],
            [
              57.52085208892823,
              -20.511605500860096
            ],
            [
              57.516775131225586,
              -20.512449584385816
            ],
            [
              57.52183914184571,
              -20.52109112424203
            ],
            [
              57.5284481048584,
              -20.525793524699235
            ],
            [
              57.53454208374023,
              -20.522658607113815
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.67281532287598,
              -20.1790790055483
            ],
            [
              57.66620635986329,
              -20.180126312172643
            ],
            [
              57.66242980957031,
              -20.179965188534545
            ],
            [
              57.66045570373535,
              -20.182382025619898
            ],
            [
              57.66148567199706,
              -20.186651679555613
            ],
            [
              57.66285896301269,
              -20.192693442777248
            ],
            [
              57.664575576782234,
              -20.196962814166593
            ],
            [
              57.66826629638672,
              -20.20082931368349
            ],
            [
              57.666893005371094,
              -20.203648575725968
            ],
            [
              57.66938209533691,
              -20.208481477599435
            ],
            [
              57.67427444458008,
              -20.20727326619727
            ],
            [
              57.67573356628419,
              -20.20324582713095
            ],
            [
              57.67813682556152,
              -20.196560048279853
            ],
            [
              57.68019676208496,
              -20.193579548348755
            ],
            [
              57.676591873168945,
              -20.183348749961855
            ],
            [
              57.67281532287598,
              -20.1790790055483
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.54668712615967,
              -20.06677505648377
            ],
            [
              57.54505634307861,
              -20.072055590506128
            ],
            [
              57.54364013671875,
              -20.074312863774594
            ],
            [
              57.54574298858642,
              -20.077295639319264
            ],
            [
              57.54840373992919,
              -20.077940556299442
            ],
            [
              57.550506591796875,
              -20.075602719623028
            ],
            [
              57.5518798828125,
              -20.070967250712442
            ],
            [
              57.55140781402587,
              -20.069153334270986
            ],
            [
              57.550077438354485,
              -20.067621566270528
            ],
            [
              57.54668712615967,
              -20.06677505648377
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.58784294128417,
              -20.107442669570812
            ],
            [
              57.58389472961425,
              -20.108893449777383
            ],
            [
              57.58071899414063,
              -20.107765066334515
            ],
            [
              57.57453918457031,
              -20.109457638447804
            ],
            [
              57.57170677185058,
              -20.10994122711778
            ],
            [
              57.5709342956543,
              -20.10760386803567
            ],
            [
              57.56621360778808,
              -20.107442669570812
            ],
            [
              57.56647109985351,
              -20.111150192254442
            ],
            [
              57.56123542785644,
              -20.111794969841363
            ],
            [
              57.558317184448235,
              -20.11493822252717
            ],
            [
              57.56604194641113,
              -20.11469643610107
            ],
            [
              57.573251724243164,
              -20.114374053618302
            ],
            [
              57.581491470336914,
              -20.114857627093315
            ],
            [
              57.58767127990723,
              -20.115663579563343
            ],
            [
              57.59058952331543,
              -20.110908399974367
            ],
            [
              57.58784294128417,
              -20.107442669570812
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.522268295288086,
              -20.152249446091933
            ],
            [
              57.52441406249999,
              -20.15394153657739
            ],
            [
              57.52741813659667,
              -20.15772852977608
            ],
            [
              57.526559829711914,
              -20.159259415841408
            ],
            [
              57.52861976623535,
              -20.161434859681272
            ],
            [
              57.530765533447266,
              -20.16441597420612
            ],
            [
              57.53145217895508,
              -20.16715532652451
            ],
            [
              57.53059387207031,
              -20.16965292936303
            ],
            [
              57.53291130065917,
              -20.171908794327404
            ],
            [
              57.53651618957519,
              -20.175131401960257
            ],
            [
              57.53668785095215,
              -20.17851506829793
            ],
            [
              57.536602020263665,
              -20.181979222041193
            ],
            [
              57.53617286682129,
              -20.185926652226517
            ],
            [
              57.53728866577149,
              -20.188423954381538
            ],
            [
              57.53994941711426,
              -20.18971286886712
            ],
            [
              57.543296813964844,
              -20.18971286886712
            ],
            [
              57.544841766357415,
              -20.186812796281767
            ],
            [
              57.54690170288086,
              -20.185926652226517
            ],
            [
              57.55042076110839,
              -20.185443298799868
            ],
            [
              57.55256652832031,
              -20.18294594888136
            ],
            [
              57.54887580871582,
              -20.180690243594572
            ],
            [
              57.54535675048828,
              -20.180045750374415
            ],
            [
              57.54338264465332,
              -20.17762887706887
            ],
            [
              57.545185089111335,
              -20.176098171263792
            ],
            [
              57.54389762878418,
              -20.173600671638116
            ],
            [
              57.5394344329834,
              -20.169572362153723
            ],
            [
              57.53617286682129,
              -20.1632879916246
            ],
            [
              57.53265380859374,
              -20.161434859681272
            ],
            [
              57.536602020263665,
              -20.161757145078376
            ],
            [
              57.53840446472168,
              -20.16038742754387
            ],
            [
              57.539863586425774,
              -20.15893712528606
            ],
            [
              57.54012107849121,
              -20.156036480339562
            ],
            [
              57.53746032714844,
              -20.153216357186444
            ],
            [
              57.53643035888672,
              -20.151765988299086
            ],
            [
              57.53437042236328,
              -20.148784632164155
            ],
            [
              57.53325462341308,
              -20.14717306460696
            ],
            [
              57.53128051757812,
              -20.145400321085873
            ],
            [
              57.52887725830078,
              -20.1445139417797
            ],
            [
              57.52664566040039,
              -20.145722639586378
            ],
            [
              57.52492904663086,
              -20.147575958055405
            ],
            [
              57.52192497253418,
              -20.15047676019943
            ],
            [
              57.522268295288086,
              -20.152249446091933
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.493343353271484,
              -20.185523857808434
            ],
            [
              57.49154090881347,
              -20.185080782746113
            ],
            [
              57.48570442199707,
              -20.184879384574092
            ],
            [
              57.48334407806396,
              -20.18588637283156
            ],
            [
              57.48128414154052,
              -20.18987398242815
            ],
            [
              57.48325824737548,
              -20.19221011034114
            ],
            [
              57.484931945800774,
              -20.19313649619303
            ],
            [
              57.487893104553216,
              -20.193700380536157
            ],
            [
              57.48939514160156,
              -20.192169832570446
            ],
            [
              57.491111755371094,
              -20.19438509449447
            ],
            [
              57.49321460723876,
              -20.195835067059104
            ],
            [
              57.49450206756591,
              -20.194143431088143
            ],
            [
              57.495574951171875,
              -20.192975386005806
            ],
            [
              57.49669075012207,
              -20.191767054290764
            ],
            [
              57.49737739562988,
              -20.190558713203913
            ],
            [
              57.496604919433594,
              -20.188303118101896
            ],
            [
              57.49669075012207,
              -20.186812796281767
            ],
            [
              57.493343353271484,
              -20.185523857808434
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              57.50814914703369,
              -20.134823876345084
            ],
            [
              57.50851392745972,
              -20.13381655855402
            ],
            [
              57.5080418586731,
              -20.132507035719062
            ],
            [
              57.50632524490356,
              -20.13135867589574
            ],
            [
              57.50789165496826,
              -20.13012972007218
            ],
            [
              57.50767707824706,
              -20.128618695570644
            ],
            [
              57.50598192214965,
              -20.127691926650165
            ],
            [
              57.504394054412835,
              -20.127631485007992
            ],
            [
              57.5028920173645,
              -20.127006920003875
            ],
            [
              57.49892234802246,
              -20.127933692985184
            ],
            [
              57.497549057006836,
              -20.12896119573778
            ],
            [
              57.49692678451538,
              -20.130109573174902
            ],
            [
              57.49752759933472,
              -20.131842196849707
            ],
            [
              57.4985146522522,
              -20.13389714421623
            ],
            [
              57.498321533203125,
              -20.135670018271814
            ],
            [
              57.500295639038086,
              -20.13699966061417
            ],
            [
              57.5028920173645,
              -20.137664477542494
            ],
            [
              57.50321388244629,
              -20.1364758634663
            ],
            [
              57.50533819198608,
              -20.13693922257134
            ],
            [
              57.50731229782104,
              -20.136798200380472
            ],
            [
              57.50814914703369,
              -20.134823876345084
            ]
          ]
        ]
      }
    }
  ]
}

      //adding the cross sign by layer to the map
      mymap.on('load', function(e) {
            // Add the data to your map as a layer
            mymap.addLayer({
            id: 'locations',
            type: 'symbol',
          // Add a GeoJSON source containing place coordinates and information.
             source: {
               type: 'geojson',
               data: hospitals
            },
             layout: {
              'icon-image': 'hospital-15',
              'icon-allow-overlap': true,
          }
        });
      });

      //codes for the focus popup

      mymap.on('click', 'locations', function (e) {
             var hlth = e.features[0].properties,
               popOverContet;

             for (prop in hlth) {
               popOverContet += hlth[prop] + '</br>';
             }

             new mapboxgl.Popup()
              .setLngLat(e.features[0].geometry.coordinates)
              .setHTML(popOverContet)
              .addTo(mymap);
      });



      //code for search box
          //code for search box
          var geocoder = new MapboxGeocoder({ // Initialize the geocoder
            accessToken: mapboxgl.accessToken, // Set the access token
            mapboxgl: mapboxgl,
            placeholder:'      Search'
          });

          // Add the geocoder to the map
          
          document.getElementById('geocode').appendChild(geocoder.onAdd(mymap));
    
  
      }

      function locationError(error){
        switch(error.code){
          case error.PERMISSION_DENIED: alert("Permission Denied-"+ error.message);
          break;

          case error.POSSITION_UNAVAILABLE: alert("position Not Available-"+ error.message);
          break;

          case error.TIMEOUT: alert("Request Time Out-"+ error.message);
          break;
        }
      } 

      
      function display(){
         navigate = mymap.addControl(new MapboxDirections({
         accessToken: mapboxgl.accessToken}), 'bottom-right');

                }
      function infections(){
         mymap.addLayer({
            id: 'danger',
          type: 'heatmap',
          source: {
              type: 'geojson',
            data: areas
                },
            maxzoom: 14,
            paint: {
       // increase weight as diameter breast height increases
            'heatmap-weight': {
               property: 'dbh',
             type: 'exponential',
               stops: [
                [1, 0],
                [14, 1]
                  ]
                },
      // increase intensity as zoom level increases
            'heatmap-intensity': {
               stops: [
                [11, 0.5],
                [15, 1]
                ]
                },
      // assign color values be applied to points depending on their density
            'heatmap-color': [
              'interpolate',
               ['linear'],
               ['heatmap-density'],
                0, 'rgba(236,222,239,0)',
                0.2, 'rgb(208,209,230)',
                0.4, 'rgb(166,189,219)',
                0.6, 'rgb(207,103,117)',
                0.8, 'rgb(153,37,28)'
              ],
      // increase radius as zoom increases
            'heatmap-radius': {
              stops: [
                 [13, 30],
                 [16,40 ]
                 ]
                 },
      // decrease opacity to transition into the circle layer
            'heatmap-opacity': {
             default: 1,
               stops: [
                 [14, 1],
                 [22, 0]
                  ]
                  },
       }
      }, 'waterway-label');
    }
  }//end of else part

