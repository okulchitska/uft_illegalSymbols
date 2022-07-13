'	This action gets URL of the Mercury Tours site 
'	using the external function and then navigates 
'	to retrieved URL
URL = Get_URL()
Browser("Browser").Navigate(URL) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_Page0.inf_;_
OptionalStep.Browser("Browser").Dialog("Internet Explorer").WinButton("&Yes").Click @@ hightlight id_;_5_;_script infofile_;_Internet_Explorer1.inf_;_
Browser("Browser").Page("Welcome: Mercury").Sync @@ hightlight id_;_Browser("Browser").Page("Welcome: Mercury")_;_script infofile_;_Welcome__Mercury0.inf_;_

