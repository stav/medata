import {createGrid, type GridOptions, ModuleRegistry} from "@ag-grid-community/core";

import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
ModuleRegistry.registerModules([ClientSideRowModelModule, StatusBarModule]);

import {LicenseManager} from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("<your license key>")

import './style.css'

import cars from '../data/cars.json'

class SimpleGrid {
    private readonly gridOptions: GridOptions = <GridOptions>{};

    constructor() {
        this.gridOptions = {
            columnDefs: [
                {field: "make"},
                {field: "model"},
                {field: "price"}
            ],
            rowData: cars,
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
        };

        const eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#app');
        createGrid(eGridDiv, this.gridOptions);
    }
}

new SimpleGrid();
