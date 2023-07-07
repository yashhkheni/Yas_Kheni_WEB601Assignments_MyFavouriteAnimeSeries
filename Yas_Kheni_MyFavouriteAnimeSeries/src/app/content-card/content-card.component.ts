import { Component } from '@angular/core';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: any = [];

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Naruto',
      description: 'Naruto Des',
      creator: 'Temp',
      imgURL: 'https://www.google.com/search?sxsrf=AB5stBiyi2sXBada-ciYJyp8lqSJD-hk0A:1688689828923&q=Naruto&tbm=isch&sa=X&ved=2ahUKEwjk243rq_v_AhXgkokEHWrxDNAQ0pQJegQICxAB&biw=1536&bih=726&dpr=1.25#imgrc=kWVsVVfqP_aULM',
      type: 'Action',
      tags: ['Fight', 'Adventure']
    });
    this.contentList.add({
      id: 2,
      title: 'DeathNote',
      description: 'DeathNote Des',
      creator: 'Temp2',
      imgURL: 'https://www.google.com/search?q=Deathnote&tbm=isch&ved=2ahUKEwij6PX5q_v_AhVkFmIAHTC8AT8Q2-cCegQIABAA&oq=Deathnote&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CggAEIoFELEDEEM6BwgAEIoFEEM6CAgAEIAEELEDUJwKWOMdYOoeaABwAHgBgAGQAogBnwiSAQU4LjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=w1ynZOP6O-SsiLMPsPiG-AM&bih=726&biw=1536#imgrc=feb8bFZ1PTfryM',
      type: 'Suspence',
      tags: ['Fight', 'Thriller', 'Horror']
    });
    this.contentList.add({
      id: 3,
      title: 'Black Clover',
      description: 'Black Clover Des',
      creator: 'temp3',
      imgURL: 'https://www.google.com/search?q=Black+clover&tbm=isch&ved=2ahUKEwjz5JaQrPv_AhVmN1kFHeSoC0gQ2-cCegQIABAA&oq=Black+clover&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgAEIoFEEM6CggAEIoFELEDEEM6BAgAEANQ0A1Y4Cxg1C1oAHAAeAKAAYgLiAHiKZIBDTcuMC4xLjEuNi0xLjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=8lynZPOjKObu5NoP5NGuwAQ&bih=726&biw=1536#imgrc=AqtlJndHRIFVSM',
      type: 'Action',
      tags: ['Action', 'Fight']
    });
  }
}