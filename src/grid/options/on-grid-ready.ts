import type { GridReadyEvent } from "@ag-grid-community/core";

export default function (params: GridReadyEvent) {
  console.log("ready", params);

  const api = params.api;
  const currentColumnDefs = api.getColumnDefs();
  if (!currentColumnDefs) {
    return;
  }

  const allColumns = params.api.getColumns();
  console.log("cols", allColumns);

  const rows = api.forEachNode((rowNode, index) => {
    const rowIndex = rowNode.rowIndex;
    const rowElement = document.querySelector(
      `.ag-row[row-index='${rowIndex}']`
    );
    console.log("rowElement", rowElement);

    if (rowElement && allColumns?.length) {
      // Iterate over all columns
      allColumns.forEach((column) => {
        // Get the column field or ID
        const colId = column.getColId();

        // Find the cell element in the row for this column
        const cellElement = rowElement.querySelector(
          `.ag-cell[col-id='${colId}']`
        );

        if (cellElement) {
          // Get the CSS classes applied to the cell
          const classes = cellElement.className.split(" ");
          console.log(
            colId,
            classes,
            classes.includes("rag-good"),
            classes.includes("rag-fine"),
            classes.includes("rag-warn"),
            classes.includes("rag-zero"),
            classes.includes("rag-over")
          );
        }
      });
    }

    allColumns?.forEach((column) => {
      // const params = { columns: [column], rowNodes: [rowNode] };
      // const instances = api.getCellRendererInstances(params as GetCellRendererInstancesParams);
      // if (instances.length > 0) console.log("instances", instances);
    });
  });

  // // Spin thru the columns
  // currentColumnDefs.forEach((def) => {
  //   if (def.class?.includes("numerical") && def.field) {
  //     const oldplan = rows[0][def.field];
  //     const newplan = rows[1][def.field];
  //     const diff = newplan - oldplan;
  //     total += diff;
  //   }
  // });

  const newColumnDefs = [
    ...currentColumnDefs,
    { headerName: "New Column", field: "newField" },
  ];
  console.log("newdefs", newColumnDefs);
  api.setGridOption("columnDefs", newColumnDefs);
}
