import type {
  GetCellRendererInstancesParams,
  GridReadyEvent,
  IRowNode,
} from "@ag-grid-community/core";

export default function (params: GridReadyEvent) {
  console.log("ready", params);

  const api = params.api;

  // const allColumns = api.getColumns();
  // console.log("cols", allColumns);

  // const rows = api.forEachNode((rowNode, index) => {
  //   rowNode.setDataValue("successful", Math.random() > 0.5);
  //   const rowIndex = rowNode.rowIndex;
  //   const rowElement = document.querySelector(
  //     `.ag-row[row-index='${rowIndex}']`
  //   );
  //   console.log("rowElement", rowElement);

  //   if (rowElement && allColumns?.length) {
  //     // Iterate over all columns
  //     allColumns.forEach((column) => {
  //       // Get the column field or ID
  //       const colId = column.getColId();

  //       // Find the cell element in the row for this column
  //       const cellElement = rowElement.querySelector(
  //         `.ag-cell[col-id='${colId}']`
  //       );

  //       if (cellElement) {
  //         // Get the CSS classes applied to the cell
  //         const classes = cellElement.className.split(" ");
  //         // console.log(
  //         //   colId,
  //         //   classes,
  //         //   classes.includes("rag-good"),
  //         //   classes.includes("rag-fine"),
  //         //   classes.includes("rag-warn"),
  //         //   classes.includes("rag-zero"),
  //         //   classes.includes("rag-over")
  //         // );
  //       }
  //     });
  //   }

  //   // allColumns?.forEach((column) => {
  //   //   let params: GetCellRendererInstancesParams;
  //   //   const firstRowNode = <IRowNode>api.getDisplayedRowAtIndex(0);
  //   //   params = { columns: ["Year"] };
  //   //   // params = { columns: ["Year"], rowNodes: [firstRowNode] };
  //   //   // params = { columns: [column], rowNodes: [rowNode] };
  //   //   // console.log("params", params);
  //   //   const instances = api.getCellRendererInstances(params);
  //   //   if (instances.length > 0) console.log("instances", instances);
  //   // });
  // });

  // // Spin thru the columns
  // currentColumnDefs.forEach((def) => {
  //   if (def.class?.includes("numerical") && def.field) {
  //     const oldplan = rows[0][def.field];
  //     const newplan = rows[1][def.field];
  //     const diff = newplan - oldplan;
  //     total += diff;
  //   }
  // });

  const currentColumnDefs = api.getColumnDefs();
  if (!currentColumnDefs) {
    console.error('Error: No column definitions!', currentColumnDefs)
    return;
  }

  const newColumnDefs = [
    ...currentColumnDefs,
    {
      headerName: "Score",
      // headerTooltip: "MOOP",
      field: "Score",
      type: "numerical",
    },
  ];
  console.log("newdefs", newColumnDefs);
  api.setGridOption("columnDefs", newColumnDefs);

  api.forEachNode((rowNode) => {
    rowNode.setDataValue("Score", Math.random() > 0.5);
    console.log('ScoreRow', rowNode)
  });
}
