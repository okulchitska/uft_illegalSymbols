'Login to Mercury Site
SystemUtil.Run "iexplore.exe"
URL = "http://newtours.demoaut.com/"
Browser("Welcome: Mercury Tours").Navigate(URL)
Wait 10
'OptionalStep.Browser("Welcome: Mercury Tours").Dialog("Internet Explorer").WinButton("&Yes").Click
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Sync

'  This Action logs in to the Mercury Tours site
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "admin"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").Set "admin"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click

