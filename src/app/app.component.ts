import { Component, VERSION } from "@angular/core";
import emailjs from "emailjs-com";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  showForm: boolean = true;
  // ngOnInit() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       let frameMessage =
  //         "Latitude:" +
  //         position.coords.latitude.toString() +
  //         "  " +
  //         "Longtitude:" +
  //         position.coords.longitude.toString();
  //       emailjs
  //         .send(
  //           "service_utw94sv",
  //           "template_h1dku2n",
  //           { message: frameMessage },
  //           "user_BXzJxnM3khfN6pYNESnLn"
  //         )
  //         .then(thankyou => console.log("thankyou"));
  //     });
  //   }
  // }
  onJoin() {
    showForm = false;
  }
}
