import Mcore from "./mcore";
import Orion from "./orion";
import Auriga from "./auriga";
import MegaPi from "./megaPi";

var Sensorium = {
    "Mcore": Mcore,
    "Orion": Orion,
    "Auriga": Auriga,
    "MegaPi": MegaPi
}

if(typeof window != "undefined") {
  window.Sensorium = Sensorium;
}

export default Sensorium;