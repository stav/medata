import type { ColDef, FilterChangedEvent } from "@ag-grid-community/core";

type IModel = {
  filter: string;
} | null;

export default function (event: FilterChangedEvent) {
  const col = event.columns[0];
  const model = event.api.getColumnFilterModel(col) as IModel;
  const defs: ColDef[] = event.api.getColumnDefs() ?? [];

  defs.forEach((def) => {
    if (def.colId === col.getColId()) {
      def.headerName = model?.filter;
    }
  });

  event.api.setGridOption("columnDefs", defs);
  // event.api.refreshHeader();
}
