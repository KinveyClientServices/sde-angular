import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-radial-chart",
  templateUrl: "./radial-chart.component.html",
  styleUrls: ["./radial-chart.component.scss"]
})
export class RadialChartComponent implements OnInit {
  @Input() text;
  @Input() col;
  @Input() row;
  @Input() rowSpan;
  @Input() color;
  @Input() angle;
  constructor() {}

  ngOnInit() {}
}
