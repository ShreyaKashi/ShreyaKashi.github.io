import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TechCornerComponent } from "./tech-corner/tech-corner.component";
import { WrittenContentComponent } from "./written-content/written-content.component";


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'written-content', component: WrittenContentComponent },
  { path: 'tech', component: TechCornerComponent }
];


export const routeLookUp = {
  'home': { path: 'home', title: 'Home', bgImage: "url('../assets/images/head-flower-img.png')", bgColor: "#3d6b8d" },
  'writing': { path: 'written-content', title: 'Writing', bgImage: "url('../assets/images/abstract_cropped.jpg')", bgColor: "#185660" },
  'tech': { path: 'tech', title: 'Tech corner', bgImage: "url('../assets/images/tech.jpg')", bgColor: "#e34827" },
}