class GenericEditorAsRenderer {
  init(params) {
    this.inputField = document.createElement("input");
    this.inputField.value = params.value;
    this.inputField.className = ".ag-theme-alpine .ag-text-field-input";
    this.inputField.onchange = () => params.setValue(this.inputField.value);
  }

  getGui() {
    return this.inputField;
  }

  refresh(params) {
    return false;
  }
}

function handleInputCellStyle(params) {
  return {
    color: "white",
    "background-color": params.value >= 2000 ? "#ffa726" : "#4caf50",
    padding: "0 4px",
  };
}

const columnDefs = [
  {
    field: "lineItem",
    headerName: "List Item",
  },
  { field: "service", headerName: "Service Description", resizable: true },
  {
    field: "po_detail_amount",
    headerName: "PO Detail Amount",
  },
  {
    field: "invoice_detail_amount",
    headerName: "Invoiced Detail Amount",
  },
  {
    field: "available_amount",
    headerName: "Available Amount",
  },
  {
    field: "invoice_detail_cost",
    headerName: "Invoice Detail Cost",
    cellStyle: handleInputCellStyle,
    cellRenderer: GenericEditorAsRenderer,
  },
  {
    field: "valid_detail_cost",
    headerName: "Valid Detail Cost",
    cellStyle: handleInputCellStyle,
    cellRenderer: GenericEditorAsRenderer,
  },
];

// specify the data
const rowData = [
  {
    lineItem: 123451,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "1",
    available_amount: "10000",
    invoice_detail_cost: "1000",
    valid_detail_cost: "2000",
  },
  {
    lineItem: 123452,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "0",
    available_amount: "10000",
    invoice_detail_cost: "1000",
    valid_detail_cost: "1000",
  },
  {
    lineItem: 123456,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "0",
    available_amount: "10000",
    invoice_detail_cost: "3000",
    valid_detail_cost: "1000",
  },
  {
    lineItem: 123456,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "0",
    available_amount: "10000",
    invoice_detail_cost: "1000",
    valid_detail_cost: "1000",
  },
  {
    lineItem: 123456,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "0",
    available_amount: "10000",
    invoice_detail_cost: "1000",
    valid_detail_cost: "1000",
  },
  {
    lineItem: 123456,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "0",
    available_amount: "10000",
    invoice_detail_cost: "1000",
    valid_detail_cost: "1000",
  },
  {
    lineItem: 123456,
    service: "Description 1",
    po_detail_amount: "10,000",
    invoice_detail_amount: "0",
    available_amount: "10000",
    invoice_detail_cost: "1000",
    valid_detail_cost: "1000",
  },
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  singleClickEdit: true,
  rowStyle: { background: "fafafa" },
  getRowStyle: (params) => {
    if (params.node.rowIndex % 2 !== 0) {
      return { background: "#e1f5fea8" };
    }
  },
  defaultColDef: {
    resizable: true,
    sortable: true,
    filter: true,
    getQuickFilterText: function (params) {
      return params.value;
    },
  },
  multiSortKey: "ctrl",
  pagination: true,
  sideBar: true,
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});
// function to filter with search bar
function onFilterTextBoxChanged() {
  gridOptions.api.setQuickFilter(
    document.getElementById("filter-text-box").value
  );
}
