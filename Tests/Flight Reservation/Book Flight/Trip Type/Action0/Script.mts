RunAction "Get URL [Departing And Arriving Locations]", oneIteration
RunAction "Sign On [Departing And Arriving Locations]", oneIteration
Call RunAction("Trip Type", allIterations)
Call RunAction("Close Browser", oneIteration)