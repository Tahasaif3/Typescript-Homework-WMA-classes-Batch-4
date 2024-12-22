var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "red";
    TrafficLight["Yellow"] = "yellow";
    TrafficLight["Green"] = "green";
})(TrafficLight || (TrafficLight = {}));
function TrafficLightsActions(light) {
    switch (light) {
        case TrafficLight.Red:
            return "Stop";
        case TrafficLight.Yellow:
            return "Get Ready";
        case TrafficLight.Green:
            return "Go Now";
    }
}
console.log(TrafficLightsActions(TrafficLight.Red));
console.log(TrafficLightsActions(TrafficLight.Yellow));
console.log(TrafficLightsActions(TrafficLight.Green));
