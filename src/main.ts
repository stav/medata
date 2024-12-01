import {
  createGrid,
  type GridOptions,
  ModuleRegistry,
} from "@ag-grid-community/core";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import { LicenseManager } from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("<your license key>");

import { SimpleGrid } from "./grid";

import "./style.css";

new SimpleGrid();
