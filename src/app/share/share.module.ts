import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './comp/detail/detail.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'tt', component: TestComponent },
      { path: 'detail', component: DetailComponent },
      { path: '', component: AppComponent },
    //  { path: '', redirectTo: 'tt', pathMatch: 'full' }

    ])
  ],
  exports:[TestComponent]
})
export class ShareModule {
  static Routes = RouterModule.forChild([
    { path: 'tt', component: TestComponent },
    { path: 'detail', component: DetailComponent },
   // { path: '', redirectTo: 'tt', pathMatch: 'full' },
    { path: '', component: AppComponent },


  ]);
}
