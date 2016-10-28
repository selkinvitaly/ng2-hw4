import { Component } from "@angular/core";
import { WidgetPlaceItem } from "../../../shared/interfaces/WidgetPlaceItem";
import { FixtureService } from "../../../services/FixtureService";


@Component({
  selector: "widget",
  template: require("./widget.component.html")
})
export class WidgetComponent {

  places: WidgetPlaceItem[];
  selectedId: string;

  constructor(private fixtureService: FixtureService) {
    this.loadData();
  }

  get loaded(): boolean {
    return !!this.places;
  }

  get currentPlace(): WidgetPlaceItem {
    return this.places
      .filter((placeItem: WidgetPlaceItem) => placeItem.id === this.selectedId)[0];
  }

  changePlace(placeItemId: string): void {
    this.selectedId = placeItemId;
  }

  private loadData() {
    this.fixtureService
      .getData()
      .subscribe((data: WidgetPlaceItem[]) => {
        this.places = data;
        this.selectedId = data[0].id;
      }, err => {
        console.error(err);
      });
  }

}
