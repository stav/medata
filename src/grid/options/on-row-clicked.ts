import type { RowClickedEvent, ColDef } from "@ag-grid-community/core";

import { currencyFormatter } from "./utils";

export default function (event: RowClickedEvent) {
  const rows = event.api.getSelectedRows(); // Selected rows
  // Compare two rows together
  if (rows.length < 3) {
    let total = 0; // Sum of the money from each column
    const defs: ColDef[] = event.api.getColumnDefs() ?? [];
    // Spin thru the columns
    defs.forEach((def) => {
      let header: string | undefined = undefined;
      // Display difference in header if 2 rows selected
      if (rows.length === 2) {
        // Only look at the money
        if (def.type?.includes("numerical") && def.field) {
          const oldplan = rows[0][def.field];
          const newplan = rows[1][def.field];
          const diff = newplan - oldplan;
          total += diff;
          header = currencyFormatter(diff);
        }
        // Otherwise check for the total column
        else if (def.type?.includes("total")) {
          header = currencyFormatter(total);
        }
      }
      // Check for the score column which has no field
      if (def.type?.includes("score")) {
        header = def.headerName;
      }
      def.headerName = header;
    });
    event.api.setGridOption("columnDefs", defs);
  }
}
