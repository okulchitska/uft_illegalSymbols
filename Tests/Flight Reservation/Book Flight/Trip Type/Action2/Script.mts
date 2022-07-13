'This action selects the trip types and locations on the Flight Finder page. @@ script comments_;_'~_;_
'Clicks Continue. When the Round Trip type is selected, it checks that the @@ script comments_;_'~_;_
'Depart and Return tables exist on the Select Flight page. When the One Way @@ script comments_;_'~_;_
'type is selected, it checks that the Depart table exists. @@ script comments_;_'~_;_
Browser("Find a Flight:").Page("Find a Flight:").WebRadioGroup("tripType").Select DataTable("TripType",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebRadioGroup("tripType")_;_script comments_;_'~~~_;_script infofile_;_tripType0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").WebList("fromPort").Select DataTable("FromPort",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("fromPort")_;_script comments_;_'~~~_;_script infofile_;_fromPort0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").WebList("toPort").Select DataTable("ToPort",dtLocalSheet) @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").WebList("toPort")_;_script comments_;_'~~~_;_script infofile_;_toPort0.inf_;_
Browser("Find a Flight:").Page("Find a Flight:").Image("findFlights").Click 17, 5 @@ hightlight id_;_Browser("Find a Flight:").Page("Find a Flight:").Image("findFlights")_;_script comments_;_'~~~_;_script infofile_;_findFlights0.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_2_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer4.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer5.inf_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ script comments_;_'~~~_;_
Browser("Find a Flight:").Page("Select a Flight:").Sync @@ hightlight id_;_Browser("Find a Flight:").Page("Select a Flight:")_;_script comments_;_'~~~_;_script infofile_;_Select_a_Flight_0.inf_;_
If DataTable("TripType",dtLocalSheet)="roundtrip" Then @@ script comments_;_'~If~Then_;_
   If Browser("Find a Flight:").Page("Select a Flight:").WebTable("DEPART").Exist(3) Then @@ script comments_;_'~If~Then_;_
      If Browser("Find a Flight:").Page("Select a Flight:").WebTable("RETURN").Exist(3) Then @@ script comments_;_'~If~Then_;_
         Reporter.ReportEvent 0, "Roundtrip iteration", "Roundtrip iteration passed" @@ script comments_;_'~_;_
	  Else
	     Reporter.ReportEvent 1, "Roundtrip iteration", "Roundtrip iteration failed" @@ script comments_;_'~_;_
      End If
   End If
ElseIf DataTable("TripType",dtLocalSheet)="oneway" Then @@ script comments_;_'~ElseIf_;_
    If Browser("Find a Flight:").Page("Select a Flight:").WebTable("DEPART").Exist(3) Then @@ script comments_;_'~If~Then_;_
      If Browser("Find a Flight:").Page("Select a Flight:").WebTable("RETURN").Exist(3) Then @@ script comments_;_'~If~Then_;_
         Reporter.ReportEvent 1, "One Way iteration", "One Way iteration failed" @@ script comments_;_'~_;_
	  Else
	     Reporter.ReportEvent 0, "One Way iteration", "One Way iteration passed" @@ script comments_;_'~_;_
      End If
    End If
End If
Browser("Find a Flight:").Back @@ script comments_;_'~~_;_
Browser("Find a Flight:").Sync @@ script comments_;_'~~_;_
OptionalStep.Browser("Find a Flight:").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script comments_;_'~~~_;_script infofile_;_Internet_Explorer6.inf_;_