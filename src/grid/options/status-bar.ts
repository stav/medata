export default {
  statusPanels: [
    {
      statusPanel: "agTotalAndFilteredRowCountComponent",
      align: "left",
    },
    { statusPanel: "agTotalRowCountComponent" },
    { statusPanel: "agFilteredRowCountComponent" },
    { statusPanel: "agSelectedRowCountComponent" },
    {
      statusPanel: "agAggregationComponent",
      statusPanelParams: {
        // possible values are: 'count', 'sum', 'min', 'max', 'avg'
        aggFuncs: ["count", "sum", "min", "max", "avg"],
      },
    },
  ],
}
