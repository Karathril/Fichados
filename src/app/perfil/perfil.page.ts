import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user-add.service';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';


export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData: any;
  public options: Partial<ChartOptions>;
  constructor(private userService: UsersService, private router: Router,
    private auth : Auth, private firestore: Firestore) {
    this.spackLine();
  }

  ngOnInit() {
    const email = this.auth.currentUser?.email
    if (email) {
      this.userService.getUsuarios(email).subscribe(data => {
        this.userData = data[0];
      });
    }
  }

  spackLine(){
    this.options = {
      series: [
        {
          name: "Series 1",
          data: [4, 5, 1]
        }
      ],
      chart: {
        height: 220,
        type: "radar"
      },
      xaxis: {
        categories: ["Ganados", "Perdidos", "Empatados"]
      }
    };
  
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/regis-game'])
    })
    .catch(error => console.log(error))
  }

}
