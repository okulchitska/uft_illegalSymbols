RunAction "Get URL [Departing And Arriving Locations]", oneIteration
RunAction "Sign On [Departing And Arriving Locations]", oneIteration
Call RunAction("Number Of Passengers", allIterations)
Call RunAction("Close Browser", oneIteration)