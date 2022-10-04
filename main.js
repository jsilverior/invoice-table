const columnDefs = [
  {
    field: "lineItem",
    headerName: "List Item",
  },
  { field: "service", headerName: "Service Description" },
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
    editable: true,
  },
  {
    field: "valid_detail_cost",
    headerName: "Valid Detail Cost",
    editable: true,
  },
];

// specify the data
const rowData = [
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
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
});
