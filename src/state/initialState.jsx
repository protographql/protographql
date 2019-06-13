export const selectedTableState = {
  type: '',
  fields: {},
  fieldIndex: 1,
  tableID: 0
};

export const initialTableState = {
  type: '',
  fields: {
      1: {
      name: '',
      type: 'ID',
      primaryKey: false,
      autoIncrement: false,
      unique: false,
      defaultValue: '',
      required: false,
      multipleValues: false,
      relationSelected: false,
      relation: {
        tableIndex: -1,
        fieldIndex: -1,
        refType: ''
      },
      refBy: new Set(),
      queryable: true,
      tableNum: 0,
      fieldNum: 1,
    }
  },
  fieldIndex: 2,
  tableID: 0
};

export const initialFieldState = {
  name: '',
  type: 'ID',
  primaryKey: false,
  autoIncrement: false,
  unique: false,
  defaultValue: '',
  required: false,
  multipleValues: false,
  relationSelected: false,
  relation: {
    tableIndex: -1,
    fieldIndex: -1,
    refType: ''
  },
  refBy: new Set(),
  queryable: true,
  tableNum: -1,
  fieldNum: -1,
};

export const tableIndexState = 0;

export const tablesState = {};

//this will toggle the tab shown in the sandbox area
//potential tabs for MVP are code & schema, stretch would include GQL setup area
export const viewState = 'schema';

//this will toggle popups
//potential popups are welcome and export (select folder to save & success)
export const popUpState = 'welcome';