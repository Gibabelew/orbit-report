import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];
  categories: string[] = ['space Debris', 'Communication', 'probe', 'Positioning', 'Space Station', 'Telescope'];
  constructor() { }

  ngOnInit() {
  }

  typeCount(category: string): number {
    if (category === 'Total') {
      return this.satellites.length;
    } else {
      let count: number = 0;
      for (let i in this.satellites) {
        if (this.satellites[i].type === category) {
          count++;
        }
      }
      return count;
    }
  }
}
