import { createGrid, type GridApi, type GridOptions, ModuleRegistry } from "@ag-grid-community/core";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import { LicenseManager } from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("<your license key>")

import './style.css'

import plans from '../data/plans.json'

class SimpleGrid {
    private readonly gridOptions: GridOptions = <GridOptions>{};
    matrix: GridApi<any>;

    constructor() {
        this.gridOptions = {
            columnDefs: [
                { field: "Year" },
                { field: "Carrier" },
                { field: "Name" }
            ],
            rowData: plans,
            defaultColDef: {
                flex: 1,
            },
            statusBar: {
                statusPanels: [
                    {
                        statusPanel: 'agTotalAndFilteredRowCountComponent',
                        align: 'left',
                    }
                ]
            },
            isExternalFilterPresent: () => true,
            doesExternalFilterPass: () => true,
        };

        const eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#app');
        this.matrix = <GridApi>createGrid(eGridDiv, this.gridOptions);
    }

    public externalFilterChanged() {
        // this.matrix.onFilterChanged();
        console.log('this', this)
        return null
    }
}

const grid = new SimpleGrid();
grid.externalFilterChanged.bind(grid)

if (typeof window !== "undefined") {
    // Attach external event handlers to window so they can be called from index.html
    (<any>window).externalFilterChanged = grid.externalFilterChanged;
}

console.log('gird', grid)