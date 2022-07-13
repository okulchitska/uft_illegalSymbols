
OptionalStep.Browser("Welcome: Mercury Tours").Dialog("Internet Explorer").Activate @@ hightlight id_;_265110_;_script infofile_;_ZIP::ssf1.xml_;_
OptionalStep.Browser("Welcome: Mercury Tours").Dialog("Internet Explorer").WinCheckBox("Do not show this message").Set "ON" @@ hightlight id_;_199558_;_script infofile_;_ZIP::ssf2.xml_;_
OptionalStep.Browser("Welcome: Mercury Tours").Dialog("Internet Explorer").WinButton("OK").Click @@ hightlight id_;_199554_;_script infofile_;_ZIP::ssf3.xml_;_
OptionalStep.Browser("Welcome: Mercury Tours").Dialog("Information Bar").WinCheckBox("Don't show this message").Set "ON" @@ hightlight id_;_68568_;_script infofile_;_ZIP::ssf4.xml_;_
OptionalStep.Browser("Welcome: Mercury Tours").Dialog("Information Bar").WinButton("Close").Click @@ hightlight id_;_68566_;_script infofile_;_ZIP::ssf5.xml_;_

Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Sync
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").Select DataTable("p_from_port", dtGlobalSheet)
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").Select DataTable("p_to_port", dtGlobalSheet)
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline").Select DataTable("p_airline", dtGlobalSheet)