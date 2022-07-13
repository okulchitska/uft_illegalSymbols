'This action selects trip types, locations, and the number of passengers in the Flight Finder page. @@ script comments_;_'~_;_
'Clicks the Continue buttons twice and checks the number of passengers in the Book a Flight page. @@ script comments_;_'~_;_
Browser("Find a Flight:").Page("Find a Flight:").WebRadioGroup("tripType").Select DataTable("TripType",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebRadioGroup("tripType")_;_script comments_;_'~~~_;_script infofile_;_tripType0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").WebList("passCount").Select DataTable("Passengers",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("passCount")_;_script comments_;_'~~~_;_script infofile_;_tripType0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").WebList("fromPort").Select DataTable("FromPort",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("fromPort")_;_script comments_;_'~~~_;_script infofile_;_fromPort0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").WebList("toPort").Select DataTable("ToPort",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("toPort")_;_script comments_;_'~~~_;_script infofile_;_toPort0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").Image("findFlights").Click 50, 19 @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").Image("findFlights")_;_script comments_;_'~~~_;_script infofile_;_findFlights0.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_2_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer0.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer1.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ script comments_;_'~~~_;_
Browser("Find a Flight:").Page("Select a Flight:").Image("reserveFlights").Click 77, 19 @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:").Image("reserveFlights")_;_script comments_;_'~~~_;_script infofile_;_reserveFlights0.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_2_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer2.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer3.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ script comments_;_'~~~_;_
Browser("Find a Flight:").Page("Book a Flight:").Check CheckPoint("1") @@ hightlight id_;_Browser("Find a Flight:").Page("Book a Flight:")_1_;_script comments_;_'~~~Checkpoint_;_script infofile_;_Book_a_Flight_0.inf_;_
Browser("Find a Flight:").Page("Book a Flight:").Sync @@ hightlight id_;_Browser("Find a Flight:").Page("Book a Flight:")_;_script comments_;_'~~~_;_script infofile_;_Book_a_Flight_0.inf_;_
Browser("Find a Flight:").Back @@ script comments_;_'~~_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer4.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ script comments_;_'~~~_;_
Browser("Find a Flight:").Page("Book a Flight:").Sync @@ hightlight id_;_Browser("Find a Flight:").Page("Book a Flight:")_;_script comments_;_'~~~_;_script infofile_;_Book_a_Flight_1.inf_;_
Browser("Find a Flight:").Back @@ script comments_;_'~~_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer5.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ script comments_;_'~~~_;_
Browser("Find a Flight:").Page("Find a Flight:_2").Sync @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:_2")_;_script comments_;_'~~~_;_script infofile_;_Find_a_Flight__20.inf_;_