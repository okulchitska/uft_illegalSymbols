'This action selects different locations on the Flight Finder page.
'Clicks Continue and checks the Depart and Return locations on the 
'Select Flight page.
Browser("Find a Flight:").Page("Find a Flight:").WebList("fromPort").Select DataTable("FromPort",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("fromPort")_;_script comments_;_'~~~_;_script infofile_;_fromPort0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").WebList("toPort").Select DataTable("ToPort",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("toPort")_;_script comments_;_'~~~_;_script infofile_;_toPort0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").Image("findFlights").Click 39, 6 @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").Image("findFlights")_;_script comments_;_'~~~_;_script infofile_;_findFlights0.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_2_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer4.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer5.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click
Browser("Find a Flight:").Page("Select a Flight:").Sync @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:")_;_script comments_;_'~~~_;_script infofile_;_Select_a_Flight_0.inf_;_
Browser("Find a Flight:").Page("Select a Flight:").Check CheckPoint("Frankfurt") @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:")_1_;_script comments_;_'~~~Checkpoint_;_script infofile_;_Select_a_Flight_0.inf_;_
Browser("Find a Flight:").Page("Select a Flight:").Check CheckPoint("London") @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:")_2_;_script comments_;_'~~~Checkpoint_;_script infofile_;_Select_a_Flight_0.inf_;_
Browser("Find a Flight:").Page("Select a Flight:").Check CheckPoint("Frankfurt_2") @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:")_4_;_script comments_;_'~~~Checkpoint_;_script infofile_;_Select_a_Flight_0.inf_;_
Browser("Find a Flight:").Page("Select a Flight:").Check CheckPoint("London_2") @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:")_3_;_script comments_;_'~~~Checkpoint_;_script infofile_;_Select_a_Flight_0.inf_;_
Browser("Find a Flight:").Back @@ script comments_;_'~~_;_
Call wait(5)
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer6.inf_;_