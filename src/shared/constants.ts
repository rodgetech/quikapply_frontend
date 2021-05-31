export const DRAWER_TYPES = {
  SECTION_LAYOUT_PICKER_DRAWER: "SECTION_LAYOUT_PICKER_DRAWER",
  ROW_LAYOUT_PICKER_DRAWER: "ROW_LAYOUT_PICKER_DRAWER",
  ENTER_SECTION_INFO_DRAWER: "ENTER_SECTION_INFO_DRAWER",
  INPUT_PICKER_DRAWER: "INPUT_PICKER_DRAWER",
  INPUT_OPTIONS_DRAWER: "INPUT_OPTIONS_DRAWER",
  APPLICATION_FORM_DRAWER: "APPLICATION_FORM_DRAWER",
  SECTION_FORM_DRAWER: "SECTION_FORM_DRAWER",
};

export const MODAL_TYPES = {
  APPLICANT_EMAIL_REQUEST: "APPLICANT_EMAIL_REQUEST",
};

export const INPUT_TYPES = {
  NUMBER_INPUT: "NumberInput",
  TEXT_INPUT: "TextInput",
  DATE_PICKER_INPUT: "DatePickerInput",
  CHECKBOX_INPUT: "CheckboxInput",
  RADIO_INPUT: "RadioInput",
  UPLOAD_INPUT: "UploadInput",
};

export const INPUTS = [
  { name: "Text Input", inputType: INPUT_TYPES.TEXT_INPUT },
  { name: "Number Input", inputType: INPUT_TYPES.NUMBER_INPUT },
  { name: "Checkbox", inputType: INPUT_TYPES.CHECKBOX_INPUT },
  { name: "Radio", inputType: INPUT_TYPES.RADIO_INPUT },
  { name: "Date Picker", inputType: INPUT_TYPES.DATE_PICKER_INPUT },
  { name: "File Upload", inputType: INPUT_TYPES.UPLOAD_INPUT },
];
