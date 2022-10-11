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
    cellStyle: {
      color: "white",
      "background-color": "#4caf50",
      padding: "0 4px",
    },
    cellRenderer: GenericEditorAsRenderer,
  },
  {
    field: "valid_detail_cost",
    headerName: "Valid Detail Cost",
    cellStyle: {
      color: "white",
      "background-color": "#4caf50",
      padding: "0 4px",
    },
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
    valid_detail_cost: "1000",
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
  defaultColDef: {
    resizable: true,
    sortable: true,
    filter: true,
  },
  multiSortKey: "ctrl",
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});
