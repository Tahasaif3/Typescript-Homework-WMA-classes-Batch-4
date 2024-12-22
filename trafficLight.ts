enum TrafficLight {
  Red = "red",
  Yellow = "yellow",
  Green= "green"
}

const TrafficLightsActions = (light: TrafficLight): string => {
  switch (light) {
    case TrafficLight.Red:
      return "Stop Here";
    case TrafficLight.Yellow:
      return "Get Ready";
    case TrafficLight.Green:
      return "Go Now";
  }
}

console.log(TrafficLightsActions(TrafficLight.Red));
console.log(TrafficLightsActions(TrafficLight.Yellow));
console.log(TrafficLightsActions(TrafficLight.Green)); 

