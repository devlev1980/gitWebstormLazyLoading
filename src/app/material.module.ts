import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule { }
