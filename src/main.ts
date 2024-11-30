import { ModuleRegistry } from "@ag-grid-community/core";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  StatusBarModule,
  ClipboardModule,
  RangeSelectionModule,
]);

import { LicenseManager } from "@ag-grid-enterprise/core";

LicenseManager.setLicenseKey("<your license key>");

import { SimpleGrid } from "./grid";

import "./style.css";

new SimpleGrid();
