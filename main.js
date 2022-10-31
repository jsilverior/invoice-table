let totalValidAmount = 0;

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
    "background-color": params.value >= 2000 ? "#ffcc80" : "#81c784",
    padding: "0 4px",
  };
}

function onCellValueChanged(event) {
  if (event.colDef.field === "valid_detail_cost") {
    totalValidAmount = totalValidAmount - +event.oldValue + +event.newValue;
    const validAmountInput = document.getElementById("valid_amount_input");
    if (validAmountInput) {
      validAmountInput.value = totalValidAmount;
      validAmountInput.className = "form-control value_changed";

      setTimeout(() => {
        validAmountInput.className = "form-control";
      }, 4000);
    }
  }
}

const columnDefs = [
  {
    field: "lineItem",
    headerName: "List Item",
    cellRenderer: "agGroupCellRenderer",
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

const detailColumnDefs = [
  {
    field: "reception_number",
    headerName: "Reception No#",
  },
  { field: "upc", headerName: "UPC", resizable: true },
  {
    field: "item_number",
    headerName: "Item No#",
  },
  {
    field: "lv_number",
    headerName: "LV #",
  },
  {
    field: "deal_description",
    headerName: "Deal Description",
  },
  {
    field: "deal_unit",
    headerName: "Deal Unit",
  },
  {
    field: "deal_uom",
    headerName: "Deal UOM",
  },
  {
    field: "doc_deal_value",
    headerName: "Doc Deal Value",
  },
  {
    field: "inv_deal_value",
    headerName: "Inv Deal Value",
  },
  {
    field: "valid_deal_value",
    headerName: "Valid Deal Value",
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

const detailCellRendererParams = {
  detailGridOptions: {
    onGridReady: (event) => event.api.sizeColumnsToFit(),
    columnDefs: detailColumnDefs,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
  },
  getDetailRowData: (params) => {
    params.successCallback([
      {
        reception_number: 123451,
        upc: "Description 1",
        item_number: "10,000",
        lv_number: "1",
        deal_description: "10000",
        deal_unit: "10000",
        deal_uom: "10000",
        doc_deal_value: "1000",
        inv_deal_value: "1000",
        valid_deal_value: "2000",
      },
    ]);
  },
};

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  onGridReady: (event) => event.api.sizeColumnsToFit(),
  rowData: rowData,
  singleClickEdit: true,
  rowStyle: { background: "fafafa" },

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
  masterDetail: true,
  detailCellRendererParams,
  onCellValueChanged: onCellValueChanged,
};

// setup the grid after the page has finished loading
document.addEventListener("DOMContentLoaded", () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);

  const themeSelector = document.getElementById("theme_selector");
  const tableReference = document.getElementById("myGrid");
  const invoiceNumberInput = document.getElementById("invoice_number_input");

  if (invoiceNumberInput) {
    invoiceNumberInput.addEventListener("blur", (event) => {
      const value = event.target.value;
      if (value?.length) {
        invoiceNumberInput.classList.remove("invalid_input");
        return;
      }
      invoiceNumberInput.classList.add("invalid_input");
    });
  }

  if (themeSelector) {
    tableReference.className = localStorage.getItem("savedTheme");
    themeSelector.value = localStorage.getItem("savedTheme");
    themeSelector.addEventListener("change", (event) => {
      const value = event.target.value;
      tableReference.className = value;
      localStorage.setItem("savedTheme", value);
    });
  }
  gridOptions.rowData.forEach((item) => {
    totalValidAmount += +item.valid_detail_cost;
  });

  const validAmountInput = document.getElementById("valid_amount_input");
  if (validAmountInput) {
    validAmountInput.value = totalValidAmount;
  }
});
// function to filter with search bar
function onFilterTextBoxChanged() {
  gridOptions.api.setQuickFilter(
    document.getElementById("filter-text-box").value
  );
}
